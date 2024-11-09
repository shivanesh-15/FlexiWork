// Login.js
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login or Signup</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-button">Submit</button>
      </form>
    </div>
  );
}

export default Login;
