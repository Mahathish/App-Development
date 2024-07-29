// src/components/MaintenanceSchedules/MaintenanceSchedules.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './MaintenanceSchedules.css';
import maintenanceSchedulesImage from '../../assets/maintenance-schedules.jpg';

const MaintenanceSchedules = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Maintenance Schedules</h1>
        <p className="intro-text">Recommended schedules for vehicle care.</p>
        <div className="maintenance-schedules-container">
          <img src={maintenanceSchedulesImage} alt="Maintenance Schedules" className="maintenance-schedules-image" />
          <div className="maintenance-schedules-content">
            <h2>Regular Maintenance</h2>
            <p>Keeping up with regular maintenance is crucial for the longevity and performance of your vehicle. Here are the recommended maintenance schedules:</p>
            <h3>Every 3,000 to 5,000 Miles:</h3>
            <ul>
              <li>Change oil and oil filter</li>
              <li>Check and top off all fluids</li>
              <li>Inspect tires and check tire pressure</li>
              <li>Check and replace air filter</li>
              <li>Inspect brake pads, rotors, and brake fluid</li>
            </ul>
            <h3>Every 15,000 to 30,000 Miles:</h3>
            <ul>
              <li>Replace fuel filter</li>
              <li>Inspect and replace spark plugs</li>
              <li>Check and replace battery if necessary</li>
              <li>Inspect and replace cabin air filter</li>
              <li>Inspect suspension and steering components</li>
            </ul>
            <h3>Every 30,000 to 60,000 Miles:</h3>
            <ul>
              <li>Flush and replace coolant</li>
              <li>Inspect and replace transmission fluid</li>
              <li>Inspect and replace brake pads and rotors</li>
              <li>Inspect and replace timing belt</li>
              <li>Inspect and replace hoses and belts</li>
            </ul>
            <h3>Every 60,000 to 90,000 Miles:</h3>
            <ul>
              <li>Replace timing belt and water pump</li>
              <li>Inspect and replace drive belts</li>
              <li>Inspect and replace fuel injectors</li>
              <li>Inspect and replace motor mounts</li>
              <li>Inspect and replace wheel bearings</li>
            </ul>
            <button className="schedule-button">View Full Schedule</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MaintenanceSchedules;
