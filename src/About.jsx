import React from "react"
import dataAbout from "./data-about"
import { Link } from "react-router-dom"
import Resultate from "./Resultate"
import dataResultate from "./data-resultate"
import Video from "./Video"
import ImageSlider from "./ImageSlider"
import { useEffect } from "react";

export default function About() {
    const slides = [
        { url: "Crans-Montana_Kurve.JPG", title: "Gränichen Junior Series" },
        { url: "Crans-Montana.JPG", title: "Gränichen Junior Series" },
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]
    useEffect(() => {
        window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
      }), []
  
    return (
        <div className="About">

            <div className="img-container">
                <img src="Crans-Montana_Bridge3.jpg" loading="lazy"/>
            </div>
            <div className="about-container">
                <div className="page-title">
                <h1> ÜBER MICH</h1>
                </div>
                <div className="AboutMe-vorschau2-container">
                    {dataAbout.map(item => (
                        

                        <><div className="AboutMe-img">
                            <img src={item.img} className="slide-in" loading="lazy" />
                        </div>
                            <div className="AboutMe-Text">

                                <div className="Steckbrief">
                                    <div key={item.id}>
                                        <h1> Steckbrief</h1>
                                        <h3>Name: {item.name}</h3>
                                        <h3>Geburtstag: {item.geburtstag}</h3>
                                        <h3>Wohnort: {item.wohnort}</h3>
                                        <h3>Ausbildung: {item.ausbildung}</h3>
                                        <h3>Disziplin: {item.disziplin}</h3>
                                        <h3>Kategorie: {item.kategorie}</h3>
                                        <h3>Team: {item.team}</h3>
                                        <h3>Veloclub: {item.club}</h3>
                                        <h3>Trainer: {item.trainer}</h3>
                                        <h3>Ziele 2024: {item.ziele}</h3>
                                    </div>
                                </div>

                            </div></>

                    )
                    )}




                </div>
                <div className="Resultate">
                    <Resultate />
                </div>



            </div>
        </div>


    )
}