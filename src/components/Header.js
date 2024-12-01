import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import CSS file

const Header = () => {
  return (
    <>
      {/* Top AppBar */}
      <AppBar className="header-appbar" sx={{ backgroundColor: "black", opacity: 1 }}>
        <Toolbar className="header-toolbar">
          {/* Logo/Brand */}
          <Button component={Link} to="/" className="header-logo">
            William Keck
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;