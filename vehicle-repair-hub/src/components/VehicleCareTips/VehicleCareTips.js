// src/components/VehicleCareTips/VehicleCareTips.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './VehicleCareTips.css';

// Import images
import careTipImage1 from '../../assets/care-tip-image1.jpg';
import careTipImage2 from '../../assets/care-tip-image2.jpg';
import careTipImage3 from '../../assets/care-tip-image3.jpg';

const careTipsData = [
  {
    id: 1,
    title: "Regular Oil Changes",
    description: "Ensure your engine runs smoothly by changing the oil regularly...",
    image: careTipImage1
  },
  {
    id: 2,
    title: "Tire Maintenance",
    description: "Keep your tires properly inflated and rotate them periodically...",
    image: careTipImage2
  },
  {
    id: 3,
    title: "Battery Care",
    description: "Maintain a healthy battery by checking its condition and cleaning...",
    image: careTipImage3
  }
];

const VehicleCareTips = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Vehicle Care Tips</h1>
        <p className="intro-text">Get tips for keeping your vehicle in top condition.</p>
        <div className="care-tips-container">
          {careTipsData.map((tip) => (
            <div className="care-tip-card" key={tip.id}>
              <img src={tip.image} alt={tip.title} className="care-tip-image" />
              <div className="care-tip-content">
                <h2>{tip.title}</h2>
                <p className="care-tip-description">{tip.description}</p>
                <button className="button">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VehicleCareTips;
