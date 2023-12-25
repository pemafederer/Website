import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import AboutVorschau from './AboutVorschau.jsx'
import dataAbout from './data-about'
import './App.css'
import RennberichteVorschau from './RennberichteVorschau.jsx'
import Navbar from './Navbar'
import dataRennberichte from './data-rennberichte'
import Sponsoren from './Sponsoren'
import dataSponsoren from './data-sponsoren'
import { json } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import Instagram from './Instagram.jsx'
import { Helmet } from 'react-helmet'

 function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slidesSmall = [
    { url: "gstaad.jpg", title: "Gränichen Junior Series" },
    { url: "gstaad-podium.jpg", title: "Gränichen Junior Series" },
    { url: "Davos_2.jpg", title: "Gränichen Junior Series" },
  ];
  const slidesLarge = [
    { url: "Savognin.jpg", title: "Swissbikecup Savognin" },
    { url: "Gränichen.JPG", title: "Junior Series Gränichen" },
    { url: "Savognin_1.JPG", title: "Swissbikecup Savognin" },
    { url: "Savognin_3.jpg", title: "Swissbikecup Savognin" },

  ]
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSlidesToShow = () => {
    if (windowWidth <= 800) {
      return slidesSmall;
    } else {
      return slidesLarge;
    }
  };

 
  const aboutMe = dataAbout.map(item => {
    return (
      <AboutVorschau key={item.id} item={item} />
    )

  }
  )


  return (
    <>
    
      <title>Pema Federer Website</title>
      <meta name="Das ist die offiziele Website vom Mountainbiker Pema Federer aus Schmerikon, der fürs Team Tower Sports - VC Eschenbach fährt" content="Pema Federer Website, Startseite,"  />
      {/* Add more meta tags as needed */}

        <div className='img-container-slider'>
          <meta property='adsf'>

          </meta>
          <div className="img-slider">
            <picture loading="lazy">
              <ImageSlider

                h1="Über Mich"
                slides={getSlidesToShow()} />

            </picture>

          </div>
        </div>
        <div className='joe'>{aboutMe}</div>
        <div className="Rennberichte"><h1> AKTUELLES </h1> <RennberichteVorschau /></div>
        <div className='instagram-container'>
          <Instagram />
        </div>
     </>
    
  )
}
export default App;



