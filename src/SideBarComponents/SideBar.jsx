  import React, { useState } from 'react';
  import { Drawer, List, ListItem, ListItemText, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { useSetRecoilState } from 'recoil';
  import { isLoggedInState } from '../atom';

  const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState); 

    const [openDialog, setOpenDialog] = useState(false); 

    const menuItems = [
      { text: 'Home', path: '/home' },
      { text: 'About', path: '/about' },
      { text: 'Services', path: '/services' },
      { text: 'Contact', path: '/contact' },
      { text: 'Profile', path: '/profile' },
      { text: 'Settings', path: '/settings' },
    ];

    const handleLogoutConfirmation = () => {
      setOpenDialog(true);
    };

    const handleLogout = () => {
      localStorage.setItem('isLoggedIn', 'false'); 
      setIsLoggedIn(false); 
      setOpenDialog(false); 
    };

    const handleCancel = () => {
      setOpenDialog(false); 
    };

    return (
      <div>
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={toggleSidebar}
          variant="persistent"
          sx={{
            width: 250,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 250,
              boxSizing: 'border-box',
              backgroundColor: '#333',
              color: 'white',
            },
          }}
        >
          <div style={{ padding: '20px' }}>
            <Typography variant="h5" color="white" gutterBottom>
              Sidebar
            </Typography>
            <List>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <ListItem
                    key={item.path}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#555',
                      },
                      backgroundColor: isActive ? '#444' : 'transparent',
                    }}
                    aria-label={`Go to ${item.text}`}
                  >
                    <Link
                      to={item.path}
                      style={{
                        textDecoration: 'none',
                        width: '100%',
                        color: 'inherit',
                      }}
                    >
                      <ListItemText
                        primary={item.text}
                        sx={{
                          color: isActive ? '#fff' : 'lightgrey',
                        }}
                      />
                    </Link>
                  </ListItem>
                );
              })}
            </List>

            <Button
              onClick={handleLogoutConfirmation} 
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                backgroundColor: 'red',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkred',
                },
                marginTop: 2,
              }}
            >
              Log Out
            </Button>
          </div>
        </Drawer>

        <Dialog open={openDialog} onClose={handleCancel}>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to log out? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLogout} color="secondary">
              Log Out
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default Sidebar;
