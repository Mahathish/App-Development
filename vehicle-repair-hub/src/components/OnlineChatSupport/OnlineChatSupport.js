// src/components/OnlineChatSupport/OnlineChatSupport.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './OnlineChatSupport.css';
import chatSupportImage from '../../assets/chat-support.jpg';

const OnlineChatSupport = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Online Chat Support</h1>
        <p className="intro-text">Chat with experienced mechanics for real-time advice.</p>
        <div className="chat-support-container">
          <img src={chatSupportImage} alt="Chat Support" className="chat-support-image" />
          <div className="chat-support-content">
            <h2>How It Works</h2>
            <p>Our online chat support connects you with experienced mechanics who can provide real-time advice and guidance on vehicle repairs and maintenance. Whether you're dealing with an emergency or just need some tips, we're here to help.</p>
            <h3>Features:</h3>
            <ul>
              <li>Instant access to professional mechanics</li>
              <li>Real-time problem-solving</li>
              <li>Advice on repairs and maintenance</li>
              <li>Available 24/7</li>
            </ul>
            <button className="start-chat-button">Start Chat</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OnlineChatSupport;
