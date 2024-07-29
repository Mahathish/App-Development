import React from 'react';
import './AboutUsPage.css'; // Import custom CSS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Discover our mission, values, and the dedicated team behind Vehicle Repair Hub.</p>
        </header>
        <section className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>At Vehicle Repair Hub, our mission is to empower vehicle owners with the knowledge and tools they need to maintain and repair their vehicles effectively. We provide comprehensive, accessible resources to ensure your vehicle remains in optimal condition.</p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-text">
              <h2>Our Values</h2>
              <p>We value transparency, reliability, and education. Our goal is to build trust with our users by offering clear, reliable, and up-to-date information. We are committed to continuous learning and improvement to better serve our community.</p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-text">
              <h2>Meet the Team</h2>
              <p>Our team is comprised of experienced mechanics, automotive enthusiasts, and tech experts who are passionate about helping you get the most out of your vehicle. Learn more about the individuals driving Vehicle Repair Hub's success.</p>
            </div>
          </div>
        </section>
      </div>
        {/* <Footer /> */}
    </>
  );
};

export default AboutPage;
