document.getElementById("Find").addEventListener("click", function (){
	
	
	const nft_location = document.getElementById ("nft-loc");
	const id_nft = document.getElementById("id-nft");
	
	
	contract.methods.getLicense(nft_location, id_nft ).call({from: accounts[0]})
	
	.then(function(result){
	
		
		const iframe = document.createElement("iframe");
		
		iframe.src = result;
		
		document.getElementById("check-license").replaceChild(iframe, document.getElementById("z"));
		
});

	
})