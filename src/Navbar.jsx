import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navigation">
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
            <Link to="/" onClick={closeNav}> HOME</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>ÜBER MICH</Link>
          </li>
          <li>
            <Link to="/Sponsoren" onClick={closeNav}>SPONSOREN</Link>
          </li>
          <li>
            <Link to="/Gönner" onClick={closeNav}>GÖNNER</Link>
          </li>
          <li>
            <Link to="/Rennberichte" onClick={closeNav}>RENNBERICHTE</Link>
          </li>
          <li>
            <Link to="/rennkalender" onClick={closeNav}>RENNKALENDER </Link>
          </li>
          <li>
            <Link to="/galerie" onClick={closeNav}>GALERIE </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}