// src/App.js

import React from 'react';
import { makeStyles } from '@mui/styles';
import Login from './components/Login';

// Define styles for the App component
const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Welcome to the QR Code Treasure Hunt!</h1>
        <p>Are you ready to embark on an adventure?</p>
      </header>
      <Login />
      {/* Other components and content */}
    </div>
  );
}

export default App;
