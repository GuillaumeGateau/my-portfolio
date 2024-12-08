import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const PasswordReset = () => {
  useEffect(() => {
    if (window.location.hash.includes('recovery_token')) {
      netlifyIdentity.open('login'); // Open the widget to handle password reset
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Password Reset</h1>
      <p>If nothing happens, please try the recovery link again.</p>
    </div>
  );
};

export default PasswordReset;