import React from "react"
import { useParams } from "react-router-dom"
import dataRennberichte from "./data-rennberichte"
import { useState } from "react"
import './App.css'
import { RModalImages } from "react-modal-images"


export default function SingleRennbericht() {

    const { rennId } = useParams();
    const [showFullScreen, setShowFullScreen] = useState(false)
    const rennbericht = dataRennberichte.find(i => i.id == rennId)
    if (!rennbericht) {
        // Rennbericht wurde nicht gefunden, zeige eine Meldung oder handle den Fehler hier
        return <div>Rennbericht nicht gefunden.</div>;
    }
    const handleImageClick = () => {
        setShowFullScreen(true)
    }

    const handleCloseFullScreen = () => {
        setShowFullScreen(false)
    }

    /*<div className="img-container">
                <img src="http://localhost:5173/Gränichen.JPG" alt="Gränichen Junior Series"></img>
            </div>*/
    return (
        <div className="SingleRennbericht">


            <div className="rennberichte-main-container">
                <div className="rennberichte-container">
                    <RModalImages
                        small={"../" + rennbericht.img} className="rennberichte-img" alt="image" 
                        medium={"../" + rennbericht.img}
                    />
                    <div className="rennberichte-text">
                        <div className="rennberichte-title">
                            {rennbericht.title}
                        </div>
                        <div className="rennberichte-subtitle">
                            {rennbericht.fulltext}
                        </div>
                        <div className="rennberichte-img-container">
                            <RModalImages
                                small={"../" + rennbericht.img_container_1} className="rennberichte-img" onClick={handleImageClick}
                                large={"../" + rennbericht.img_container_1} 
                            />
                            <RModalImages
                                small={"../" + rennbericht.img_container_2} className="rennberichte-img" onClick={handleImageClick}
                                large={"../" + rennbericht.img_container_2}
                            />

                            <RModalImages
                                small={"../" + rennbericht.img_container_3} className="rennberichte-img" onClick={handleImageClick}
                                large={"../" + rennbericht.img_container_3} 
                            />

                        </div>

                        {showFullScreen && (
                            <div className="fullscreen-overlay-active" onClick={handleCloseFullScreen}>
                                <div className="fullscreen-image">
                                    <img src={"../" + rennbericht.img_container_1} className="centered-image" />
                                </div>
                            </div>
                        )}




                    </div>
                </div>


            </div>

        </div>


    )
}