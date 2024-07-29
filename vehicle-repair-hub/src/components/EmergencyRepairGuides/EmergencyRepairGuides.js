// src/components/EmergencyRepairGuides/EmergencyRepairGuides.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './EmergencyRepairGuides.css';

// Import images
import flatTireImage from '../../assets/flat-tire.jpg';
import deadBatteryImage from '../../assets/dead-battery.jpg';
import overheatingImage from '../../assets/overheating.jpg';

const repairGuidesData = [
  {
    id: 1,
    title: "Fixing a Flat Tire",
    description: "Learn how to safely change a flat tire on the roadside...",
    image: flatTireImage,
    content: "Detailed steps to change a flat tire: Step 1: Find a safe location. Step 2: Turn on hazard lights. Step 3: Apply the parking brake. Step 4: Use a jack to lift the vehicle. Step 5: Remove the flat tire. Step 6: Install the spare tire. Step 7: Lower the vehicle and tighten the lug nuts."
  },
  {
    id: 2,
    title: "Jump Starting a Dead Battery",
    description: "Follow these steps to jump start your car's dead battery...",
    image: deadBatteryImage,
    content: "Steps to jump start a dead battery: Step 1: Park the working vehicle close. Step 2: Turn off both vehicles. Step 3: Attach the red jumper cable to the positive terminal of the dead battery. Step 4: Attach the other end of the red cable to the positive terminal of the working battery. Step 5: Attach the black cable to the negative terminal of the working battery. Step 6: Attach the other end of the black cable to an unpainted metal surface on the dead vehicle. Step 7: Start the working vehicle, then the dead vehicle."
  },
  {
    id: 3,
    title: "Handling Engine Overheating",
    description: "Steps to safely deal with an overheating engine...",
    image: overheatingImage,
    content: "Steps to handle engine overheating: Step 1: Turn off the air conditioning. Step 2: Turn on the heater. Step 3: Pull over safely. Step 4: Turn off the engine. Step 5: Wait for the engine to cool. Step 6: Check the coolant level. Step 7: Add coolant if necessary. Step 8: Seek professional help if needed."
  }
];

const EmergencyRepairGuides = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Emergency Repair Guides</h1>
        <p className="intro-text">Learn how to handle common roadside emergencies.</p>
        <div className="repair-guides-container">
          {repairGuidesData.map((guide) => (
            <div className="repair-guide-card" key={guide.id}>
              <img src={guide.image} alt={guide.title} className="repair-guide-image" />
              <div className="repair-guide-content">
                <h2>{guide.title}</h2>
                <p className="repair-guide-description">{guide.description}</p>
                <details>
                  <summary className="button">Read More</summary>
                  <p className="repair-guide-details">{guide.content}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmergencyRepairGuides;
