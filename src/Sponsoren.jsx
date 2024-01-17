import React from "react"
import './App.css'
import { Link } from "react-router-dom"
import dataSponsoren from "./data-sponsoren"
import SlideshowSponsoren from "./SlideshowSponsoren"
import Contact from "./Contact"
import Resultate from "./Resultate"
import ImageSlider from "./ImageSlider"

export default function Sponsoren() {

    console.log(dataSponsoren)
    return (
        <>
            <div className="container-sponsoren">
                <div className="Sponsoren">
                <div className="img-container">
                <img src="Savognin.jpg"/>
            </div>
                  <h1 > PRIVATE SPONSOREN</h1>
                    <div className="sponsoren-main-container">

                        {dataSponsoren.map(item =>

                        (
                            <div key={item.id}>
                                <div className="sponsoren-container">
                                    <div className="sponsoren-img">
                                        <Link to={item.link}>
                                            <img src={item.img} alt="joebiden"></img>
                                        </Link>
                                    </div>

                                    <div className="sponsoren-name">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        )

                        ).slice(10, 12)}

                    </div>





                </div>
                <div className="teamsponsoren">
                    <h1>TEAMSPONSOREN</h1>
                    <SlideshowSponsoren />
                </div>
                <div className="contact-formular-container">
                <div className="contact-titles">
                    <h1> Kontaktforumular</h1>
                </div>
                <div className="contact-text">
                    <h2> Möchten sie einen jungen, ambitionierten und sehr zielorientierten Sport untertstützen ?
                        Ich würde  mich sehr über eine persönliche Kontaktaufnahme freuen und sie gerne näher kennenlernen. Dabei kann ich Ihnen gerne mein Sponsorenkonzept vorstellen. Ich freue mich schon jetzt über Ihre Nachricht.
                    </h2>
                </div>
                </div>



                <div className="Contact">

                    <Contact />
                </div>

            </div>
        </>

    );


}

