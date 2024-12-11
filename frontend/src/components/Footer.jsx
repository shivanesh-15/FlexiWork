import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1>FlexiWork</h1>
          <p>Connecting job providers and seekers seamlessly.</p>
          <form className="newsletter">
            <input
              type="email"
              placeholder="Enter Your Email"
              aria-label="Subscribe to our newsletter"
            />
            <button type="submit">➤</button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h3>Home</h3>
            <ul>
              <li>
                <Link to="/">Hero Section</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/job-providers">Job Providers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>
                <Link to="/about-us">Our Story</Link>
              </li>
              <li>
                <Link to="/about-us">Our Team</Link>
              </li>
              <li>
                <Link to="/about-us">How It Works</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/services">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Categories</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <Link to="/contact">Contact Form</Link>
              </li>
              <li>
                <Link to="/contact">Our Offices</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>©2024 FlexiWork. All Rights Reserved. | Terms & Conditions</p>
           <div className="social-icons">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaYoutube />
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;