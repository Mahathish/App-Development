import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar'; // Import Navbar
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import SignupPage from './components/SignupPage/SignupPage';
import LandingPage from './components/LandingPage/LandingPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfilePage from './components/ProfilePage/ProfilePage';
import RecentActivities from './components/RecentActivities/RecentActivities';
import SettingsPage from './components/SettingsPage/SettingsPage';
import RepairGuides from './components/RepairGuides/RepairGuides';
import MaintenanceSchedules from './components/MaintenanceSchedules/MaintenanceSchedules';
import DiagnosisResult from './components/DiagnosticTools/DiagnosticTools';
import PartsToolsRecommendations from './components/PartsToolsRecommendations/PartsToolsRecommendations';
import UserSubmittedSolutions from './components/UserSubmittedSolutions/UserSubmittedSolutions';
import TroubleshootingForum from './components/TroubleshootingForum/TroubleshootingForum';
import RecallAlerts from './components/RecallAlerts/RecallAlerts';
import HowToArticles from './components/HowToArticles/HowToArticles';
import VehicleCareTips from './components/VehicleCareTips/VehicleCareTips';
import EmergencyRepairGuides from './components/EmergencyRepairGuides/EmergencyRepairGuides';
import OnlineChatSupport from './components/OnlineChatSupport/OnlineChatSupport';
import SafetyPrecautions from './components/SafetyPrecautions/SafetyPrecautions';

// Component to conditionally render Navbar based on the route
const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      {showNavbar }
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
        <Route path="/home" element={<Layout><HomePage /></Layout>} />
        <Route path="/repair-guides" element={<Layout><RepairGuides /></Layout>} />
        <Route path="/maintenance-schedules" element={<Layout><MaintenanceSchedules /></Layout>} />
        <Route path="/diagnosis-result" element={<Layout><DiagnosisResult /></Layout>} />
        <Route path="/parts-tools-recommendations" element={<Layout><PartsToolsRecommendations /></Layout>} />
        <Route path="/user-submitted-solutions" element={<Layout><UserSubmittedSolutions /></Layout>} />
        <Route path="/troubleshooting-forum" element={<Layout><TroubleshootingForum /></Layout>} />
        <Route path="/recall-alerts" element={<Layout><RecallAlerts /></Layout>} />
        <Route path="/how-to-articles" element={<Layout><HowToArticles /></Layout>} />
        <Route path="/vehicle-care-tips" element={<Layout><VehicleCareTips /></Layout>} />
        <Route path="/emergency-repair-guides" element={<Layout><EmergencyRepairGuides /></Layout>} />
        <Route path="/online-chat-support" element={<Layout><OnlineChatSupport /></Layout>} />
        <Route path="/safety-precautions" element={<Layout><SafetyPrecautions /></Layout>} />

        <Route 
          path="/admin-dashboard" 
          element={
            <PrivateRoute role="admin">
              <Layout><AdminDashboard /></Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/user-dashboard" 
          element={
            <PrivateRoute role="user">
              <Layout><UserDashboard /></Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute role="user">
              <Layout><ProfilePage /></Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/recent-activities" 
          element={
            <PrivateRoute role="user">
              <Layout><RecentActivities /></Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <PrivateRoute role="user">
              <Layout><SettingsPage /></Layout>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
