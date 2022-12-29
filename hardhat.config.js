require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

// https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan
// npx hardhat run scripts/deploy.js --network goerli

const URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: URL,
      accounts: [PRIVATE_KEY],
    },
    ganache: {
      url: "http://127.0.0.1:8545/",
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};