import React from "react";
import dataGönner from "./data-gönner";
import { RModalImages } from "react-modal-images";

export default function Gönner(){


    
return(

<div className="Gönner">
<div className="img-container">
                <img src="Savognin.jpg" />
            </div>
    <div className="gönner-main-container">
        <div className="gönner-container">
            <div className="page-title">
                <h1> GÖNNERCLUB PEMA FEDERER</h1>
            </div>
            <div className="gönner-subtitle">
                <h2>
                    Gönner Saison 2024:
                </h2>
            </div>
            {dataGönner.map(item => (
                <div className="gönner-content">
                    <h3>{item.name}</h3>
                </div>
            ))}
            
        </div>
        <div className="gönner-container">
            <div className="gönner-img">
                <RModalImages />
            </div>
        </div>

    </div>
</div>
)

    
}