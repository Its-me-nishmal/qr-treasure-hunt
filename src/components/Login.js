import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
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
    gapi.auth2.getAuthInstance().signIn();
  };

  return (
    <div>
      <button onClick={startSignIn}>Sign In with Google</button>
    </div>
  );
};

export default Login;
