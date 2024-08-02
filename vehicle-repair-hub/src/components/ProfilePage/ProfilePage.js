import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '1234 Main St, Anytown, USA',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile data from an API or database here
  }, []);

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-dashboard-container">
        <aside className="sidebar">
          <h2>Dashboard Menu</h2>
          <ul className="sidebar-menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/recent-activities">Recent Activities</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/dashboard#support">Support</a></li>
          </ul>
        </aside>
        <main className="profile-content">
          <div className="profile-header">
            <h1>Profile Overview</h1>
          </div>
          <div className="profile-info">
            <h2>Personal Information</h2>
            <div className="info-item">
              <strong>Name:</strong> <span>{profile.name}</span>
            </div>
            <div className="info-item">
              <strong>Email:</strong> <span>{profile.email}</span>
            </div>
            <div className="info-item">
              <strong>Phone:</strong> <span>{profile.phone}</span>
            </div>
            <div className="info-item">
              <strong>Address:</strong> <span>{profile.address}</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-edit">Edit Profile</button>
            <button className="btn-back" onClick={() => navigate(-1)}>Back</button>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
