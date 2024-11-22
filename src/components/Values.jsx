import React from 'react';
import './Values.css';

const Values = () => {
  return (
    <section className="values-section">
      <h2>Our Values</h2>
      <p>
        Our story is one of continuous growth and evolution. We started as a small
        team with big dreams.
      </p>
      <div className="values-cards">
        <div className="value-card">
          <h3>Trust</h3>
          <p>Trust is the cornerstone of every successful business.</p>
        </div>
        <div className="value-card">
          <h3>Excellence</h3>
          <p>We set the bar high for ourselves, from the jobs we list to the services we provide.</p>
        </div>
        <div className="value-card">
          <h3>Client-Centric</h3>
          <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
        </div>
        <div className="value-card">
          <h3>Our Commitment</h3>
          <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
