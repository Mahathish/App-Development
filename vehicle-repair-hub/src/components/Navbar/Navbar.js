import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Vehicle Repair Hub
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">DashBoard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;