import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/home/home";
// const cors = require('cors')
// const express = require('express')
// const server = express();

// server.use(cors())
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });


function App() {
  return (
    <React.Fragment>
         <Route path="/" exact component={Home} />
    </React.Fragment>      
  );
}

export default App;
