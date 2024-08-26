import React, { useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import dataRennberichte from "./data-rennberichte";


export default function Rennberichte() {
    const [flip, setFlip] = React.useState([true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true, true]);


  
    return (

        <div className="Rennberichte">
               <div className="img-container">
                <img src="Savognin_3.jpg" loading="lazy"/>
            </div>
            <div className="page-title">
            <h1>RENNBERICHTE </h1>
            </div> 
            <div className="rennberichte-main-container">
                {dataRennberichte.map((item, idx) => (
                    <div key={item.id} onMouseOver={() => setFlip(prev => ({
                        ...prev, [idx]: false
                    }))} onMouseLeave={() => setFlip(prev => ({
                        ...prev, [idx]: true
                    }))}>
                        <div className={`rennberichte-container-hover`}>
                            <ReactCardFlip isFlipped={flip[idx]} flipDirection="horizontal">
                                <div>
                                    <Link to={`/rennbericht/${idx}`}>
                                        <div className="rennbericht-title" >
                                            {item.title}
                                        </div>

                                        <div className="rennbericht-subtitle" >
                                            {item.subtitle}
                                        </div>
                                    </Link>

                                </div>

                                <Link to={`/rennbericht/${idx}`}>
                                    <img src={item.img} className="rennberichte-img" alt={item.title} loading="lazy" ></img>
                                </Link>
                            </ReactCardFlip>

                        </div>
                    </div>

                ))}


            </div>
        </div >
    )

}
