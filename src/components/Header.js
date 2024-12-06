import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const buttonPosition =
        document.querySelector(".hero-button")?.offsetTop || 0;

      const heroBottom =
        document.querySelector(".hero-container")?.offsetHeight || 0;

      if (scrollPosition > heroBottom) {
        setShowHeader(true); // Show header after hero section
      } else if (scrollPosition > buttonPosition) {
        setShowHeader(true); // Show header after scrolling past the button
      } else {
        setShowHeader(false); // Hide header when above the button
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={`header-appbar ${showHeader ? "visible" : "hidden"}`}
    >
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-logo">
          William Keck
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;