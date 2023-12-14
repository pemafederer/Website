import React from "react"
import { Link } from "react-router-dom";
import About from "./About";

export default function AboutVorschau(props) {

function onClick(){

    <Link to="/rennberichte"></Link>
    
}
    return (
        <div className="about-vorschau-container">
        <div className="AboutMe-vorschau-container">

            <div className="AboutMe-img">
                <img src={props.item.img} />
            </div>
            <div className="AboutMe-vorschau-Text">
                <div className="AboutMe-title">
                    {props.item.title}
                </div>
                <div className="AboutMe-description">{props.item.description}</div>
                <button className="AboutMe-button"><Link to="/about">Mehr Erfahren </Link></button>
            </div>



        </div>
        </div>

    )
}