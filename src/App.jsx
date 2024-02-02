import React, { useEffect, useState } from "react"
import AboutVorschau from './AboutVorschau.jsx'
import './App.css'
import Instagram from './Instagram.jsx'
import RennberichteVorschau from './RennberichteVorschau.jsx'
import dataAbout from './data-about'



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
    window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
  }), []

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
          {/*<div className="img-slider">
              <ImageSlider

                h1="Über Mich"
                slides={getSlidesToShow()} />

  </div>*/}
          <div className="img-container">
                <img src="Schwändi2.jpg" />
                <div className="text-container">
               {/* <p>HERZLICH WILLKOMMEN</p> */}
          </div>
            </div>
        </div>
        <div className='joe'>{aboutMe}</div>
        <div className="Rennberichte"><h1> AKTUELLES </h1> <RennberichteVorschau /></div>
        <div className='instagram-container'>
    
        </div>
     </>
    
  )
}
export default App;



