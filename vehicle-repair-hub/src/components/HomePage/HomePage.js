import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import your custom CSS
// import projectImage from '../../assets/project-image.jpg';
import cardImage1 from '../../assets/card-image1.jpg';
import cardImage2 from '../../assets/card-image2.jpg';
import cardImage3 from '../../assets/card-image3.jpg';
import cardImage4 from '../../assets/card-image4.jpg';
import cardImage5 from '../../assets/card-image5.jpg';
import cardImage6 from '../../assets/card-image6.jpg';
import cardImage7 from '../../assets/cardImage7.jpg'; // Add new card images
import cardImage8 from '../../assets/cardImage8.jpg';
import cardImage9 from '../../assets/cardImage9.jpg';
import cardImage10 from '../../assets/cardImage10.jpg';
import cardImage11 from '../../assets/cardImage11.jpg';
import cardImage12 from '../../assets/cardImage12.jpg';
import cardImage13 from '../../assets/cardImage13.jpg';
import cardImage14 from '../../assets/cardImage14.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const cardData = [
  { id: 1, title: "Repair Guides", description: "Detailed guides for common issues.", image: cardImage1 },
  { id: 2, title: "Maintenance Schedules", description: "Recommended schedules for vehicle care.", image: cardImage2 },
  { id: 3, title: "Diagnostic Tools", description: "Interactive tools to diagnose problems.", image: cardImage3 },
  // { id: 4, title: "Video Tutorials", description: "Watch experts demonstrate repair techniques.", image: cardImage4 },
  { id: 5, title: "Parts & Tools Recommendations", description: "Find the best parts and tools for repairs.", image: cardImage5 },
  { id: 6, title: "User-Submitted Solutions", description: "Share and learn from others' repair stories.", image: cardImage6 },
  { id: 7, title: "Troubleshooting Forum", description: "Ask questions, seek advice, and engage with fellow users.", image: cardImage7 },
  { id: 8, title: "Local Repair Shop Directory", description: "Find trusted local repair shops and mechanics.", image: cardImage8 },
  { id: 9, title: "Recall Alerts", description: "Stay informed about vehicle recalls and safety notices.", image: cardImage9 },
  { id: 10, title: "How-To Articles", description: "Read articles on various maintenance and repair topics.", image: cardImage10 },
  { id: 11, title: "Vehicle Care Tips", description: "Get tips for keeping your vehicle in top condition.", image: cardImage11 },
  { id: 12, title: "Emergency Repair Guides", description: "Learn how to handle common roadside emergencies.", image: cardImage12 },
  { id: 13, title: "Online Chat Support", description: "Chat with experienced mechanics for real-time advice.", image: cardImage13 },
  { id: 14, title: "Safety Precautions", description: "Understand safety precautions and best practices for repairs.", image: cardImage14 },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    if (id === 1) {
      navigate('/repair-guides');
    } else if (id === 2) {
      navigate('/maintenance-schedules');
    } else if (id === 3) {
      navigate('/diagnostic-tools');
    } else if (id === 5) {
      navigate('/parts-tools-recommendations');
    } else if (id === 6) {
      navigate('/user-submitted-solutions');
    } else if (id === 7) {
      navigate('/troubleshooting-forum');
    } else if (id === 8) {
      navigate('/local-repair-shop-directory');
    } else if (id === 9) {
      navigate('/recall-alerts');
    } else if (id === 10) {
      navigate('/how-to-articles');
    } else if (id === 11) {
      navigate('/vehicle-care-tips');
    } else if (id === 12) {
      navigate('/emergency-repair-guides');
    } else if (id === 13) {
      navigate('/online-chat-support');
    } else if (id === 14) {
      navigate('/safety-precautions');
    } else {
      navigate(`/card/${id}`);
    }
  };

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Welcome to Vehicle Repair Hub</h1>
        <h2 className="sub-heading">Explore Our Services</h2>
        <div className="cards-container">
          {cardData.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <br/>
                <button onClick={() => handleReadMore(card.id)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={40} /></a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
