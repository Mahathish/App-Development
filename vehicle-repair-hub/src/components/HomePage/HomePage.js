import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import heroImage from '../../assets/hero-image.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`); // Redirect to a search results page
    }
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <>
      <Navbar />
      <header className="hero">
        <img src={heroImage} alt="Vehicle Repair Hub" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Vehicle Repair Hub</h1>
          <p className="hero-subtitle">Your trusted partner for all your vehicle repair needs.</p>
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for services, guides, or tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                aria-label="Search"
              />
              <button type="submit" className="search-button" aria-label="Search">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <button className="hero-button" onClick={handleLearnMore}>Explore a World of Repair</button>
        </div>
      </header>
      <main className="main-content">
        <section className="overview">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="overview-description">
            At Vehicle Repair Hub, we pride ourselves on providing expert guidance, reliable resources, and exceptional customer service. Our team of experienced professionals is dedicated to helping you maintain and repair your vehicle with confidence.
          </p>
        </section>
        <section className="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3 className="service-title">Repair Guides</h3>
              <p className="service-description">Detailed guides for common issues.</p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Maintenance Schedules</h3>
              <p className="service-description">Recommended schedules for vehicle care.</p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Diagnostic Tools</h3>
              <p className="service-description">Interactive tools to diagnose problems.</p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Parts & Tools Recommendations</h3>
              <p className="service-description">Find the best parts and tools for repairs.</p>
            </div>
            <div className="service-item">
              <h3 className="service-title">User-Submitted Solutions</h3>
              <p className="service-description">Share and learn from others' repair stories.</p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Local Repair Shop Directory</h3>
              <p className="service-description">Find trusted local repair shops and mechanics.</p>
            </div>
          </div>
        </section>
        <section className="contact">
          <h2 className="section-title">Connect with Us</h2>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={40} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
