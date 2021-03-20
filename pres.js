


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
	
	
