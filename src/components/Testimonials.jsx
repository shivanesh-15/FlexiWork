import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Wade Warren',
    location: 'USA, California',
    feedback: 'Exceptional Service!',
    stars: 5,
    img: '/path/to/image1.jpg',
  },
  {
    name: 'Emelie Thomson',
    location: 'USA, Florida',
    feedback: 'Efficient and Reliable',
    stars: 5,
    img: '/path/to/image2.jpg',
  },
  {
    name: 'John Mans',
    location: 'USA, Nevada',
    feedback: 'Trusted service providers',
    stars: 5,
    img: '/path/to/image3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>
          Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose us as their partners.
        </p>
        <button className="view-all-button">View All Testimonials</button>
      </div>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {'★'.repeat(testimonial.stars).split('').map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
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
      <div className="pagination">
        <p>01 of 1</p>
        <div className="pagination-buttons">
          <button className="pagination-arrow">←</button>
          <button className="pagination-arrow">→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
