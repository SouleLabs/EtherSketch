pragma solidity ^0.4.8;

import './SafeMath.sol';
import './Ownable.sol';

contract EtherSketch is Ownable {
  using SafeMath for uint;
  struct Artefact {
    string ipfsId;
    address owner;
    uint cost;
  }
  Artefact[] files;
  //Store the cost per pixel change.
  uint costPerPixel = 1;

  function EtherSketch() {
  }

  //Disallow anyone to send ether to the address
  function () payable {
    throw;
  }

  //Determine the total cost for persistence of the image.
  function costForPersistence(uint numOfChanges) returns (uint) {
    return costPerPixel * numOfChanges;
  }

  //Set the cost per pixel. Can be set only by the owner.
  function setCostPerPixel(uint value) onlyOwner returns (bool) {
    costPerPixel = value;
  }

  //Function that is called post peristence of the file on the ipfs.
  function persistFile(uint numOfChanges,string _ipfsId) payable returns (bool) {
    uint cost = costForPersistence(numOfChanges);
    if(msg.value < cost) throw;

    files.push(Artefact(_ipfsId,msg.sender,cost));
  }
}
