// src/components/Login.js

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { makeStyles } from '@mui/styles';

// Define styles for the Login component
const useStyles = makeStyles((theme) => ({
  loginButton: {
    margin: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful sign-in here
  };

  const onFailure = (error) => {
    console.error(error);
    // Handle sign-in failure here
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign In with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        className={classes.loginButton} // Apply the custom style to the button
      />
    </div>
  );
};

export default Login;
