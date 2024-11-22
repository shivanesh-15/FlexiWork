import React from 'react';
import './JobSeekerAndProvider.css';

const JobSeekerAndProvider = () => {
  return (
    <div>
      
      <div className="job-seeker-page">
        
        <header className="job-seeker-header">
          <h1 className="job-seeker-logo">FlexiWork</h1>
          <p className="job-seeker-tagline">Your Flexible Job Solution</p>
        </header>

        
        <main className="job-seeker-content">
          <section className="job-seeker-hero">
            <h2 className="section-heading">Find Your Dream Job</h2>
            <p className="section-description">
              Browse thousands of jobs tailored to your skills and preferences.
            </p>
            <button className="explore-jobs-btn">Explore Jobs</button>
          </section>

          <section className="job-seeker-categories">
            <h2 className="section-heading">Job Categories</h2>
            <ul className="categories-list">
              <li>Technology</li>
              <li>Design</li>
              <li>Marketing</li>
              <li>Finance</li>
              <li>Healthcare</li>
            </ul>
            <h2 className="section-heading">Complete Your Profile</h2>

            <form>
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                required
              />

              <label htmlFor="languages">Languages Known</label>
              <input
                type="text"
                id="languages"
                placeholder="Enter languages you know"
                required
              />

              <label htmlFor="experience">Experience</label>
              <input
                type="text"
                id="experience"
                placeholder="Enter years of experience"
                required
              />

              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                placeholder="Enter your skills (e.g., JavaScript, Python)"
                required
              />

              <button type="submit">Update Profile</button>
            </form>
          </section>
          

          
        </main>
      </div>

      
      <div className="job-provider-form">
        <h1 className="form-heading">Post a Job</h1>
        <form>
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            placeholder="Enter job title"
            required
          />

          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            placeholder="Enter company name"
            required
          />

          <label htmlFor="job-description">Job Description</label>
          <textarea
            id="job-description"
            placeholder="Enter job description"
            rows="5"
            required
          ></textarea>

          <label htmlFor="salary">Salary</label>
          <input type="number" id="salary" placeholder="Enter salary" required />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            required
          />

          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerAndProvider;
