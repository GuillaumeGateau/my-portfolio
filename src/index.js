import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "@mui/material/styles";
import "@mui/material/CssBaseline"
import App from "./App";
import { Buffer } from 'buffer'; // Import Buffer
window.Buffer = Buffer; // Assign Buffer globally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);