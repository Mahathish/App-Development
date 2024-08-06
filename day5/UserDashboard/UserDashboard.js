import React, { useEffect, useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './UserDashboard.css';
import Navbar from '../Navbar/Navbar';

const UserDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [userData, setUserData] = useState(null);

  const isActive = (path) => currentPath.startsWith(path) ? 'active' : '';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Example API call
        // const response = await fetch('/api/user');
        // const data = await response.json();
        
        // For now, we use a placeholder object
        const data = {
          name: 'John Doe',
          email: 'john.doe@example.com',
          joinedDate: '2023-01-01T00:00:00.000Z',
          recentActivities: [
            { id: 1, activity: 'Changed oil', date: '2023-06-01' },
            { id: 2, activity: 'Replaced air filter', date: '2023-04-15' },
            { id: 3, activity: 'Checked tire pressure', date: '2023-02-20' },
          ],
          settings: {
            notification: true,
            darkMode: false,
          },
          support: [
            { id: 1, query: 'How to change a tire?', response: 'Refer to our guide here...' },
            { id: 2, query: 'Best oil for my car?', response: 'We recommend synthetic oil for most vehicles.' },
          ],
        };
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
    <div className="user-dashboard">
      <Navbar />
      <div className="profile-dashboard-container">
        <aside className="sidebar">
          <h2>Dashboard Menu</h2>
          <ul className="sidebar-menu">
            <li className={isActive('/profile')}><Link to="/profile">Profile</Link></li>
            <li className={isActive('/recent-activities')}><Link to="/recent-activities">Recent Activities</Link></li>
            <li className={isActive('/settings')}><Link to="/settings">Settings</Link></li>
            <li className={isActive('/support')}><Link to="/support">Support</Link></li>
          </ul>
        </aside>
        <main className="profile-content">
          {userData ? (
            <>
              <div className="profile-header">
                <h1>Welcome, {userData.name}</h1>
              </div>
              <div className="profile-info">
                <h2>Profile Information</h2>
                <div className="info-item">
                  <strong>Email:</strong> <span>{userData.email}</span>
                </div>
                <div className="info-item">
                  <strong>Joined:</strong> <span>{new Date(userData.joinedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="recent-activities">
                <h2>Recent Activities</h2>
                <ul>
                  {userData.recentActivities.map(activity => (
                    <li key={activity.id}>
                      {activity.activity} - {new Date(activity.date).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="settings">
                <h2>Settings</h2>
                <div className="info-item">
                  <strong>Notifications:</strong> <span>{userData.settings.notification ? 'Enabled' : 'Disabled'}</span>
                </div>
                <div className="info-item">
                  <strong>Dark Mode:</strong> <span>{userData.settings.darkMode ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>
              <div className="support">
                <h2>Support Queries</h2>
                <ul>
                  {userData.support.map(query => (
                    <li key={query.id}>
                      <strong>Query:</strong> {query.query}
                      <br />
                      <strong>Response:</strong> {query.response}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="profile-actions">
                <button className="btn-edit">Edit Profile</button>
                <button className="btn-back">Back to Dashboard</button>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <Outlet /> {/* Render the nested routes */}
        </main>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
