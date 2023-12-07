# Car Rent DApp - README

Welcome to the Car Rent DApp! This decentralized application (DApp) is designed for car rental ventures, providing a streamlined process for users to hire cars. Car owners can set their own hire rates, and the admin plays a crucial role in approving suitable cars for hire, ensuring the company's image is protected.


# Car Rental DApp on Celo

## Introduction

In this tutorial, we will learn how to create a decentralized application (DApp) that runs on the Celo blockchain platform. The DApp will allow users to rent cars and make payments using cryptocurrency. The DApp will consist of two main parts: a smart contract written in Solidity and a frontend user interface written in React.

The smart contract will define the logic and data of the car rental system, such as the available cars, the rental prices, the booking status, and the payment methods. The frontend user interface will interact with the smart contract and display the information to the users. The users will be able to browse the cars, book a car, and pay for the rental using their Celo wallet.

## Features

- User-Friendly Interface
- Car Listing: Car owners can list their vehicles for hire as well end user
- Deployed contract wallet address which is the admin approve and reject cars that are not suitable fo the company 
- Transaction History Users can view their previous transactions with address they have transact with 
- Real-time Availability-Instant updates on car availability, users can check if a particular car is currently on hire
- Payment Handling: Secure payment processing, users can only hire a car if the previous user has completed the payment.
We will use the following tools and technologies to create our DApp:

- [Hardhat]: A development environment for writing, testing, and deploying smart contracts on Ethereum and Celo.
- [Solidity]: A programming language for writing smart contracts on Ethereum and Celo.
- [Celo SDK]: A collection of libraries and tools for developing applications on Celo.
- [React]: A JavaScript library for building user interfaces.
- [Ethers.js]: A JavaScript library for interacting with Ethereum and Celo nodes and smart contracts.
- [Bootstrap]: A CSS framework for designing responsive and mobile-friendly web pages.
- [MetaMask]: A browser extension that allows users to access their Celo wallet and interact with DApps.

## Prerequisites

Before we start, we need to make sure that we have the following prerequisites installed and set up:

- [Node.js]: A JavaScript runtime environment that allows us to run our code on the server and the browser.
- [npm]: A package manager for Node.js that allows us to install and manage dependencies.
- [Git]: A version control system that allows us to track and manage changes to our code.
- [MetaMask]: A browser extension that allows us to access our Celo wallet and interact with DApps. We need to install MetaMask on our browser and create a Celo account. We also need to switch the network to **Alfajores Testnet** and get some test Celo tokens from the [faucet].

## Setting up the project

To set up our project, we will use Hardhat, a development environment for writing, testing, and deploying smart contracts on Ethereum and Celo. Hardhat will help us to compile, test, and deploy our smart contract, as well as to create a local Celo node for testing purposes.

To install Hardhat, we need to run the following command in our terminal:

```bash
npm install --save-dev hardhat
```

This will create a `node_modules` folder and a `package.json` file in our current directory. The `node_modules` folder contains the dependencies that we installed, and the `package.json` file contains the information and configuration of our project.

Next, we need to initialize our Hardhat project by running the following command:

```bash
npx hardhat
```

This will prompt us to select a sample project or create an empty one. We will choose to create an empty one, as we will write our own smart contract and frontend. This will create a `hardhat.config.js` file in our current directory, which contains the configuration of our Hardhat project.

We also need to install some plugins and dependencies that we will use for our project. We will use the following plugins and dependencies:

- [@nomiclabs/hardhat-ethers]: A plugin that allows us to use the Ethers.js library in our Hardhat project.
- [@celo-tools/hardhat-celo]: A plugin that allows us to deploy our smart contract to the Celo network.
- [@openzeppelin/contracts]: A library that provides us with some useful and secure smart contract templates and utilities.
- [dotenv]: A library that allows us to load environment variables from a `.env` file.

To install these plugins and dependencies, we need to run the following command:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers @celo-tools/hardhat-celo @openzeppelin/contracts dotenv
```

Next, we need to create a `.env` file in our current directory and add the following environment variables:

```bash
PRIVATE_KEY= # Your Celo private key
INFURA_PROJECT_ID= # Your Infura project ID
```

The `PRIVATE_KEY` is the private key of our Celo account that we will use to deploy our smart contract. We can get it from MetaMask by clicking on the account icon, selecting **Account Details**, and clicking on **Export Private Key**. We need to keep this private key secret and never share it with anyone.

The `INFURA_PROJECT_ID` is the project ID of our Infura account that we will use to connect to the Celo network. Infura is a service that provides us with access to Celo nodes without having to run our own. We can get it by creating an account on [Infura], creating a new project, and selecting **Celo** as the network.

Finally, we need to update our `hardhat.config.js` file to include the plugins and the network configuration. We need to add the following lines at the top of the file:

```javascript
require("@nomiclabs/hardhat-ethers");
require("@celo-tools/hardhat-celo");
require("dotenv").config();
```

And the following lines at the bottom of the file:

```javascript
module.exports = {
  // ...
  networks: {
    alfajores: {
      url: `https://alfajores-forno.celo-testnet.org`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
```

This will tell Hardhat to use the plugins that we installed, load the environment variables from the `.env` file, and connect to the Alfajores testnet using our Celo account and Infura project ID.

We have now set up our Hardhat project and we are ready to write our smart contract.

## Writing the smart contract

To write our smart contract, we will use Solidity, a programming language for writing smart contracts on Ethereum and Celo. Solidity is a statically typed, contract-oriented, and high-level language that supports inheritance, libraries, and complex user-defined types.

We will create a new file called `CarRental.sol` in the `contracts` folder of our Hardhat project and add the contract code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


Once the project is running, you can access it in your browser at `http://localhost:3000`. Here are some usage examples:

- Connect your wallet
- Navigate to Hire cars on your navbar
- Rent a car of your choice
- Make payment and View rental history

## Contributing

If you would like to contribute to CarRent, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request
