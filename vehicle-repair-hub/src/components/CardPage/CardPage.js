import React from 'react';
import './CardPage.css'; // Import custom CSS

const Card = ({ title, description, link, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <a href={link} className="card-link">Learn More</a>
    </div>
  );
};

export default Card;
