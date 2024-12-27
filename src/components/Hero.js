import React, { useState, useEffect } from "react";
import { Box, Typography} from "@mui/material";
import heroBg from "../assets/hero-bg.jpeg";
import "../styles/Hero.css";

const Hero = () => {
  const fullText = "Hi, I'm William";
  const [displayText, setDisplayText] = useState(""); // Typing effect state
  const [pillars, setPillars] = useState([]); // Product, AI, Design
  const [typingComplete, setTypingComplete] = useState(false); // Track if typing is complete

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        setTimeout(() => setPillars(["Product", "AI", "Design"]), 300);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);

  // const handleScrollToResume = (e) => {
  //   e.preventDefault(); // Prevent default behavior
  //   const resumeSection = document.getElementById("resume");
  //   if (resumeSection) {
  //     const headerHeight =
  //       document.querySelector(".header-appbar")?.offsetHeight || 64; // Header height
  //     const offsetTop =
  //       resumeSection.getBoundingClientRect().top +
  //       window.pageYOffset -
  //       headerHeight -
  //       10; // Add a little padding offset
  //     window.scrollTo({
  //       top: offsetTop,
  //       behavior: "smooth", // Ensure smooth scrolling
  //     });
  //   }
  // };

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
           {/* <Button
              variant="contained"
              className="hero-button"
              onClick={handleScrollToResume}
            >
              Explore My Work
           </Button>  */}
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