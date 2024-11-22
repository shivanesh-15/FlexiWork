import React from 'react';
import './Header.css';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="top-notice">
        <p>✨ Discover Your Dream Service Here. <a href="#learn-more">Learn More</a></p>
        <button className="close-btn">✕</button>
      </div>
      <div className="nav-container">
        <h1 className="logo">FlexiWork</h1>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          
        </nav>
        <div className="actions">
          <button className="contact-btn">Contact Us</button>
          <FaSearch className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;

