// src/components/TroubleshootingForum/TroubleshootingForum.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './TroubleshootingForum.css';
import radiatorImage from '../../assets/radiator.jpg';
import alternatorImage from '../../assets/alternator.jpg';
import brakePedalImage from '../../assets/brake-pedal.jpg';

const forumPosts = [
  {
    id: 1,
    title: "How to fix a leaking radiator?",
    user: "John Doe",
    date: "July 15, 2024",
    replies: 5,
    image: radiatorImage
  },
  {
    id: 2,
    title: "What are the signs of a bad alternator?",
    user: "Jane Smith",
    date: "July 12, 2024",
    replies: 3,
    image: alternatorImage
  },
  {
    id: 3,
    title: "Brake pedal feels soft, what should I do?",
    user: "Mike Johnson",
    date: "July 10, 2024",
    replies: 8,
    image: brakePedalImage
  }
];

const TroubleshootingForum = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Troubleshooting Forum</h1>
        <p className="intro-text">Ask questions, seek advice, and engage with fellow users. Share your experiences and get help with your vehicle repair issues.</p>
        <div className="forum-container">
          {forumPosts.map((post) => (
            <div className="forum-card" key={post.id}>
              <img src={post.image} alt={post.title} className="forum-image" />
              <div className="forum-content">
                <h2>{post.title}</h2>
                <p className="forum-user">Posted by: {post.user}</p>
                <p className="forum-date">Date: {post.date}</p>
                <p className="forum-replies">Replies: {post.replies}</p>
                <button className="button">View Thread</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TroubleshootingForum;
