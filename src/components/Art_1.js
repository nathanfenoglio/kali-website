import React, { Component } from 'react';
import './Art_1.css';

import crazy_clock from "../images/crazy_clock.jpg";

export default class Art_1 extends Component{
    render(){
        return(
            <div className="art_1-container">
                {window.scrollTo(0, 0)}
                <h1 className="page-title">Art_1</h1>
                <h1 className="art-title">Picture 1</h1>
                <img className="art-image" src={crazy_clock}/>
            </div>
        )
    }
}