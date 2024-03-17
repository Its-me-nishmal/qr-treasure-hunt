// src/components/Login.js

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

// Define styled components for the Login component
const LoginButton = styled('div')({
  margin: theme => theme.spacing(2),
});

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful sign-in here
  };

  const onFailure = (error) => {
    console.error(error);
    // Handle sign-in failure here
  };

  return (
    <LoginButton>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign In with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </LoginButton>
  );
};

export default Login;
