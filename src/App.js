// src/App.js

import React from 'react';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles
import Login from './components/Login';

// Define styled components for the App component
const AppContainer = styled('div')({
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Header = styled('header')({
  marginBottom: theme => theme.spacing(4),
});

function App() {
  return (
    <AppContainer>
      <Header>
        <h1>Welcome to the QR Code Treasure Hunt!</h1>
        <p>Are you ready to embark on an adventure?</p>
      </Header>
      <Login />
      {/* Other components and content */}
    </AppContainer>
  );
}

export default App;
