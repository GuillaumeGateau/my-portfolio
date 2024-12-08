import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "@mui/material/styles";
import "@mui/material/CssBaseline";
import App from "./App";
import { Buffer } from "buffer"; // Import Buffer
import netlifyIdentity from "netlify-identity-widget"; // Import Netlify Identity Widget

// Initialize global Buffer
window.Buffer = Buffer;

// Initialize Netlify Identity Widget
netlifyIdentity.init();

// Handle password recovery links
if (window.location.hash.includes("recovery_token")) {
  netlifyIdentity.open("login"); // Automatically opens the widget for password reset
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);