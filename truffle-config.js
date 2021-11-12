const configs = require("./src/helper/secret.json");
var HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '5777'
    },
    ropsten: {
      provider: new HDWalletProvider(configs.mnemonic, configs.testnetUri),
      network_id: 3
    }
  }
};
