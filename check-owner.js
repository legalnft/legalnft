
const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider||'https://ropsten.infura.io/v3/d3e5e3e6c2e84b5db33392f297d77c4d');

let accounts = [];



document.getElementById("submit").addEventListener("click", function () {
	
	makeLicense ();
	
	const compteEthereum = accounts[0];
	
	console.log(compteEthereum);
	
	const nftAddress = document.getElementById("nft-address").value;
	
	const tokenId = document.getElementById("token-id").value;
	
	const options = {method: 'GET'};

	
	
	const fetchPromise = fetch('https://api.opensea.io/api/v1/asset/' + nftAddress + '/' + tokenId, options);
	
	
		fetchPromise.then(response => {
		  return response.json();
		}).then(result => {
			
			if (result.creator.address == compteEthereum) {
				
				
				
			} else {
				
				
				
			} 
			
		});
  
	
})


  