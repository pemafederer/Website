import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeLinkWidth, setActiveLinkWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsNavExpanded(false); // Close the nav when location changes
    setActiveLinkWidth(0); // Reset active link width
  }, [location]);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  const handleLinkClick = () => {
    // Calculate width of the active link
    const activeLink = document.querySelector(".navigation-menu li a.active");
    if (activeLink) {
      setActiveLinkWidth(activeLink.offsetWidth);
    }
  };

  return (
    <nav className= "navigation">
      <a href="/" className="brand-name">
        Pema Federer | Mountainbiker
      </a>
      <button className="hamburger" onClick={toggleNav}>
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
      <div className={isNavExpanded ? "navigation-menuexpanded" : "navigation-menu"}>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleLinkClick}> HOME</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={handleLinkClick}>ÜBER MICH</Link>
          </li>
          <li>
            <Link to="/Sponsoren" className={location.pathname === "/Sponsoren" ? "active" : ""} onClick={handleLinkClick}>SPONSOREN</Link>
          </li>
          <li>
            <Link to="/Goenner" className={location.pathname === "/Goenner" ? "active" : ""} onClick={handleLinkClick}>GÖNNER</Link>
          </li>
          <li>
            <Link to="/Rennberichte" className={location.pathname === "/Rennberichte" ? "active" : ""} onClick={handleLinkClick}>RENNBERICHTE</Link>
          </li>
          <li>
            <Link to="/rennkalender" className={location.pathname === "/rennkalender" ? "active" : ""} onClick={handleLinkClick}>RENNKALENDER</Link>
          </li>
          <li>
            <Link to="/galerie" className={location.pathname === "/galerie" ? "active" : ""} onClick={handleLinkClick}>GALERIE</Link>
          </li>
        </ul>
        <div className="active-link" style={{ width: activeLinkWidth }}></div>
      </div>
    </nav>
  );
}
