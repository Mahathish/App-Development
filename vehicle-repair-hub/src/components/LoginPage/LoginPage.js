import React, { useState } from 'react';
import './LoginPage.css'; // Ensure this CSS file is updated
import Navbar from '../Navbar/Navbar'; // Import Navbar if needed
import Footer from '../Footer/Footer'; // Import Footer if needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    // Add your login logic here
    // Redirect to the home page after successful login
    window.location.href = '/home';
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
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
                className="form-input"
                placeholder="Enter your password"
              />
            </label>
            <button type="submit" className="submit-button">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LoginPage;
