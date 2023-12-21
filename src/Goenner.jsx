import React from "react";
import dataGönner from "./data-gönner";
import { RModalImages } from "react-modal-images";

export default function Gönner(){


    
return(

<div className="Gönner">
<div className="img-container">
                <img src="Savognin.jpg" />
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
            {dataGönner.map(item => (
                <div className="gönner-content">
                    <h3>{item.name}</h3>
                </div>
            ))}
            
        </div>
        <div className="gönner-container">
            <div className="gönner-picture">
            <div className="gönner-img">
                <RModalImages
                small="Savognin.jpg"
                medium="Savognin.jpg"
                hideDownloadButton="true"
                hideRotateButton="true"
                hideZoomButton="true"
                 />
            </div>
            </div>
            
        </div>
        <div className="gönner-container">
            <div className="gönner-text">
            <h3>
                Mit einer Gönnermitgliedschaft untertstützen Sie mich finanziell und werden somit Teil meiner sportlichen Laufbahn.
                Sie sorgen mit Ihrem Gönnerbeitrag direkt für die Finanzierung der Reise/Unterkunftskosten, Kosten für Trainingslager usw.
            </h3>
            <h3>
                Am Ende der Saison erwartet Sie als Gönner ein kleines Geschenk als Dankeschön für die wertvolle Unterstützung. Zudem erhalten Sie 
             jeden Rennbericht per Email und haben die Möglichkeiten meinen Rennkalender auf Outlook zu abonnieren.
            </h3>
            <h3>
               Die Mitgliedschaft ist unbefristet und Ihrerseits gibt es keine Verpflichtungen. Zudem entscheiden Sie frei über den Betrag und die Laufdauer. 
                Ich würde mich über jeglichen Beitrag freuen.
            </h3>
            </div>
        </div>

    </div>
</div>
)

    
}