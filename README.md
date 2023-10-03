# SimpleWeb3Auth
A project that demonstrates how to use a MetaMask wallet as a mechanism for website login and authentication.

This application consists of two parts. The first part is the web server. The second part is the client side web page that's used to access logic hosted on the web server.

The source code for the web server is located at [./src/server.js](./src/server.js).

The web page HTML is located at [./src/public/index.html](./src/public/index.html). The client side logic used by the HTML in the web page is located at [./src/public/functions.js](./src/public/functions.js).

|**IMPORTANT:**<br/>To access the application's web page, this project requires a web browser with the MetaMask plugin installed. For instructions on how install MetaMask in a web browser go [here](https://metamask.io/download/).|
|:--------------|

# Installing the application


In a terminal window execute the following command:

```bash
git clone https://github.com/reselbob/SimpleWeb3Auth.git
```

The application's source code will be downloaded into a folder named `SimpleWeb3Auth`.

# Running the application

## Step 1: Install the application dependencies

In a terminal window execute the following commands:

```bash
cd ./SimpleWeb3Auth
```

```bash
npm install
```

In a terminal window execute the following command:

## Step 2: start the web server

```bash
npm start
```

## Step 3: Access the application's web page.

Using a browser that has the MetaMask plugin installed, go to the URL

```bash
http://localhost:3111
```

You'll the following web page. 

![Screenshot 2023-10-03 at 11 08 07 AM](https://github.com/reselbob/SimpleWeb3Auth/assets/1110569/f550f9be-b9fd-482f-8858-0f631f1d6afe)

Click the button labeled `Login wiht MetaMask`. Clicking the button will present the MetaMask plugin UI. You'll be asked to sign in.


