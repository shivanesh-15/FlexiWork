import React from 'react';import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">FlexiWork</div>
        <div className="footer-subscribe">
          <input type="text" placeholder="Enter Your Email" />
          <button>→</button>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-section">
          <h4>Home</h4>
          <p>Hero Section</p>
          <p>Featured Jobs</p>
          <p>Jobs</p>
          <p>Testimonials</p>
          <p>FAQs</p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Our Story</p>
          <p>Our Works</p>
          <p>How It Works</p>
          <p>Our Team</p>
          <p>Our Clients</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <p>Portfolio</p>
          <p>Categories</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Contact Form</p>
          <p>Our Offices</p>
        </div>
      </div>
      <div className="footer-social-icons">
        <FaFacebook />
        <FaLinkedin />
        <FaTwitter />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
