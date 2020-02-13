const {fetchBreedDescription} = require('./breedFetcher')


fetchBreedDescription("tiger", (error, description) => {
  if (error){
    if(error === "Page not found") {
      console.log("Wrong Path")
    } 
    else if (error === "Breed not found"){
      console.log("Breed not found")
    }
    else {
      console.log("error fetching", error)
    }
  } else if (!error) {
      console.log(description)
    } 
});