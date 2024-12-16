import React from "react";
import { FaUser, FaBriefcase, FaBuilding, FaTags } from 'react-icons/fa';
import { FaBed, FaBath, FaUtensils } from 'react-icons/fa';
import "./Services.css";

const Services = () => {
    const services = [
        { title: 'Job Seeker', icon: <FaUser /> },
        { title: 'Job Provider', icon: <FaBriefcase /> },
        { title: 'Large Assets', icon: <FaBuilding /> },
        { title: 'Buy / Sell', icon: <FaTags /> },
      ];

const jobs = [
        {
          title: 'Plumber Services',
          description: 'All kinds of plumbing related issues looked into and fixed by our well-skilled plumbers.',
          price: 'Rs.298',
          image: '/src/assets/image1.jpg', // Placeholder image path
          categories: [],
        },
        {
          title: 'House Cleaning Services',
          description: 'Cleaning services ranging from kitchen cleaning to bathroom cleaning.',
          price: 'Rs.398',
          image: '/src/assets/image2.jpg', // Placeholder image path
          categories: [<FaBed />, <FaBath />, <FaUtensils />],
        },
        {
          title: 'Carpenter/Electrician Services',
          description: 'Cheap and best carpenting and electric services near you in a jiffy.',
          price: 'Rs.198',
          image: '/src/assets/image3.jpg', // Placeholder image path
          categories: [],
        },
      ];

  return (
    <div className="services-page">
      <main>
        {/* Hero Section */}
        <section className="hero-section">
            <h2>Elevate Your Customer Experience</h2>
            <p className="hero-description">
                Welcome to FlexiWork, where connecting skilled job seekers with flexible work opportunities is made simple and secure. From one-time tasks to ongoing roles, we bridge the gap between job providers and seekers, creating a marketplace for every need.
            </p>
            <div className="service-cards">
                {services.map((service, index) => (
                <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <p>{service.title}</p>
                <span className="arrow">→</span>
                </div>
                ))}
            </div>
        </section>

        {/* Job Seekers Section */}
        <section className="services-section">
      <h2>What are you looking for?</h2>
      <p className="section-subtitle">
        Our platform empowers individuals and businesses to meet short-term needs for services, rentals, and job support with ease and transparency.
      </p>
      
      <div className="services-grid">
        <div className="services-card">
          <span className="icon">🧹</span>
          <p>Home Cleaning</p>
        </div>
        <div className="services-card">
          <span className="icon">🔧</span>
          <p>Maintenance</p>
        </div>
        <div className="services-card">
          <span className="icon">🎨</span>
          <p>Painting and Decor</p>
        </div>
        <div className="services-card">
          <span className="icon">👨‍🔧</span>
          <p>Tradesmen Services</p>
        </div>
        <div className="services-card">
          <span className="icon">💆‍♀️</span>
          <p>Salon and Spa Services</p>
        </div>
        <div className="services-card">
          <span className="icon">🐞</span>
          <p>Pest Control</p>
        </div>
        </div>
        <div className="services-info-card">
          <h3>Experience Effortless Service Management</h3>
          <p>
            Ready to experience hassle-free service management? Whether you're seeking work or hiring for a task, FlexiWork offers a secure and user-friendly experience to bridge the gap.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
    </section>

        {/* Featured Jobs Section */}
        <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <p className="description">
        Explore our handpicked selection of featured jobs. Each listing offers a glimpse into the service and all the pricing details. Click "View Job" for more information.
      </p>
      <button className="view-all-jobs">View All Jobs</button>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <img src={job.image} alt={job.title} className="job-image" />
            <h3>{job.title}</h3>
            <p className="job-description">
              {job.description} <a href="#read-more">Read More</a>
            </p>
            
            <div className="price-section">
              <p>Price Starting from</p>
              <span className="price">{job.price}</span>
            </div>
            <button className="view-job">View Job</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <p>01 of 10</p>
        <div className="pagination-icons">
          <button className="pagination-btn">←</button>
          <button className="pagination-btn">→</button>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default Services;
