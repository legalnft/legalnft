(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){



function show(){
		
	if(document.getElementById("z")){
			
		document.getElementById("z").remove();

	}

	
	document.getElementById("check-license").style.display = 'none';

	
	document.getElementById("protect").style.display = 'block';
		

	
	}	



function check_nft (){ 
	
	if(!document.getElementById("z")){
		
		let section = document.createElement("section");
	
		section.id = "z";
		
		section.style.display = "block";
		
		section.innerHTML = "<p>Find your NFT's license</p><input type='text' placeholder='Your NFT address'  id=''/><input type='text' placeholder='Your Token's ID' id=''/>"
		
				
		document.getElementById("check-license").insertBefore(section, document.getElementById("load"));
		
		document.getElementById("check-license").style.display ="block";
		
		document.getElementById("protect").style.display = 'none';

		
		
	}
	
	
	document.getElementById("check-license").style.display = 'block';

	document.getElementById("protect").style.display = 'none';
		

}
	
	

},{}]},{},[1]);
