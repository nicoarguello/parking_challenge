require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

function prueba(req, res, next) {
 const City= req.query.location
 console.log(City)
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=${City}&limit=50&categories=parking`,
      // `https://api.yelp.com/v3/businesses/matches?location=ny&categories=parking`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Origin: "localhost",
          whihCredentials: true,
        },
      }
    )
    .then((response) => {
      console.log(response.data.businesses)
      var array= []
      for(let i=0; i<response.data.businesses.length; i++) {
        // if(response.data.businesses[i].location.city.includes(City.toLowerCase().charAt(0).toUpperCase() +
        // req.query.name.slice(1).toLowerCase())){
        array.push({
          city:response.data.businesses[i].location.city,
          name:response.data.businesses[i].name,
          image:response.data.businesses[i].image_url,
          address:response.data.businesses[i].location.address1,
          rating:response.data.businesses[i].rating,
          review_count:response.data.businesses[i].review_count,
          url:response.data.businesses[i].url,
          score:(response.data.businesses[i].review_count * response.data.businesses[i].rating) /(response.data.businesses[i].review_count + 1)

        })
      }
      res.send(array);
    })
    .catch((error) => next(error));
}

module.exports = {
  prueba,
};
