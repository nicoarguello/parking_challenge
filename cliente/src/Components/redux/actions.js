import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
const {API_KEY} = process.env


export const GET = 'GET'

// export const URL = "https://price-hunter-backend.herokuapp.com/";
// var URL = 'https://api.yelp.com/v3/businesses/search?location=40515&term&categories=vet&limit=10';


export function search() {
    return function (dispatch) {
      const token = 'Access-Control-Allow-Origin';
    // const API_KEY = 'kXwhc4WyX9Uh1MRsRxVzZ5vIUn1K5vTCE1l2NURLFyo-jzLYJbMY19gN1baGvZ9B_jkup8ZUxCFrERC-zm4zPvIGzG4A7eYipHzk2CtSDXhjufjLST9cI4c8lUr3YHYx';

      axios.get(`https://api.yelp.com/v3/businesses/search?location=NYC&categories=bars&open_now=true`, {
        // headers: { 
        //   Host: api.yelp.com,
        //   Authorization: Bearer + API_KEY, 
        //   Cache_Control: no-cache
        // }
        headers: { 
          Authorization: `Bearer ${API_KEY}`,
          Origin:'localhost',
          whihCredentials: true
      },  
      }).then(response => {
        
        dispatch ({
          type: GET,
          payload: response.data
          })

      })
    };
  }


//   var req = new Request(url, {
//     method: 'GET',
//     headers: new Headers({
//       Authorization: `Bearer ${API_KEY}`,
//       Content_Type: 'application/json'
//     }),
//     mode: 'no-cors'
//   });

//  fetch (req)
//    .then((response) => {
//       if(response.ok){
//       return response.json();
//     }else{
//       throw new Error();
//     }
//   })
//   .then((jsonData) => {
//       console.log(jsonData);
//     })
//    .catch((err) => {
//       console.log('ERROR: ', err.message);
//     });