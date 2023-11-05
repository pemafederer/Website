import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isNavClicked, setIsNavClicked] = useState(true);
    console.log(isNavClicked)
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Pema Federer | Mountainbiker
        </a>
        <button 
        className="hamburger" 
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          setIsNavClicked(true);
        }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded & isNavClicked ? "navigation-menuexpanded" : "navigation-menu"
          }
          >
            
          <ul>
            <li>
              <Link to="/" onClick={() =>{ setIsNavClicked(!isNavClicked)}}> HOME</Link>
            </li>
            <li>
              <Link to="/about" onClick={() =>{ setIsNavClicked(!isNavClicked)}}>ÜBER MICH</Link>
            </li>
            <li>
              <Link to="/Sponsoren" onClick={() =>{ setIsNavClicked(!isNavClicked)}} >SPONSOREN</Link>
            </li>
            <li>
              <Link to="Rennberichte" onClick={() =>{ setIsNavClicked(!isNavClicked)}}>RENNBERICHTE</Link>
            </li>
            <li>
                <Link to="rennkalender" onClick={() =>{ setIsNavClicked(!isNavClicked)}}>RENNKALENDER </Link>
            </li>
            <li>
                <Link to="galerie" onClick={() =>{ setIsNavClicked(!isNavClicked)}}>GALERIE </Link>
            </li>
          </ul>
        </div>
      </nav>
     
    );
    
  }