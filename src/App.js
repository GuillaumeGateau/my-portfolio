import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin"
import PasswordReset from "./pages/PasswordReset";
import React from "react";

const App = () => (
  <Router
    future={{
      v7_relativeSplatPath: true, // Opt-in to future React Router behavior
    }}
  >
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </main>
  </Router>
);

export default App;