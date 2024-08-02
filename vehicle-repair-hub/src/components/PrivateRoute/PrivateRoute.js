import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const location = useLocation();
  const userRole = localStorage.getItem('userRole'); // Fetch user role from local storage

  // If no userRole is set, redirect to login page
  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If the user's role does not match the required role, redirect to the home page
  if (userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
