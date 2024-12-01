// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import uzlogo from "./assets/uz logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={uzlogo} alt="Logo" className="logo-img" />
        </div>
        <h1 className="navbar-title">Lost and Found</h1>
      </div>

      <div className="navbar-right">
        {/* Hamburger icon */}
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/report-lost">Report Lost Item</Link></li>
          <li><Link to="/report-found">Report Found Item</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
