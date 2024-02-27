import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import './App.css'
import Contact from "./Contact"
import SlideshowSponsoren from "./SlideshowSponsoren"
import dataSponsoren from "./data-sponsoren"
import ImageWithFallback from "./ImageWithFallback"
import SponsoringBanner from "./sponsoringBanner"

export default function Sponsoren() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
      }), []
  
    console.log(dataSponsoren)
    return (
        <>
            <div className="container-sponsoren">
                <div className="Sponsoren">
                <div className="img-container">
                <ImageWithFallback src="Savognin.jpg" alt="Savognin Image" />
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

                        ).slice(9, 11)}

                    </div>





                </div>
                <div className="teamsponsoren">
                    <h1>TEAMSPONSOREN</h1>
                    <SlideshowSponsoren/>
                </div>
                {/* 
                <div className="contact-formular-container">
                <div className="contact-titles">
                    <h1> Kontaktforumular</h1>
                </div>
                <div className="contact-text">
                    <h2> Möchten sie einen jungen, ambitionierten und sehr zielorientierten Sportler untertstützen ?
                        Ich würde  mich sehr über eine persönliche Kontaktaufnahme freuen und sie gerne näher kennenlernen. Dabei kann ich Ihnen gerne mein Sponsorenkonzept vorstellen. Ich freue mich schon jetzt über Ihre Nachricht.
                    </h2>
                </div>
                </div>

                

                <div className="Contact">

                    <Contact />
                </div>

                */}

            </div>

        </>

    );


}

