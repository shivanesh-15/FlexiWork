import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <p>
          ✨ Discover Your Dream Service Here. <Link to="/learn-more">Learn More</Link>
        </p>
        <button className="close-banner">✖</button>
      </div>
      <div className="header-main">
        <div className="logo">
          <h1>FlexiWork</h1>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/job-providers">Job Providers</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
          <div className="actions">
           <FaSearch className="icon" />
           <FaUserCircle className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


