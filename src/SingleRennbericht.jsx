import React from "react"
import { Link, useParams } from "react-router-dom"
import dataRennberichte from "./data-rennberichte"
import { useState, useEffect} from "react"
import { RModalImages } from "react-modal-images"
import dataSponsoren from "./data-sponsoren"
import Paper from '@mui/material/Paper';
import { Carousel } from "react-responsive-carousel"
import { useMediaQuery } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default function SingleRennbericht() {
    
    useEffect(() => {
        window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
      }), []
  

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
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint here


    /*<div className="img-container">
                <img src="http://localhost:5173/Gränichen.JPG" alt="Gränichen Junior Series"></img>
            </div>*/
    return (
        <div className="Paper-container">
        <Paper sx={{ width: isSmallScreen ? '100%' : '80%', display: 'flex', margin: 'auto', marginTop: '', maxWidth: '1500px'}} className="Paper">
               <div className="SingleRennbericht">
             
                <div className="rennberichte-main-container">
              
                    <div className="rennberichte-container">
                        <div className="rennberichte-text">
                            <div className="rennberichte-date">
                                {rennbericht.date}
                            </div>
                            <div className="rennberichte-title">
                                {rennbericht.title}
                            </div>
                            <div className="rennberichte-subtitle">
                                {rennbericht.bedingungen}
                                <br>
                                </br>
                                <br></br>
                                {rennbericht.fulltext}

                            </div>
                         
                        </div>
                    </div>
                </div>
           
          {/*
          <div className="rennberichte-img-container">  
                    <RModalImages
                    sx={{height: "50vh"}}
                    hideDownloadButton="true"
                    hideRotateButton="true"
                    hideZoomButton="true"
                        small={"../" + rennbericht.img_container_1} className="single-rennberichte-img" 
                        large={"../" + rennbericht.img_container_1} />
                    <RModalImages
                    sx={{height: "50vh"}}
                    hideDownloadButton="true"
                    hideRotateButton="true"
                    hideZoomButton="true"
                        small={"../" + rennbericht.img_container_2} className="single-rennberichte-img"
                        large={"../" + rennbericht.img_container_2} />

                    <RModalImages
                    sx={{height: "50vh"}}
                    hideDownloadButton="true"
                    hideRotateButton="true"
                    hideZoomButton="true"
                        small={"../" + rennbericht.img_container_3} className="single-rennberichte-img"
                        large={"../" + rennbericht.img_container_3} />

                </div>
    */}
<div className="sponsors-banner-main-container">
                {dataSponsoren.slice(9, 11).map(item => (
                    <div className="sponsors-banner-container">
                        <Link to={item.link} preventScrollReset={false}>
                            <img src={"../" + item.img} className="sponsor-logo" ></img>
                        </Link>
                    </div>
                ))}
               
            </div>
                <div className="carousel-main-container">
                <Carousel autoPlay sx={{ maxHeight: "100px" , width: '80%'}}>
                    <div className="carousel-container">
                        <img src={"../" + rennbericht.img_container_2} className="single-rennberichte-img"/>
                    </div>
                    <div className="carousel-container">
                        <img src={"../" + rennbericht.img_container_3} className="single-rennberichte-img"/>
                    </div>
                </Carousel>
            </div>
                
            
        

            </div>
</Paper>
</div>

    )
}