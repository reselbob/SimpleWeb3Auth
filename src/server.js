const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ethUtil = require('ethereumjs-util');
const path = require('path'); // Required for file paths

app.use(bodyParser.json());

// Replace this with your own secret key (used to sign JWT tokens)
const secretKey = 'w87LqcTUMeA7U8v@#yEEZX2KfH@G9mWxxx';

// Mock user database (you should use a real database)
const users = {};

// Middleware to verify MetaMask signature
function verifySignature(req, res, next) {
    const { address, signature, message } = req.body;

    // Verify the signature using eth-sig-util
    const msgBuffer = ethUtil.toBuffer(message);
    const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
    const signatureBuffer = ethUtil.toBuffer(signature);
    const sigParams = ethUtil.fromRpcSig(signature);
    const publicKey = ethUtil.ecrecover(
        msgHash,
        sigParams.v,
        sigParams.r,
        sigParams.s
    );
    //const publicKey = ethUtil.ecrecover(msgHash, signatureBuffer, 0);
    //TODO clear up the parsing mismatch
    const senderAddress = ethUtil.pubToAddress(publicKey).toString('hex');

    if (senderAddress.toLowerCase() === address.toLowerCase()) {
        // Signature is valid
        req.senderAddress = senderAddress;
        return next();
    } else {
        return res.status(401).json({ error: 'Invalid signature' });
    }
}

// Route for handling MetaMask login
app.post('/login', verifySignature, (req, res) => {
    const { senderAddress } = req;

    // Check if the user is already registered
    if (users[senderAddress]) {
        // User exists, generate a JWT token (you should use a real authentication library)
        const token = generateAuthToken(senderAddress);
        return res.json({ token });
    } else {
        // User is not registered, you may choose to register them
        return res.status(401).json({ error: 'User not registered' });
    }
});

// Helper function to generate a JWT token (replace with your own token generation logic)
function generateAuthToken(senderAddress) {
    // In a real application, you'd typically use a library like jsonwebtoken
    return `Bearer ${senderAddress}`;
}

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3111;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
