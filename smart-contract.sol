// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;


contract registry {
  
  string  ipfsPrefix = "https://ipfs.fleek.co/ipfs/";
  
 
  
  
    mapping (address => mapping (uint256 => string)) public licenseRegistry; 

    
    function addLicense (address _nftContract, uint _tokenId, string calldata _ipfsHash) public {

        //require(_nftContract.ownerOf(_tokenId) == msg.sender);
        

        require (bytes(licenseRegistry[_nftContract][_tokenId]).length == 0);


        licenseRegistry[_nftContract][_tokenId] = string(abi.encodePacked(ipfsPrefix, _ipfsHash));

    }
    
    function getLicense (address _nftContract, uint _tokenId) public view returns (string memory ) {
        
         return licenseRegistry[_nftContract][_tokenId];

    }

    
}
