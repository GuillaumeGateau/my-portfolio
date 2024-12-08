import React, { useEffect } from 'react';

// Import Netlify CMS styles if needed (optional for styling)


const Admin = () => {
  useEffect(() => {
    // Dynamically load Netlify CMS script
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    script.async = true;
    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.init();
      }
    };
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Dynamically load the CMS script
    const cmsScript = document.createElement('script');
    cmsScript.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
    cmsScript.async = true;
    document.body.appendChild(cmsScript);

    return () => {
      document.body.removeChild(cmsScript);
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Admin Dashboard</h1>
      <div id="cms-container" />
    </div>
  );
};

export default Admin;