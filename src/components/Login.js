// src/components/Login.js

import React from 'react';
import { GitHubLogin } from 'react-google-login'; // Assuming you're using a library that supports GitHub OAuth

const Login = () => {
  const responseGitHub = (response) => {
    console.log(response);
    // Handle successful sign-in with GitHub here
  };

  const onFailure = (error) => {
    console.error(error);
    // Handle sign-in failure here
  };

  return (
    <div>
      <GitHubLogin
        clientId={process.env.REACT_APP_GITHUB_CLIENT_ID} // Use your GitHub OAuth client ID
        buttonText="Sign In with GitHub"
        onSuccess={responseGitHub}
        onFailure={onFailure}
        redirectUri="https://your-redirect-uri" // Optional: specify your redirect URI
        scope="user:email" // Add required scopes here, such as accessing user email
      />
    </div>
  );
};

export default Login;
