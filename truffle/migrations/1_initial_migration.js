const Migrations = artifacts.require("Migrations");
const DummyToken = artifacts.require("DummyToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DummyToken);
};
