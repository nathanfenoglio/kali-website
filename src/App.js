import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Art_1 from "./components/Art_1";

class App extends Component{
	render(){
		  return (
        <Router>
          <div className="App">
            <Navbar />
            <Route path="/Art_1" exact component={Art_1}/>

          </div>
        </Router>
		  );
	}
}

export default App;
