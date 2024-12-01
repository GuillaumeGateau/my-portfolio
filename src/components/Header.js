import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = document.querySelector(".hero-button").offsetTop + 100;

      if (scrollPosition > triggerHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
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
      <Toolbar>
        <Typography variant="h6" className="header-logo">
          William Keck
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;