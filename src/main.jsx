import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About.jsx'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Sponsoren from './Sponsoren.jsx'
import './index.css'
import Rennberichte from './rennberichte.jsx'
import Rennkalender from './Rennkalender.jsx'
import Galerie from './Galerie.jsx'
import SingleRennbericht from './SingleRennbericht.jsx'


function Main(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />}/>
        <Route path="sponsoren" element={<Sponsoren/>}/>
        <Route path="rennberichte" element={<Rennberichte />}/>
        <Route path="/rennbericht/:rennId" element={<SingleRennbericht/>}/>
        <Route path="about" element={<About />}/>
        <Route path="rennkalender" element={<Rennkalender />}/>
        <Route path="galerie" element={<Galerie />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Main />  </React.StrictMode>,
)
