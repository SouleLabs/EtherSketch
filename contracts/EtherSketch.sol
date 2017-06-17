pragma solidity ^0.4.8;

import './zeppelin/SafeMath.sol';
import './zeppelin/ownership/Ownable.sol';

contract EtherSketch is Ownable {
  using SafeMath for uint;
  //each owner can have multiple changes to the same parent file
  mapping(address => mapping(string => string)) files;
  //Store the cost per pixel change.
  uint costPerPixel = 1 finney;

  //Disallow anyone to send ether to the address
  function () payable {
    throw;
  }

  //Determine the total cost for persistence of the image.
  function costForPersistence(uint numOfChanges) returns (uint) {
    return costPerPixel * numOfChanges;
  }

  //Set the cost per pixel. Can be set only by the owner.
  function setCostPerPixel(uint value) external onlyOwner returns (bool) {
    costPerPixel = value;
  }

  //Function that is called post peristence of the file on the ipfs.
  function persistFile(uint numOfChanges,string sourceHash,string changesHash) external payable {
    uint cost = costForPersistence(numOfChanges);
    if(msg.value < cost) throw;
    //replace last changed file with the new hash
    files[msg.sender][sourceHash] = changesHash;
  }

  function getFilesFor(address _owner,string _source) external returns (string) {
    return files[_owner][_source];
  }
}
