import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Custom background for AppBar
          color: "white", // Custom text color for AppBar
          boxShadow: "none", // Remove box shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Button styles for "hero-button" and "header-nav-item"
          '&.header-logo, &.header-nav-item': {
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '0.75rem 2rem',
            borderRadius: '5px',
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
            },
          },
          // Specific styles for the "hero-button" class (used in Hero section)
          '&.hero-button': {
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '5px',

            fontWeight: 'bold',
            marginTop: '2rem',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
              border: '1px solid white',
            }
          },
        }
      }
    },
  },
});

export default theme;