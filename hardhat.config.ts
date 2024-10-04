const { vars } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

//const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
//const PRIVATE_KEY = vars.get("ACCOUNT_PRIVATE_KEY");
//const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");



const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const config = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },

};

module.exports = config;    


//0x9c81Be24107E2F0415294602B0048018dAbfFFCb