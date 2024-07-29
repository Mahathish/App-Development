import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import ContactPage from './components/ContactPage/ContactPage';
import LandingPage from './components/LandingPage/LandingPage';
// import DashboardPage from './components/DashboardPage/DashboardPage';
import RepairGuidesPage from './components/RepairGuides/RepairGuides';
import MaintenanceSchedules from './components/MaintenanceSchedules/MaintenanceSchedules';
import DiagnosticTools from './components/DiagnosticTools/DiagnosticTools';
import PartsToolsRecommendations from './components/PartsToolsRecommendations/PartsToolsRecommendations';
import UserSubmittedSolutions from './components/UserSubmittedSolutions/UserSubmittedSolutions';
import TroubleshootingForum from './components/TroubleshootingForum/TroubleshootingForum';
import LocalRepairShopDirectory from './components/LocalRepairShopDirectory/LocalRepairShopDirectory';
import RecallAlerts from './components/RecallAlerts/RecallAlerts';
import HowToArticles from './components/HowToArticles/HowToArticles';
import VehicleCareTips from './components/VehicleCareTips/VehicleCareTips';
import EmergencyRepairGuides from './components/EmergencyRepairGuides/EmergencyRepairGuides';
import OnlineChatSupport from './components/OnlineChatSupport/OnlineChatSupport';
import SafetyPrecautions from './components/SafetyPrecautions/SafetyPrecautions';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import DashboardPage from './components/DashboardPage/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/repair-guides" element={<RepairGuidesPage />} />
        <Route path="/maintenance-schedules" element={<MaintenanceSchedules />} />
        <Route path="/diagnostic-tools" element={<DiagnosticTools />} />
        <Route path="/parts-tools-recommendations" element={<PartsToolsRecommendations />} />
        <Route path="/user-submitted-solutions" element={<UserSubmittedSolutions />} />
        <Route path="/troubleshooting-forum" element={<TroubleshootingForum />} />
        <Route path="/local-repair-shop-directory" element={<LocalRepairShopDirectory />} />
        <Route path="/recall-alerts" element={<RecallAlerts />} />
        <Route path="/how-to-articles" element={<HowToArticles />} />
        <Route path="/vehicle-care-tips" element={<VehicleCareTips />} />
        <Route path="/emergency-repair-guides" element={<EmergencyRepairGuides />} />
        <Route path="/online-chat-support" element={<OnlineChatSupport />} />
        <Route path="/safety-precautions" element={<SafetyPrecautions />} />
      </Routes>
    </Router>
  );
};

export default App;
