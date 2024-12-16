import React, { useState } from "react";
import "./SignUp.css";
import { FaGoogle, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("/api/signup", {
        email,
        password,
        confirmPassword,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage(""); // Clear previous errors
    } catch (error) {
      const errMessage =
        error.response?.data?.message || "Sign-up failed. Please try again.";
      setErrorMessage(errMessage);
      setSuccessMessage(""); // Clear success message if there's an error
    }
  };

  return (
    <div className="signup-container">
      <main className="signup-main">
        <div className="signup-form-container">
          <h1 className="signup-title">Sign Up</h1>
          <p className="signup-description">
            Join our community today! Create an account to unlock exclusive features and all kinds of jobs and services.
          </p>
          <div className="signup-inputs">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button className="signup-submit-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="signup-login-btn">
            <a href="/login">Login</a>
          </button>

          <p className="signup-or">----------- Or Continue with -----------</p>
          <div className="signup-social-icons">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
          </div>

          {/* Display error or success messages */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </main>
    </div>
  );
};

export default SignUp;
