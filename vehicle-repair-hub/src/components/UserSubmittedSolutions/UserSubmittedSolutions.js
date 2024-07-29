// src/components/UserSubmittedSolutions/UserSubmittedSolutions.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './UserSubmittedSolutions.css';

const userSolutions = [
  {
    id: 1,
    title: "Fixing a Flat Tire",
    description: "I successfully fixed a flat tire using a repair kit. Here's how I did it...",
    user: "John Doe",
    date: "July 10, 2024",
    // image: require('../../assets/flat-tire.jpg').default
  },
  {
    id: 2,
    title: "Replacing Brake Pads",
    description: "Changing brake pads was easier than I thought. Follow these steps...",
    user: "Jane Smith",
    date: "June 22, 2024",
    // image: require('../../assets/brake-pads-replacement.jpg').default
  },
  {
    id: 3,
    title: "Engine Overheating Solution",
    description: "My car's engine was overheating. I tried this solution and it worked...",
    user: "Mike Johnson",
    date: "May 15, 2024",
    // image: require('../../assets/engine-overheating.jpg').default
  }
];

const UserSubmittedSolutions = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">User-Submitted Solutions</h1>
        <p className="intro-text">Share and learn from others' repair stories. Browse through various user-submitted solutions and get inspired to tackle your own vehicle repair challenges.</p>
        <div className="solutions-container">
          {userSolutions.map((solution) => (
            <div className="solution-card" key={solution.id}>
              {/* <img src={solution.image} alt={solution.title} className="solution-image" /> */}
              <div className="solution-content">
                <h2>{solution.title}</h2>
                <p className="solution-description">{solution.description}</p>
                <p className="solution-user">Submitted by: {solution.user}</p>
                <p className="solution-date">Date: {solution.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserSubmittedSolutions;
