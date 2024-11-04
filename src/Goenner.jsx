import React from "react";
import dataGönner from "./data-gönner";
import { useEffect } from "react";
import { RModalImages } from "react-modal-images";
import Contact from "./Contact";

export default function Gönner(){
    useEffect(() => {
        window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
      }), []
  

    
return(

<div className="Gönner">
<div className="img-container">
                <img src="Chur2024_Jump.jpg" loading="lazy"/>
            </div>
    <div className="gönner-main-container">
        <div className="gönner-container">
            <div className="page-title">
                <h1> GÖNNERCLUB PEMA FEDERER</h1>
            </div>
            <div className="gönner-subtitle">
                <h2>
                    Gönner Saison 2024:
                </h2>
            </div>
            <div className="gönner-names-container">
            {dataGönner.map(item => (
                <div className="gönner-content">
                    <h3>{item.name}</h3>
                </div>
            ))}
            </div>
            
        </div>
        <div className="gönner-container">
            <div className="gönner-picture">
            <div className="gönner-img">
                <RModalImages
                small="Crans-Montana.WebP"
                medium="Crans-Montana.WebP"
                hideDownloadButton="true"
                hideRotateButton="true"
                hideZoomButton="true"
                 />
            </div>
            </div>
            
        </div>
        <div className="gönner-container">
            <div className="gönner-text-container">
            <div className="gönner-text">
            <h3>
            Durch eine großzügige Unterstützung mit einer Gönnermitgliedschaft ab 100 CHF werden Sie Teil meines sportlichen Werdegangs. Ihre finanzielle Hilfe trägt direkt dazu bei, meine Reise- und Unterkunftskosten sowie die Kosten für Trainingslager und ähnliches zu decken
            </h3>
            <h3>
               Als Gegenleistung wird ihr Name unter den Gönner aufgeführt und Sie erhalten zudem  
             jeden Rennbericht per Email.
            </h3>
            <h3>
            Die Mitgliedschaft ist unbefristet und wird jedes Jahr durch Ihre Zahlung des gewünschten Beitrages bestätigt. Somit bestimmen Sie die Dauer und Kosten der Mitgliedschaft selbst. Verpflichtungen Ihrerseits gibt es keine.</h3>
            </div>
            </div>
        </div>
        <div className="gönner-container">
            <div className="gönner-bank-container">
                <div className="gönner-bank">
                    <h3> Raiffeisenbank am Ricken</h3>
                    <h3> Sportkonto Pema Federer</h3>
                    <h3> IBAN: CH03 8080 8005 4932 6525 0</h3>
                </div>
                <div className="gönner-twint">
                    <h3>TWINT</h3>
                    <h3>077 521 98 65</h3>
                </div>
            </div>
        </div>
        

    </div>
    
</div>
)

    
}