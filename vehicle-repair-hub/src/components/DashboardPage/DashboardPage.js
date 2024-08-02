import React from 'react';
import Navbar from '../Navbar/Navbar';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Vehicle Repair Hub Dashboard</h1>
        <div className="dashboard-grid">
          <div className="dashboard-item">
            <h2 className="dashboard-section-title">Overview</h2>
            <p>Quick stats and summary of the latest data.</p>
          </div>
          <div className="dashboard-item">
            <h2 className="dashboard-section-title">Recent Activities</h2>
            <p>List of recent activities and updates.</p>
          </div>
          <div className="dashboard-item">
            <h2 className="dashboard-section-title">User Engagement</h2>
            <p>Details on user interactions and engagement metrics.</p>
          </div>
          <div className="dashboard-item">
            <h2 className="dashboard-section-title">System Health</h2>
            <p>Current status and health of the system.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
