//require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-network-helpers");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require('hardhat-contract-sizer');
//require("@nomiclabs/hardhat-etherscan");


// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require("./tasks/rebill");
require("./tasks/kickUnpaid");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//const ALCHEMY_API_KEY = "8eb9cb2c14a541c7833e07c3192bb6db";
const ALCHEMY_API_KEY = "8eb9cb2c14a541c7833e07c3192bb6db";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "730d1e14cc723f319e730ca9fa69be76b5129160615050123c1bbc8d3dd1a173";

// Faucets: https://faucets.chain.link/

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    //artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
      //allowUnlimitedContractSize: true,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
      gasMultiplier: 2
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "DCK4DQ71SB6ZIQUTISHHVSAKVYTFF999N2"
  },
  settings: { optimizer: { enabled: true, runs: 200, details: { yul: false }, }, }
};
