const request = require('request');

const fetchBreedDescription = function(breed, callback){
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data)
    console.log(response.statusCode)
    // testing to see if there is a problem with the url
    if(response.statusCode !== 200){
      callback("Page not found", null)}
      else if (error !== null) {
        callback(error, null)
      }
      else if (data.length === 0) {
        callback("Breed not found", null) 
      }
      else {
        callback(null, data[0].description.trim())
      }
    }
  )};



module.exports = {
  fetchBreedDescription
}
