import React from "react"
import ImageSliderSponsoren from "./ImageSliderSponsoren"
import dataSponsoren from "./data-sponsoren"
import './App.css'
import { Link } from "react-router-dom"
const SlideShow = () => {

    const slides = [
        { url: "handwerker-center.jpg", title: "Handwerker Center " },
        { url: "keller&kuhn.jpg", title: "Keller & Kuhn " },
        { url: "logo_hustech.svg", title: "Hustech" },
        { url: "raiffeisen.jpg", title: "Raiffeisen" },
        { url: "specialized.jpg", title: "Specialized" },
        { url: "towersports.jpg", title: "Tower Sports" },
        { url: "sypboa2.jpg", title: "Sypoba" },
        { url: "swissstop.jpg", title: "SwissStop" },
    ]
    /**/

    return (
        <div>
            <div className="slide-container">
                <Link><ImageSliderSponsoren slides={slides}/> </Link>
                
            </div>
        </div>
    )
}

export default SlideShow;