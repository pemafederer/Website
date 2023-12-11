import React from "react"
import dataAbout from "./data-about"
import { Link } from "react-router-dom"
import Resultate from "./Resultate"
import dataResultate from "./data-resultate"
import Video from "./Video"
import ImageSlider from "./ImageSlider"

export default function About() {
    const slides = [
        { url: "Crans-Montana_Kurve.JPG", title: "Gränichen Junior Series" },
        { url: "Crans-Montana.JPG", title: "Gränichen Junior Series" },
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]
    const figcaption = "Über Mich";
    return (
        <div className="About">

            <div className="img-container">
                <img src="Lugano_XCC_2.jpg" title="jjaaad"/>
                <figcaption className="img-container-title">{figcaption}</figcaption>
            </div>



            <div className="about-container">
                <h1> Über mich</h1>
                <div className="AboutMe-container">
                    {dataAbout.map(item => (
                        

                        <><div className="AboutMe-img">
                            <img src={item.img} loading="lazy" />
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
                                        <h3>Ziele: {item.ziele}</h3>
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