import React, { Component } from 'react';
import './Art_1.css';

import crazy_clock from "../images/crazy_clock.jpg";
import abstract_1 from "../images/abstract_1.jpg";

import abstract_2 from "../images/abstract_2.jpg";
import abstract_collage_1 from "../images/abstract_collage_1.jpg";

export default class Art_1 extends Component{
    render(){
        return(
            <div className="art_1-container">
                {window.scrollTo(0, 0)}
                
                <img className="art-image" src={crazy_clock}/>
                <img className="art-image" src={abstract_1}/>
                <h1 className="art-title">Picture 1</h1>
                <h1 className="art-title">Picture 2</h1>

                <img className="art-image" src={abstract_2}/>
                <img className="art-image" src={abstract_collage_1}/>
                <h1 className="art-title">Picture 3</h1>
                <h1 className="art-title">Picture 4</h1>

            </div>
        )
    }
}