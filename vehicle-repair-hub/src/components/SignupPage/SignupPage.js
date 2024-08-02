import React, { useState } from 'react';
import './SignupPage.css';
import Navbar from '../Navbar/Navbar';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle signup logic here
      window.location.href = '/login';
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <label>Email:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </label>
            <label>Password:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </label>
            <label>Confirm Password:
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
