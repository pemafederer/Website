import { useState } from 'react'
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



export default function App() {

  const slides = [
    { url: "Savognin.jpg", title: "Gränichen Junior Series" },
    { url: "gstaad.jpg", title: "Gränichen Junior Series" },
    { url: "Gränichen.JPG", title: "Gränichen Junior Series" },
    { url: "Savognin_1.JPG", title: "Gränichen Junior Series" },
    { url: "Savognin_3.jpg", title: "Gränichen Junior Series" },




  ]
  const aboutMe = dataAbout.map(item => {
    return (
      <AboutVorschau key={item.id} item={item} />
    )

  }
  )


  return (
    <div className="container">
      <div className='img-container-slider'>
        <div className="img-slider">
          <picture>
          <ImageSlider
            slides={slides}
          />
          </picture>
        </div>
      </div>
      <div className='joe'>{aboutMe}</div>
      <div className="Rennberichte"><h1> Aktuelles </h1> <RennberichteVorschau /></div>

    </div>


  )
}



