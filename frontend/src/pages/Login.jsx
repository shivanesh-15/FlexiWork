import React, { useState } from 'react';
import './Login.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/api/login', { email, password });
      const { message, token } = response.data;

      // Store JWT token in localStorage (or cookies if needed)
      localStorage.setItem('token', token);

      setSuccessMessage(message);
      setErrorMessage(''); // Clear any previous errors
    } catch (error) {
      const errMessage =
        error.response?.data?.message || 'Login failed. Please try again.';
      setErrorMessage(errMessage);
      setSuccessMessage(''); // Clear success message if there's an error
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">
          Welcome back! Please log in to access your account
        </p>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="forgot-password">Forgot Password?</p>
        <button className="login-action" onClick={handleLogin}>
          Login
        </button>
        <button className="sign-up-action">
          <a href="/signup">Sign Up</a>
        </button>
        <div className="social-login">
          <p>Or Continue with</p>
          <div className="socials">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

        {/* Display error or success messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
