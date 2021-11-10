const QuotriMigrate = artifacts.require("./Quotri.sol");

module.exports = function (deployer) {
  deployer.deploy(QuotriMigrate);
};
