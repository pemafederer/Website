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
import { Analytics } from '@vercel/analytics/react';
import Sponsoren from './Sponsoren'
import dataSponsoren from './data-sponsoren'
import { json } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import { InstagramEmbed } from 'react-social-media-embed';



export default function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slidesSmall = [
    { url: "gstaad.jpg", title: "Gränichen Junior Series" },
    { url: "gstaad-podium.jpg", title: "Gränichen Junior Series" },
    { url: "Davos_2.jpg", title: "Gränichen Junior Series" },
  ];
  const slidesLarge = [
    { url: "Savognin.jpg", title: "Gränichen Junior Series" },
    { url: "Gränichen.JPG", title: "Gränichen Junior Series" },
    { url: "Savognin_1.JPG", title: "Gränichen Junior Series" },
    { url: "Savognin_3.jpg", title: "Gränichen Junior Series" },

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
    <><div className="container">
      <div className='img-container-slider'>
        <div className="img-slider">
          <picture>
            <ImageSlider
              h1="Über Mich"
              slides={getSlidesToShow()} />
    
          </picture>

        </div>
      </div>
      <div className='joe'>{aboutMe}</div>
      <Analytics />
      <div className="Rennberichte"><h1> Aktuelles </h1> <RennberichteVorschau /></div>

    </div>
    <h1> Instagram </h1>
    <div className="InstagramEmbeded"  >
        <InstagramEmbed 
        className="InstagramEmbededItem" 
        placeholderSpinnerDisabled
        url="https://www.instagram.com/p/CxoDyhwsjAg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" 
        height="46%"
        width="auto"
        injectScript
  
        />
        <InstagramEmbed 
        className="InstagramEmbededItem" 
        placeholderSpinnerDisabled
        url="https://www.instagram.com/p/CwlHqYBsi1z/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" 
        height="46%"
        width="100%"
        />
         <InstagramEmbed 
        className="InstagramEmbededItem" 
        placeholderSpinnerDisabled
        url="https://www.instagram.com/p/CwN0YomMfPb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" 
        height="46%"
        width="100%"
        />
          <InstagramEmbed 
        className="InstagramEmbededItem" 
        placeholderSpinnerDisabled
        url="https://www.instagram.com/p/CvXx0WCM9ja/?utm_source=ig_web_copy_link&igshid=NTYzOWQzNmJjMA=="
        height="46%"
        width="100%"
        />
    

        </div>
</>
  )
}



