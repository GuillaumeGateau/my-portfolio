import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import theme from "../styles/theme"; // Import the theme from styles folder

const Home = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap components with the theme */}
      <div>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="hero-container">
          <Hero />
        </div>

        <div>
          <Resume />
        </div>

      </div>
    </ThemeProvider>
  );
};

export default Home;