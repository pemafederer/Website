import React from "react"
import dataRennberichte from "./data-rennberichte"
import { Link } from "react-router-dom"


export default function RennberichteVorschau() {
   

    return (

        <div className="rennberichte-main-container">
            {dataRennberichte.map(item =>  (
                <div key={item.id}>
                    <div className="rennberichte-container">
                        <picture>
                        <Link to={`/rennbericht/${item.id}`}>
                            <img src={item.img} className="rennberichte-img" alt="Junior Series Basel" loading="lazy"></img>
                        </Link>
                        </picture>
                        <div className="rennberichte-title">
                            {item.title}
                        </div>
                        <div className="rennberichte-subtitle">
                            {item.subtitle}
                        </div>
                        
                    </div>
                    

                </div>
                

            )).slice(0, 3)}



        </div>
    )
}

