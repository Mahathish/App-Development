import React, { useState, useEffect } from 'react';
import './RecentActivities.css';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch recent activities from an API or database
    const fetchActivities = async () => {
      // Example API call
      // const response = await fetch('/api/activities');
      // const data = await response.json();
      // setActivities(data);

      // Mock data for demonstration
      const mockData = [
        { id: 1, description: 'Updated vehicle information', date: '2024-07-28' },
        { id: 2, description: 'Changed password', date: '2024-07-27' },
        { id: 3, description: 'Added new vehicle', date: '2024-07-25' },
      ];
      setActivities(mockData);
    };

    fetchActivities();
  }, []);

  return (
    <div className="recent-activities">
      <Navbar />
      <div className="profile-dashboard-container">
        <aside className="sidebar">
          <h2>Dashboard Menu</h2>
          <ul className="sidebar-menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/recent-activities">Recent Activities</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </aside>
        <main className="profile-content">
          
          <div className="activity-list">
            {activities.length === 0 ? (
              <p>No recent activities found.</p>
            ) : (
              <ul>
                {activities.map(activity => (
                  <li key={activity.id} className="activity-item">
                    <div className="activity-description">
                      <p>{activity.description}</p>
                      <span className="activity-date">{activity.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RecentActivities;
