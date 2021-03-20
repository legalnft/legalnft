const options = {method: 'GET'};






document.getElementById("find").addEventListener("click", function (e) {
	
		
	const nftAddress = document.getElementById("nft-address").value;
	
	const tokenId = document.getElementById("token-id").value;
	

	fetch('https://api.opensea.io/api/v1/asset/' + nftAddress + '/' + tokenId, options)
	
	
	
	

	  .then(response => console.log(response.json()))
	  .catch(err => console.error(err));
  
  
  
	
	
	


	
	
})


  