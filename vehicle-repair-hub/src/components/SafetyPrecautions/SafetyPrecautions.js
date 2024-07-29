// src/components/SafetyPrecautions/SafetyPrecautions.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SafetyPrecautions.css';
import safetyPrecautionsImage from '../../assets/safety-precautions.jpg';

const SafetyPrecautions = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Safety Precautions</h1>
        <p className="intro-text">Understand safety precautions and best practices for repairs.</p>
        <div className="safety-precautions-container">
          <img src={safetyPrecautionsImage} alt="Safety Precautions" className="safety-precautions-image" />
          <div className="safety-precautions-content">
            <h2>Essential Safety Tips</h2>
            <p>When working on your vehicle, safety should always be your top priority. Follow these essential safety tips to ensure a safe working environment and prevent accidents.</p>
            <h3>General Safety Tips:</h3>
            <ul>
              <li>Always wear appropriate personal protective equipment (PPE) such as gloves, safety glasses, and ear protection.</li>
              <li>Ensure your work area is well-ventilated and free of flammable materials.</li>
              <li>Keep a fire extinguisher nearby and know how to use it.</li>
              <li>Never work under a vehicle supported only by a jack; always use jack stands.</li>
              <li>Disconnect the battery before performing any electrical work.</li>
            </ul>
            <h3>Specific Precautions:</h3>
            <ul>
              <li>When working with fuel systems, avoid open flames and sparks.</li>
              <li>Use proper tools and equipment to avoid injury and damage to the vehicle.</li>
              <li>Follow the manufacturer’s guidelines and instructions for repairs and maintenance.</li>
              <li>Be aware of hot surfaces and fluids that can cause burns.</li>
              <li>Dispose of hazardous materials like oil, coolant, and batteries safely and responsibly.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SafetyPrecautions;
