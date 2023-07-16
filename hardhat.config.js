require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    mainnet: {
      url: "https://mainnet.infura.io/v3/bbd25bb78c3442b9bcae882104805b4a",
      accounts: [privateKey],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/bbd25bb78c3442b9bcae882104805b4a",
      accounts: [privateKey],
    },
  },
};
