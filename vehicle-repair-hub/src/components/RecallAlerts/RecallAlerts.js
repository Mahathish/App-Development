// src/components/RecallAlerts/RecallAlerts.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './RecallAlerts.css';

// Import new images
import newRecallImage1 from '../../assets/new-recall-image1.jpg';
import newRecallImage2 from '../../assets/new-recall-image2.jpg';
import newRecallImage3 from '../../assets/new-recall-image3.jpg';

const recallData = [
  {
    id: 1,
    title: "Recall Alert: Brake System",
    date: "July 20, 2024",
    description: "A potential issue with the brake system in certain models...",
    image: newRecallImage1
  },
  {
    id: 2,
    title: "Recall Alert: Airbag Deployment",
    date: "July 18, 2024",
    description: "Airbags in some vehicles may not deploy as intended...",
    image: newRecallImage2
  },
  {
    id: 3,
    title: "Recall Alert: Engine Overheating",
    date: "July 15, 2024",
    description: "Reports of engine overheating due to faulty cooling systems...",
    image: newRecallImage3
  }
];

const RecallAlerts = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Recall Alerts</h1>
        <p className="intro-text">Stay informed about vehicle recalls and safety notices.</p>
        <div className="recall-container">
          {recallData.map((recall) => (
            <div className="recall-card" key={recall.id}>
              <img src={recall.image} alt={recall.title} className="recall-image" />
              <div className="recall-content">
                <h2>{recall.title}</h2>
                <p className="recall-date">Date: {recall.date}</p>
                <p className="recall-description">{recall.description}</p>
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

export default RecallAlerts;
