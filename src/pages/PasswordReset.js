import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const PasswordReset = () => {
  useEffect(() => {
    // Check for recovery token in the URL
    if (window.location.hash.includes('recovery_token')) {
      netlifyIdentity.open('login'); // Opens the Netlify Identity Widget to handle password reset
    } else {
      console.error("No recovery token found in URL");
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Password Reset</h1>
      <p>
        If nothing happens, click{" "}
        <button
            onClick={() => netlifyIdentity.open("login")}
            style={{
            background: "none",
            color: "blue",
            border: "none",
            padding: 0,
            textDecoration: "underline",
            cursor: "pointer",
            }}
        >
            here
        </button>{" "}
        to reset your password.
     </p>
    </div>
  );
};

export default PasswordReset;