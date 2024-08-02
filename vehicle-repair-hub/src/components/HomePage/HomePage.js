import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import heroImage from '../../assets/hero-image.jpg';
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
            </div>
          </form>
          <button className="hero-button" onClick={handleLearnMore}>Explore a World of Repair</button>
        </div>
      </header>
      <main className="main-content">
        <section className="cards-section">
          <div className="card">
            <h3 className="card-title">Card 1</h3>
            <p className="card-description">Description for card 1.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Card 2</h3>
            <p className="card-description">Description for card 2.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Card 3</h3>
            <p className="card-description">Description for card 3.</p>
          </div>
        </section>
        <section className="stats-section">
          <div className="stat-item">
            <h3 className="stat-value">109,100</h3>
            <p className="stat-description">Free Manuals</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">220,627</h3>
            <p className="stat-description">Solutions</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">58,172</h3>
            <p className="stat-description">Devices</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">100M+</h3>
            <p className="stat-description">Repairs</p>
          </div>
        </section>
        <section className="about-section">
          <h2 className="section-title">About Us</h2>
          <p className="about-description">
            At Vehicle Repair Hub, we pride ourselves on providing expert guidance, reliable resources, and exceptional customer service. Our team of experienced professionals is dedicated to helping you maintain and repair your vehicle with confidence.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
