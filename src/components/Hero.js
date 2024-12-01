import { Box, Typography, Button } from "@mui/material";
import heroBg from "../assets/hero-bg.jpeg";
import "../styles/Hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "Hi, I'm William";
  const [displayText, setDisplayText] = useState(""); // Typing effect state
  const [pillars, setPillars] = useState([]); // Technology, Data, Design
  const [typingComplete, setTypingComplete] = useState(false); // State to track if typing is complete

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; // Faster typing speed in ms
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true); // Set typing completion to true
        setTimeout(() => {
          setPillars(["Product", "AI", "Design"]);
        }, 300); // Adjust delay for pillars fade-in if needed
      }
    }, typingSpeed); // Reduced interval for faster typing
    return () => clearInterval(typingInterval); // Cleanup
  }, []);

  return (
    <Box className="hero-container">
      <Box className="hero-image-wrapper">
        <img src={heroBg} alt="Hero Background" className="hero-image" />
        <Box className="hero-gradient-overlay" />
      </Box>
      <Box className="hero-content">
        <Typography variant="h1" className="hero-title">
          {displayText}
        </Typography>
        {typingComplete && (
          <>
            <Button variant="contained" className="hero-button" href="#resume">
              Explore My Work
            </Button>
            {pillars.length > 0 && (
              <Box className="pillar-container">
                <Typography variant="h3" className="pillar-subtitle">
                  Innovating at the intersection of
                </Typography>
                {pillars.map((pillar, index) => (
                  <Typography
                    key={pillar}
                    variant="h4"
                    className={`pillar-text pillar-fade-in-${index}`}
                  >
                    {pillar}
                  </Typography>
                ))}
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Hero;