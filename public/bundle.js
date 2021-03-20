(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const options = {method: 'GET'};






document.getElementById("find").addEventListener("click", function (e) {
	
		
	const nftAddress = document.getElementById("nft-address").value;
	
	const tokenId = document.getElementById("token-id").value;
	

	fetch('https://api.opensea.io/api/v1/asset/' + nftAddress + '/' + tokenId, options)
	
	
	
	

	  .then(response => console.log(response.json()))
	  .catch(err => console.error(err));
  
  
  
	
	
	


	
	
})


  
},{}]},{},[1]);
