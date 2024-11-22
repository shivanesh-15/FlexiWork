import React from 'react';
import './Journey.css';

const Journey = () => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2>Our Journey</h2>
        <p>
          Our story is one of continuous growth and evolution. We started as a small
          team with big dreams, determined to create a platform for seeking and
          providing jobs and services that transcended the ordinary.
        </p>
        <div className="journey-stats">
          <div className="stat-item">
            <h3>200+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Job Providers for Clients</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
