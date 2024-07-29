// src/components/HowToArticles/HowToArticles.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './HowToArticles.css';

// Import images
import oilChangeImage from '../../assets/article-oil-change.jpg';
import brakePadsImage from '../../assets/article-brake-pads.jpg';
import batteryImage from '../../assets/article-battery.jpg';

const articles = [
  {
    id: 1,
    title: "How to Change Your Oil",
    date: "July 20, 2024",
    description: "Learn how to change the oil in your car with this step-by-step guide...",
    image: oilChangeImage
  },
  {
    id: 2,
    title: "Replacing Brake Pads: A Comprehensive Guide",
    date: "July 18, 2024",
    description: "This guide covers everything you need to know about replacing brake pads...",
    image: brakePadsImage
  },
  {
    id: 3,
    title: "How to Check and Replace Your Car's Battery",
    date: "July 15, 2024",
    description: "Follow these steps to check your car battery and replace it if necessary...",
    image: batteryImage
  }
];

const HowToArticles = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">How-To Articles</h1>
        <p className="intro-text">Read articles on various maintenance and repair topics. Stay informed and empowered to take care of your vehicle.</p>
        <div className="articles-container">
          {articles.map((article) => (
            <div className="article-card" key={article.id}>
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2>{article.title}</h2>
                <p className="article-date">Date: {article.date}</p>
                <p className="article-description">{article.description}</p>
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

export default HowToArticles;
