import React from 'react';
import './Login.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">
          Welcome back! Please log in to access your account
        </p>
        <div className="input-group">
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <p className="forgot-password">Forgot Password?</p>
        <button className="login-action">Login</button>
        <button className="sign-up-action"><a href="/signup">Sign Up</a></button>
        <div className="social-login">
          <p>Or Continue with</p>
          <div className="socials">
            <FaGoogle/>
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
