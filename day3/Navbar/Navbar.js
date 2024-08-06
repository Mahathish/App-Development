import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('userRole');
    // Redirect to the home page or login page
    navigate('/login'); // Change this to '/' if you prefer redirecting to the home page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>
            Vehicle Repair Hub
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {userRole ? (
            <>
              {userRole === 'admin' && (
                <Button
                  color="inherit"
                  component={Link}
                  to="/admin-dashboard"
                  sx={{ textDecoration: 'none' }}
                >
                
                </Button>
              )}
              {userRole === 'user' && (
                <Button
                  color="inherit"
                  component={Link}
                  to="/user-dashboard"
                  sx={{ textDecoration: 'none' }}
                >
                  
                </Button>
              )}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/home"
                sx={{ textDecoration: 'none' }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ textDecoration: 'none' }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                sx={{ textDecoration: 'none' }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
