import React from "react";
import dataRennberichte from "./data-rennberichte";
import { Link } from "react-router-dom";
import SingleRennbericht from "./SingleRennbericht";
import ReactCardFlip from "react-card-flip";
import ImageSlider from "./ImageSlider";


export default function Rennberichte() {
    const [flip, setFlip] = React.useState([true, true, true, true, true, true]);
    const slides = [
        { url: "Crans-Montana.JPG", title: "Gränichen Junior Series" },
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]

    const figcaption = " Rennberichte "
    return (

        <div className="Rennberichte">
               <div className="img-container">
                <img src="Savognin_3.jpg"/>
                <figcaption className="img-container-title">{figcaption}</figcaption>
            </div>
           { /*<!-- <h1>Rennberichte </h1> ! -->*/}
            <div className="rennberichte-main-container">


                {dataRennberichte.map((item, idx) => (
                    <div key={item.id} onMouseOver={() => setFlip(prev => ({
                        ...prev, [idx]: false
                    }))} onMouseLeave={() => setFlip(prev => ({
                        ...prev, [idx]: true
                    }))}>
                        <div className={`rennberichte-container ${idx ? 'hover' : ''}`}>
                            <ReactCardFlip isFlipped={flip[idx]} flipDirection="horizontal">



                                <div>
                                    <Link to={`/rennbericht/${item.id}`}>
                                        <div className="rennbericht-title" >
                                            {item.title}
                                        </div>

                                        <div className="rennbericht-subtitle" >
                                            {item.subtitle}
                                        </div>
                                    </Link>

                                </div>

                                <Link to={`/rennbericht/${item.id}`}>
                                    <img src={item.img} className="rennberichte-img" alt="Junior Series Basel" loading="lazy" ></img>
                                </Link>
                            </ReactCardFlip>

                        </div>
                    </div>

                ))}


            </div>
        </div >
    )

}
