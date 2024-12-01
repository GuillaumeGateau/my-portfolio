import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import CSS file

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ["About", "Projects", "Resume", "Contact"];

  return (
    <>
      {/* Top AppBar */}
      <AppBar className="header-appbar">
        <Toolbar className="header-toolbar">
          {/* Logo/Brand */}
          <Button component={Link} to="/" className="header-logo">
            William Keck
          </Button>

          {/* Desktop Navigation */}
          <Box className="header-nav">
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                className="header-nav-item"
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            className="header-menu-icon"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="header-drawer">
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={item}
                  className="header-drawer-item"
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;