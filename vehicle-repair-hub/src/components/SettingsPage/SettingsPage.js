import React, { useState } from 'react';
import './SettingsPage.css';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdates: true,
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="settings-page">
      <Navbar />
      <div className="settings-dashboard-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Dashboard Menu</h2>
          <ul className="sidebar-menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/recent-activities">Recent Activities</a></li>
            <li><a href="/settings" className="active">Settings</a></li>
            <li><a href="/user-dashboard/support">Support</a></li>
          </ul>
        </aside>
        <main className="settings-content">
          <div className="settings-header">
            <h1>Settings</h1>
          </div>
          <div className="settings-section">
            <h2>Preferences</h2>
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                Enable Notifications
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />
                Dark Mode
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.autoUpdates}
                  onChange={() => handleToggle('autoUpdates')}
                />
                Enable Auto Updates
              </label>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SettingsPage;
