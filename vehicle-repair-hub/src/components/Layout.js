import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'; // Import Navbar

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
