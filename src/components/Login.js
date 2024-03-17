import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      }).then(() => {
        console.log('Google API client initialized successfully.');
        // Once the client is initialized successfully, call startSignIn
        startSignIn();
      }).catch((error) => {
        console.error('Error initializing Google API client:', error);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful sign-in here
  };

  const onFailure = (error) => {
    console.error(error);
    // Handle sign-in failure here
  };

  const startSignIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance) {
      authInstance.signIn().then(responseGoogle).catch(onFailure);
    } else {
      console.error('Google API client not initialized.');
    }
  };

  return (
    <div>
      <button onClick={startSignIn}>Sign In with Google</button>
    </div>
  );
};

export default Login;
