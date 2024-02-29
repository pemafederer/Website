import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About.jsx'
import App from './App.jsx'
import { useEffect } from 'react'
import Layout from './Layout.jsx'
import Sponsoren from './Sponsoren.jsx'
import './index.css'
import Rennberichte from './rennberichte.jsx'
import Rennkalender from './Rennkalender.jsx'
import Galerie from './Galerie.jsx'
import SingleRennbericht from './SingleRennbericht.jsx'
import Goener from './Goenner.jsx'


function Main(){

  return(
    
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />}/>
        <Route path="SPONSOREN" element={<Sponsoren/>}/>
        <Route path="GOENNER" element={<Goener />}/>
        <Route path="RENNBERICHTE" element={<Rennberichte />}/>
        <Route path="/RENNBERICHT/:rennId" element={<SingleRennbericht/>}/>
        <Route path="ABOUT" element={<About />}/>
        <Route path="RENNKALENDER" element={<Rennkalender />}/>
        <Route path="GALERIE" element={<Galerie />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Main />  </React.StrictMode>,
)
