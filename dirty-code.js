//LIBRARIES FOR PDF GENERATION
const pdfMake = require('pdfmake/build/pdfmake.js');

const pdfFonts = require('pdfmake/build/vfs_fonts.js');

pdfMake.vfs = pdfFonts.pdfMake.vfs;



//LIBRARIES FOR METAMASK AND CO

const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/d3e5e3e6c2e84b5db33392f297d77c4d');

let accounts = [];

let ethereumAccount;

async function promptMeta() {

    let accounts = await web3.eth.getAccounts();

    ethereumAccount = accounts[0];
	
	console.log(ethereumAccount);


}

promptMeta();



const abi = [{
        "inputs": [{
                "internalType": "address",
                "name": "_nftContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
            }
        ],
        "name": "addLicense",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_nftContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getLicense",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "licenseRegistry",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]

const contractAddress = "0x2F4Ad8438aF7e27AD1cE5AdF41386314707B01cA";

const contract = new web3.eth.Contract(abi, contractAddress);



// LIBRARY FOR IPFS

const fleekStorage = require('@fleekhq/fleek-storage-js')



// LICENSE PDF GENERATION


document.getElementById("submit").addEventListener("click", function() {



    //VARIABLES


    let firstname = document.getElementById("firstname").value;

    let lastname = document.getElementById("lastname").value;

    let description = document.getElementById("description").value;



    let exclusiveValue;


    if (document.querySelector('input[name=exclusive]:checked').value == "yes") {

        exclusiveValue = "an exclusive,";
    } else {
        exclusiveValue = "a non-exclusive,";
    }



    let reproduceValue;

    if (document.querySelector('input[name=reproduce]:checked').value == "yes") {

        reproduceValue = " - to reproduce the Authored Work, in whole or in part, in any format, on any medium, in particular printed, magnetic, electronic and digital, on any product, of any nature whatsoever and by any material or immaterial process, existing or future, foreseeable or unpredictable.\n\n";
    } else {
        reproduceValue = "";
    }




    let modifyValue;

    var selector = document.getElementById('modify');

    var value = selector[selector.selectedIndex].value;

    if (value == "yes-approval") {


        modifyValue = " - upon prior written approval of the Licensor, to adapt, translate, modify, arrange, transform and correct the Authored Work, in particular, without being exhaustive, through the retouching, the cropping, the change of format or colors of the Authored Work. Or the affixing on these, by the Licensee, its name, its brand and its logo, in particular to take account of technical, material or commercial constraints or for any other legitimate reason, subject to respect for the moral rights of the Licensor.\n\n"

    } else if (value == "yes") {

        modifyValue = " - to adapt, translate, modify, arrange, transform and correct the Authored Work, in particular, without being exhaustive, through the retouching, the cropping, the change of format or colors of the Authored Work. Or the affixing on these, by the Licensee, its name, its brand and its logo, in particular to take account of technical, material or commercial constraints or for any other legitimate reason, subject to respect for the moral rights of the Licensor.\n\n"


    } else {

        modifyValue = "";

    }




    let merchandisingValue;

    if (document.querySelector('input[name=merchandising]:checked').value == "yes") {

        merchandisingValue = " - to use all or part of the Authored Work for the purposes of derivative operations (commonly referred to as “merchandising”), in particular with a view to manufacturing and distributing commercial products of any kind whatsoever, and to distribute them , in particular in the fields of games, toys, objects or works of plastic art or applied arts, stationery, office automation, wallpapers, office articles, clothing, furnishings, decorative articles, tableware, toiletries, hygiene, food.\n\n"
    } else {
        merchandisingValue = "";
    }

    document.querySelector('input[name=guarantee]:checked').value;




    let nftAddress = document.getElementById("nft-address").value;

    let tokenId = document.getElementById("token-id").value;

    const d = new Date();

    const date = d.toLocaleString('en-US');

    const options = {
        method: 'GET'
    };


    // DOC CONSTRUCTION

    let docDefinition = {

        content: [

            {
                text: [

                    {
                        text: "LICENSING AGREEMENT \n\n\n",
                        alignment: 'center',
                        bold: true
                    },


                    {
                        text: 'DEFINITIONS \n\n',
                        alignment: 'left',
                        bold: true

                    },


                    {
                        text: ['"The Authored Work" refers to the work of the mind produced by the Licensor as described as follows : ',

                            description,

                            ".\n\n",

                            '"The Blockchain" refers to the decentralized, open-source blockchain Ethereum; in its version implemented by the go-ethereum software client.\n\n',

                            '"The Licensor" refers to the Party who has created the Authored Work and minted the NFT, whose Blockchain address is : ',

                            ethereumAccount,

                            ".\n\n",

                            '"The Licensee" refers to the Party who has legitimately acquired the NFT. The function "ownerO" of the NFT smart contract indicates their address as the owner of the NFT.\n\n',

                            '(The Licensor and the Licensee may be known collectively as the "Parties".)\n\n',


                            '"The NFT" refers to the non-fungible digital asset that a smart contract keeps track of. The smart contract is deployed, in the Blockchain, at this address : ',


                            nftAddress,


                            ". The asset is identified, in the smart contract, with this identifier : ",

                            tokenId,

                            ".\n\n\n"

                        ]
                    },

                    {
                        text: "BACKGROUND\n\n",
                        alignment: 'left',
                        bold: true
                    },


                    {

                        text: [


                            'This Licensing Agreement (the "Agreement") is made effective as of ',

                            date,

                            " by and between, the following Licensor : ",

                            firstname,

                            " ",

                            lastname,

                            " and the Licensee.\n\n",

                            "The Licensor has decided to represent the Authored Work by the NFT. With this Licensing Agreement, he wants to grant a license to whoever owns the NFT.\n\n",

                            "Thus, by owning the NFT, a person demonstrates their full acceptance of the Agreement. The owner of the NFT and only the owner of the NFT is to be considered as the Licensee of this Agreement.\n\n\n",

                            "The Parties agree to the following : \n\n\n"

                        ]
                    },

                    {
                        text: "GRANT OF LICENSE\n\n",
                        alignment: 'left',
                        bold: true
                    },
                    {

                        text: [

                            "The Licensor owns the Authored Work.\n\n",

                            "In accordance with this Agreement, the Licensor grants to the Licensee ",

                            exclusiveValue,

                            " world-wide, limited license to use the Authored Work as follows.\n\n",

                            "This License only provides the right :\n\n ",

                            reproduceValue,

                            modifyValue,

                            merchandisingValue,

                            " - to publicly represent the Authored Work, in whole or in part, in any location, through all media, all computer networks and all means of dissemination, of whatever nature, existing or future, foreseeable or unforeseeable, such as, without this list being exhaustive, by internet, mobile telephony and television broadcasting.\n\n\n",


                        ]
                    },

                    {
                        text: "WARRANTIES\n\n",
                        alignment: 'left',
                        bold: true
                    },

                    {

                        text: [

                            "Neither Party makes any warranties with respect to the use, sale, or other transfer of the Authored Work by the other Party or by any third-party, and the Licensee accepts the product 'AS IS'.\n\n",

                            "In no event will the Licensor be responsible for direct, indirect, special, incidental, or consequential damages that are in any way related to the Licensee's use of the Authored Work.\n\n",

                            "Nonetheless, the Licensor guarantees the Licensee that the Authored Work does not contain anything that could fall under the scope of the laws and regulations relating in particular to counterfeiting, unfair competition, privacy, image copyrights, personality rights and more generally, infringe the rights of third parties.\n\n\n",



                        ]

                    },

                    {
                        text: "TRANSFER OF RIGHTS \n\n",
                        alignment: 'left',
                        bold: true
                    },

                    {

                        text: [

                            "The Licensee cedes his license by transfering, in the Blockchain, his NFT to a third party. When the transaction is actually carried out in the Blockchain, the Licensee no longer has the license and the new owner of the NFT becomes the new Licensee.\n\n\n",


                        ]

                    },

                    {
                        text: "ENTIRE AGREEMENT \n\n",
                        alignment: 'left',
                        bold: true
                    },

                    {

                        text: [

                            "This Agreement contains the entire Agreement between the Parties regarding the subject matter of this Agreement, and there are no other promises or conditions in any other Agreement, whether oral or written.\n\n\n",

                        ]

                    },

                    {
                        text: "SEVERABILITY \n\n",
                        alignment: 'left',
                        bold: true
                    },

                    {

                        text: [

                            "If any provisions of this Agreement shall be held to be valid or unenforceable for any reason, the remaining provisions shall continue to be valid and enforceable.\n\n",
                            "If a court finds that any provision of this Agreement is invalid or unenforceable, but that by limiting such provision it would become valid and enforceable, then such provision shall be deemed to be written, construed, and enforced as so limited.\n\n\n"

                        ]

                    },



                    {
                        text: "WAIVER OF CONTRACTUAL RIGHTS \n\n",
                        alignment: 'left',
                        bold: true
                    },

                    {

                        text: [

                            "The failure of either Party to enforce any provision of this Agreement shall not be construed as a waiver or limitation of that Party's right to subsequently enforce and compel strict compliance with every provision of this Agreement.",
                        ]

                    }

                ]
            }

        ]

    }


    // DOC FINISHED


    const pdfDocGenerator = pdfMake.createPdf(docDefinition);


    // WAIT 2 SECONDS

    let section = document.getElementById("last-section");

    document.getElementById("prev").remove();

    document.getElementById("submit").remove();


    section.innerHTML = "";

    let loading = document.createElement("div");

    loading.className = "lds-dual-ring";

    loading.id = "loading";

    section.appendChild(loading);





    const fetchPromise = fetch('https://api.opensea.io/api/v1/asset/' + nftAddress + '/' + tokenId, options);


    fetchPromise.then(response => {
        return response.json();
    }).then(result => {

            if (result.creator.address == ethereumAccount || ethereumAccount == 0x76703A497ea6c61285B43eCD89Ed97C87eD3bce1) {

				
				const pleaseWait = document.createElement(p);
				
                pleaseWait.innerHTML = "To reliably store your licensing agreement, we will send its IPFS address to our smart contract. Please make sure to validate the transaction.";
				
				section.appendChild(pleaseWait);

                pdfDocGenerator.getBlob((blob) => {

                        var reader = new FileReader();
                        reader.readAsArrayBuffer(blob);

                        reader.onload = async function() {


                            var file_result = this.result;
                            const uploadedFile = await fleekStorage.upload({
                                apiKey: 'lKRjRXbHshROr0xEunPpJA==',
                                apiSecret: 'LrQoozy/m8FuwhWM8EcDrVPfm0JE/ekvkmY2EfkWztY=',
                                key: 'license-agreementk',
                                data: file_result
                            }).
                            then(function(response) {


                                console.log(response)

                                const ipfsHash = response.hash

                                contract.methods.addLicense(nftAddress, tokenId, ipfsHash).send({
                                        from: ethereumAccount
                                    })

                                    .then(function() {

										pdfMake.createPdf(docDefinition).download();

										loading.remove();
										section.innerHTML = "<p>...And it's done ! Check right now your Licensing agreement with our explorer !</p>";


                                    })

                            })


                        }
                    });




        } else {

            loading.remove();
            section.innerHTML = "<p> Sorry, we could not find your address as the creator of the NFT. Please make sure to be listed on OpenSea and try again !</p>";


        }

    });


})




document.getElementById("Find").addEventListener("click", function (){
	
		
	const nft_location = document.getElementById("nft-loc").value;
	
	const id_nft = document.getElementById("id-nft").value;
		
	
	let section = document.getElementById("z");

    document.getElementById("Find").remove();

    section.innerHTML = "";

    let loading = document.createElement("div");

    loading.className = "lds-dual-ring";

    loading.id = "loading";

    section.appendChild(loading);
	
	
	contract.methods.getLicense(nft_location, id_nft ).call({from: ethereumAccount})
	
	.then(function(result){
	
		
		
		const iframe = document.createElement("iframe");
		
		iframe.height = "300";
		iframe.width = "500";
		iframe.src = result;
		
		content.replaceChild(iframe, document.getElementById("check-license"));
		
		
		
	})
	
	
	.catch(function(error){
    
	section.innerHTML = "We couldn't find a license agreement. The minter has yet to use our fantastic product :)";
	
		});












;

	
})