const Dmv = artifacts.require("Dmv.sol");

module.exports = function (deployer) {
  deployer.deploy(Dmv);
};