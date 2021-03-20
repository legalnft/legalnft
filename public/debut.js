const fleekStorage = require('@fleekhq/fleek-storage-js')

const pdfMake = require('pdfmake/build/pdfmake.js');

const pdfFonts = require('pdfmake/build/vfs_fonts.js');

pdfMake.vfs = pdfFonts.pdfMake.vfs;


  
  
let docDefinition = {

        content: [

            {
                text: [

                    {
                        text: "CONTRAT DE CESSION DE DROITS D’AUTEUR \n\n\n",
                        alignment: 'center',
                        bold: true
                    }	
                ]
            }

        ]

    }
  

const pdfDocGenerator = pdfMake.createPdf(docDefinition);


pdfDocGenerator.getBlob((blob) => {
	
	var reader = new FileReader();
		reader.readAsArrayBuffer(blob);
		
			reader.onload = async function () {
				
				
				var file_result = this.result; 
				const uploadedFile = await fleekStorage.upload({
					apiKey: 'lKRjRXbHshROr0xEunPpJA==',
					apiSecret: 'LrQoozy/m8FuwhWM8EcDrVPfm0JE/ekvkmY2EfkWztY=',
					key: 'license-agreementk',
					data: file_result
				  }).
				  then(response => console.log(response))
			};
			
});


  pdfDocGenerator.getBlob((blob) => {
	
	var reader = new FileReader();
		reader.readAsArrayBuffer(blob);
		
			reader.onload = async function () {
				
				
				var file_result = this.result; 
				const uploadedFile = await fleekStorage.upload({
					apiKey: 'lKRjRXbHshROr0xEunPpJA==',
					apiSecret: 'LrQoozy/m8FuwhWM8EcDrVPfm0JE/ekvkmY2EfkWztY=',
					key: 'license-agreementk',
					data: file_result
				  }).
				  then(response => console.log(response))
			};
			
});
 



let section = document.getElementById("check");

	section.innerHTML = "<p>Please wait a couple of seconds..</p>";

	let loading = document.createElement("div");
	
	loading.className="lds-dual-ring";
	
	loading.id = "loading";
	
	section.appendChild(loading)