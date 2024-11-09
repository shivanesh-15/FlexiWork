// Home.js
import React, { Fragment } from "react";
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Fragment>
  import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure this import is here
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">FlexiWork</div>
        <input type="text" placeholder="Enter Location" className="location-input" />
        <input type="text" placeholder="Search for services" className="search-bar" />
        <div className="navbar-links">
          <a href="/account" className="navbar-link">Account</a>
        </div>
      </nav>

      {/* Home Content */}
      <div className="home-content">
        <h1 className="heading">FlexiWork</h1>
        <p className="description">
          FlexiWork connects people and businesses for flexible work and transactions. Buy, sell, or rent goods and services easily.
        </p>

        {/* Centered Job Buttons */}
        <div className="button-container">
          <button className="job-button" onClick={() => navigate('/login')}>Job Seeker</button>
          <button className="job-button" onClick={() => navigate('/login')}>Job Receiver</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>FlexiWork - 2023-2024, All Rights Reserved</p>
      </footer>
    </div>
  );
}


    </Fragment>
  );
}
