import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import themoverLogo from "../assets/img/themover-logo.png";
import "./Header.css"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-area">
      <div className="top-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="row w-100 d-flex align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <ul className="left-info d-flex gap-3">
                <li>
                  <a href="mailto:support@themover.in">
                    <i className="bx bxs-envelope"></i> support@themover.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919136369036">
                    <i className="bx bxs-phone-call"></i> +91 91363 69036
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 d-flex justify-content-end">
              <ul className="right-info d-flex gap-3">
                <li><Link to="/become-partner">Become A Partner</Link></li>
                <li><a href="https://portal.themover.in/" target="_blank">Login</a></li>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar-area bg-white">
        <div className="container">
          <nav className="navbar">
            <Link className="navbar-brand" to="/">
              <img src={themoverLogo} alt="logo" className="main-logo"/>
            </Link>
            <ul className="desktop-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Sliding Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              {/* Close Button Inside Menu */}
              <div className="close-menu-icon" onClick={toggleMenu}>
                <FaTimes />
              </div>
              <ul>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Overlay to close menu */}
            {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
