import React, { useState } from 'react';
import './SignupPage.css'; // Ensure this CSS file is updated
import Navbar from '../Navbar/Navbar'; // Import Navbar if needed
import Footer from '../Footer/Footer'; // Import Footer if needed

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }
    
    // Basic password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }
    
    // Confirm passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Handle signup logic here
    
    // Redirect to login page after successful signup
    window.location.href = '/login';
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <label className="form-label">
              Email:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className={`form-input ${emailError ? 'error' : ''}`}
                placeholder="Enter your email"
              />
            </label>
            {emailError && <p className="error-message">{emailError}</p>}
            <label className="form-label">
              Password:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className={`form-input ${passwordError ? 'error' : ''}`}
                placeholder="Enter your password"
              />
            </label>
            {passwordError && <p className="error-message">{passwordError}</p>}
            <label className="form-label">
              Confirm Password:
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                className="form-input"
                placeholder="Confirm your password"
              />
            </label>
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
