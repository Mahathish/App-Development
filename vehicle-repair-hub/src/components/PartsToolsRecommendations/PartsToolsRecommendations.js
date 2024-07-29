import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './PartsToolsRecommendations.css';

const recommendations = [
  {
    id: 1,
    title: "Brake Pads",
    description: "High-quality brake pads for various car models.",
    image: require('../../assets/brake-pads.jpg'),
    link: "https://example.com/brake-pads"
  },
  {
    id: 2,
    title: "Oil Filter",
    description: "Durable oil filters to keep your engine clean.",
    image: require('../../assets/oil-filter.jpg'),
    link: "https://example.com/oil-filter"
  },
  {
    id: 3,
    title: "Spark Plugs",
    description: "Efficient spark plugs for better engine performance.",
    image: require('../../assets/spark-plugs.jpg'),
    link: "https://example.com/spark-plugs"
  },
  {
    id: 4,
    title: "Wrench Set",
    description: "Complete wrench set for all your repair needs.",
    image: require('../../assets/wrench-set.jpg'),
    link: "https://example.com/wrench-set"
  },
  {
    id: 5,
    title: "Car Battery",
    description: "Reliable car batteries with long-lasting power.",
    image: require('../../assets/car-battery.jpg'),
    link: "https://example.com/car-battery"
  },
  {
    id: 6,
    title: "Tire Pressure Gauge",
    description: "Accurate tire pressure gauges for safety.",
    image: require('../../assets/tire-pressure-gauge.jpg'),
    link: "https://example.com/tire-pressure-gauge"
  },
];

const PartsToolsRecommendations = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Parts & Tools Recommendations</h1>
        <p className="intro-text">Find the best parts and tools for your vehicle repairs. We've curated a list of high-quality products to ensure your repairs are successful and your vehicle runs smoothly.</p>
        <div className="cards-container">
          {recommendations.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="button">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PartsToolsRecommendations;
