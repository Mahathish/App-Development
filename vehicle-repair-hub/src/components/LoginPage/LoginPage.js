import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example authentication logic - replace with your own logic
    if (email === 'admin@example.com' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      navigate('/admin-dashboard');
    } else if (email === 'user@example.com' && password === 'user') {
      localStorage.setItem('userRole', 'user');
      navigate('/user-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div></>
  );
};

export default LoginPage;
