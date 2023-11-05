import React from "react"
import { Link } from "react-router-dom";
import About from "./About";

export default function AboutVorschau(props) {

function onClick(){

    <Link to="/rennberichte"></Link>
    
}
    return (
        <><h1> Über mich</h1>
        <div className="AboutMe-container">

            <div className="AboutMe-img">
                <img src={props.item.img} />
            </div>
            <div className="AboutMe-Text">
                <div className="AboutMe-title">
                    {props.item.title}
                </div>
                <div className="AboutMe-description">{props.item.description}</div>
                <button className="AboutMe-button"><Link to="/about">Learn more about my passion </Link></button>
            </div>



        </div></>

    )
}