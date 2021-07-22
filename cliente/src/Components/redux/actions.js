import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()



export const GET = 'GET'


export function search(value) {
    return function (dispatch) {
      // const token = 'Access-Control-Allow-Origin';
    // const API_KEY = 'kXwhc4WyX9Uh1MRsRxVzZ5vIUn1K5vTCE1l2NURLFyo-jzLYJbMY19gN1baGvZ9B_jkup8ZUxCFrERC-zm4zPvIGzG4A7eYipHzk2CtSDXhjufjLST9cI4c8lUr3YHYx';

      axios.get(`http://localhost:3001?location=${value}&categories=parking`)
   
      .then(response => {
        
        dispatch ({
          type: GET,
          payload: response.data
          })

      })
    };
  }


