const request = require('request');

const breedFetcher = function() {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;
  if (process.argv[2] === undefined) {
    console.log("Breed not defined");
  } else {
    request(url, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const data = JSON.parse(body);
        console.log(data[0].description);
      }
    });
  }
}

breedFetcher()