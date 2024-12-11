import React from 'react';
import './Services.css';
import './AboutUs.css';
import { FaUser, FaBriefcase, FaBuilding, FaTags } from "react-icons/fa";
import { FaBed, FaBath, FaUtensils } from 'react-icons/fa';

const Home = () => {
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
    <div className="home-page">
    <main>
    <section className="hero-section">
      <h1>FlexiWork connects people and businesses for flexible work and transactions. Buy, sell, or rent goods and services easily.</h1>
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
        </div>
    </section>
    </main>
    </div>
  );
};

export default Home;
