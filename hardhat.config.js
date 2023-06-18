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
      url: "https://mainnet.infura.io/v3/f2a724dd098b4298b61f32d2bc9364f2",
      accounts: [privateKey],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/f2a724dd098b4298b61f32d2bc9364f2",
      accounts: [privateKey],
    },
  },
};
