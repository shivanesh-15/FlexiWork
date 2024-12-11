import React from "react";
import "./SignUp.css";
import { FaGoogle, FaFacebook, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="signup-container">
      <main className="signup-main">
        <div className="signup-form-container">
          <h1 className="signup-title">Sign Up</h1>
          <p className="signup-description">
            Join our community today! Create an account to unlock exclusive features and all kinds of jobs and services.
          </p>
          <div className="signup-inputs">
            <input type="email" placeholder="Enter Your Email" className="input-field" />
            <input type="password" placeholder="Enter Your Password" className="input-field" />
            <input type="password" placeholder="Confirm Your Password" className="input-field" />
          </div>
          <button className="signup-submit-btn">Sign Up</button>
          <button className="signup-login-btn"><a href="/login">Login</a></button>

          <p className="signup-or">----------- Or Continue with -----------</p>
          <div className="signup-social-icons">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
