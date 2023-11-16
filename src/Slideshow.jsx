import React from "react"
import ImageSlider from "./ImageSlider"
import './App.css'
import { Link } from "react-router-dom"
const SlideShow = () => {

    const slides = [
        { url: "handwerker-center.jpg", title: "Handwerker Center " },
        { url: "keller&kuhn.jpg", title: "Keller & Kuhn " },
        { url: "hustech.jpg", title: "Hustech" },
        { url: "raiffeisen.jpg", title: "Raiffeisen" },
        { url: "specialized.jpg", title: "Specialized" },
        { url: "hustech.jpg", title: "Hustech" },
        { url: "towersports.jpg", title: "Tower Sports" },
        { url: "sypoba.jpg", title: "Sypoba" },
        { url: "swissstop.jpg", title: "SwissStop" }
       


    ]
    /**/

    return (
        <div>
            <div className="slide-container">
                <Link>
                <ImageSlider slides={slides}/> 
                </Link>
                
            </div>
        </div>
    )
}

export default SlideShow;