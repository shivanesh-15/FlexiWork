import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-page">
    <main>
    <section className="journey-section">
      <div className="journey-content">
        <div className="journey-text">
          <h2>Our Journey</h2>
          <p className="journey-description">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a platform for seeking and providing jobs and services, that transcended the ordinary.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <p className="stat-value">200+</p>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">10k+</p>
              <p className="stat-label">Job providers For Clients</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">50+</p>
              <p className="stat-label">Services</p>
            </div>
          </div>
        </div>
        <div className="journey-image">
          <img src="/src/assets/image.jpg" alt="House in hand" />
        </div>
      </div>

      <div className="values-section">
        <div className="values-text">
          <h2>Our Values</h2>
          <p className="values-description">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams.
          </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <span className="icon">⭐</span>
            <h3>Trust</h3>
            <p>Trust is the cornerstone of every successful business.</p>
          </div>
          <div className="value-card">
            <span className="icon">🎓</span>
            <h3>Excellence</h3>
            <p>We set the bar high for ourselves. From the jobs we list to the services we provide.</p>
          </div>
          <div className="value-card">
            <span className="icon">👥</span>
            <h3>Client-Centric</h3>
            <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
          </div>
          <div className="value-card">
            <span className="icon">💼</span>
            <h3>Our Commitment</h3>
            <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="team-testimonials">
      {/* Meet the Team Section */}
      <div className="team-section">
        <h2>Meet the FlexiWork Team</h2>
        <p className="team-description">
          At FlexiWork, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your life easier.
        </p>
        <div className="team-grid">
          {[
            { name: 'Shivanesh', role: 'Founder,Developer', img: '/path/to/image1.png' },
            { name: 'Neha S', role: 'Frontend Developer', img: '/path/to/image2.png' },
            { name: 'Vignesh', role: 'Frontend Developer', img: '/path/to/image3.png' },
            { name: 'Taarun',role:'/', img: '/path/to/image4.png' },
          ].map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <button className="team-twitter"><FaLinkedin /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-description">
          Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose us as their partners.
        </p>
        <div className="testimonials-grid">
          {[
            { stars: 5, feedback: 'Exceptional Service!', name: 'Wade Warren', location: 'USA, California', img: '/path/to/client1.png' },
            { stars: 5, feedback: 'Efficient and Reliable', name: 'Emelie Thomson', location: 'USA, Florida', img: '/path/to/client2.png' },
            { stars: 5, feedback: 'Trusted service providers', name: 'John Mans', location: 'USA, Nevada', img: '/path/to/client3.png' },
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">{'⭐'.repeat(testimonial.stars)}</div>
              <p className="feedback">{testimonial.feedback}</p>
              <div className="client-info">
                <img src={testimonial.img} alt={testimonial.name} className="client-image" />
                <div>
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="view-testimonials">View All Testimonials</button>
        <div className="pagination">
          <span>01 of 10</span>
          <button className="arrow">⬅</button>
          <button className="arrow">➡</button>
        </div>
      </div>
    </section>
    </main>
    </div>
  );
}

export default AboutUs;
