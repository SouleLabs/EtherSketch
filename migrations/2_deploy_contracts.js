var EtherSketch = artifacts.require("./EtherSketch.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherSketch);
};
