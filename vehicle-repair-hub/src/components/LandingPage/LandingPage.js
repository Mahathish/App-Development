import React from 'react';
import './LandingPage.css'; // Import custom CSS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import landingImage from '../../assets/landing-image.jpg'; // Add your own image
import realTimeAssistanceImage from '../../assets/real-time-assistance.jpg'; // Add your image
import maintenancePlansImage from '../../assets/maintenance-plans.jpg'; // Add your image
import vehicleDiagnosticsImage from '../../assets/vehicle-diagnostics.jpg'; // Add your image

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <header className="landing-header">
          <div className="landing-content">
            <h1>Welcome to Vehicle Repair Hub</h1>
            <p>Your comprehensive resource for vehicle maintenance and repair.</p>
            <a href="/login" className="btn-primary">Explore Now</a>
          </div>
          <div className="landing-image">
            <img src={landingImage} alt="Vehicle Repair" />
          </div>
        </header>
        <section className="features">
          <div className="feature-grid">
            <div className="feature-item">
              <img src={realTimeAssistanceImage} alt="Real-Time Assistance" className="feature-image"/>
              <h2>Real-Time Repair Assistance</h2>
              <p>Get immediate help with our live chat support and expert assistance for any vehicle issues you encounter.</p>
            </div>
            <div className="feature-item">
              <img src={maintenancePlansImage} alt="Customized Maintenance Plans" className="feature-image"/>
              <h2>Customized Maintenance Plans</h2>
              <p>Receive personalized maintenance schedules tailored to your vehicle's make, model, and usage.</p>
            </div>
            <div className="feature-item">
              <img src={vehicleDiagnosticsImage} alt="Interactive Vehicle Diagnostics" className="feature-image"/>
              <h2>Interactive Vehicle Diagnostics</h2>
              <p>Utilize our interactive tools to diagnose vehicle issues based on symptoms and receive step-by-step solutions.</p>
            </div>
          </div>
        </section>
        <section className="call-to-action">
          <h2>Join Our Community</h2>
          <p>Connect with other vehicle enthusiasts and share your repair experiences and tips.</p>
          <a href="/community" className="btn-secondary">Join Now</a>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
