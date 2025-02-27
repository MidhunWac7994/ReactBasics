import React, { useState } from 'react';
import {  Typography } from '@mui/material';


const Home = () => {
  return (
    <div style={{ flexGrow: 1, padding: '20px', transition: 'margin-left 0.3s' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page!
        </Typography>
        <Typography variant="body1">
          This page contains a sidebar with links and a top header. You can use the button to toggle the sidebar.
        </Typography>
      </div>  
    
  );
};

export default Home;
                                                  