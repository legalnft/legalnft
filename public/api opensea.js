const options = {method: 'GET'};



fetch('https://api.opensea.io/api/v1/asset/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB/754/', options)



  .then(response => console.log(response.json()))
  .catch(err => console.error(err));
  
  