import React, { useState } from 'react';
import './JobProviders.css';

const JobProviders = () => {
  const [formData, setFormData] = useState({
    job_title: '',
    job_description: '',
    job_requirements: '',
    job_location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Job posted successfully!');
        setFormData({
          job_title: '',
          job_description: '',
          job_requirements: '',
          job_location: '',
          salary: '',
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="job-providers-container">
      <div className="job-providers-box">
        <h1 className="job-providers-title">Post a Job</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="job_title">Job Title</label>
          <input
            type="text"
            id="job_title"
            value={formData.job_title}
            onChange={handleChange}
          />
          <label htmlFor="job_description">Job Description</label>
          <textarea
            id="job_description"
            value={formData.job_description}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="job_requirements">Job Requirements</label>
          <textarea
            id="job_requirements"
            value={formData.job_requirements}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="job_location">Job Location</label>
          <input
            type="text"
            id="job_location"
            value={formData.job_location}
            onChange={handleChange}
          />
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <button type="submit" className="job-providers-button">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobProviders;
