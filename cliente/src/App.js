import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/home/home";


function App() {
  return (
    <React.Fragment>
         <Route path="/" exact component={Home} />
    </React.Fragment>      
  );
}

export default App;
