import React, {Component} from 'react';
import './Art_2.css';

import abstract_yellow from "../images/abstract_yellow.jpg";

export default class Art_2 extends Component{
    render(){
        return(
            <div className="art_2-container">
                {window.scrollTo(0, 0)}
                <p className="text-box">Hello my name is Kali and some other stuff</p>
                <img className="art-image" src={abstract_yellow}/>

            </div>
        )
    }
}