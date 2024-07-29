// src/components/LocalRepairShopDirectory/LocalRepairShopDirectory.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './LocalRepairShopDirectory.css';

const repairShops = [
  {
    id: 1,
    name: "Joe's Auto Repair",
    location: "123 Main St, Springfield",
    rating: 4.5,
    reviews: 24,
    // image: require('../../assets/auto-repair-shop.jpg').default
  },
  {
    id: 2,
    name: "Quick Fix Garage",
    location: "456 Elm St, Shelbyville",
    rating: 4.0,
    reviews: 18,
    // image: require('../../assets/garage.jpg').default
  },
  {
    id: 3,
    name: "Expert Mechanics",
    location: "789 Oak St, Capital City",
    rating: 4.8,
    reviews: 30,
    // image: require('../../assets/mechanics.jpg').default
  }
];

const LocalRepairShopDirectory = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1 className="main-heading">Local Repair Shop Directory</h1>
        <p className="intro-text">Find trusted local repair shops and mechanics. Browse through the directory and read reviews to choose the best service for your vehicle.</p>
        <div className="directory-container">
          {repairShops.map((shop) => (
            <div className="shop-card" key={shop.id}>
              {/* <img src={shop.image} alt={shop.name} className="shop-image" /> */}
              <div className="shop-content">
                <h2>{shop.name}</h2>
                <p className="shop-location">{shop.location}</p>
                <p className="shop-rating">Rating: {shop.rating} ({shop.reviews} reviews)</p>
                <button className="button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LocalRepairShopDirectory;
