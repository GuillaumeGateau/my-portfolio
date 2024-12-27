import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import theme from "../styles/theme";
import Articles from "../components/Articles";
import ContactSection from "../components/ContactSection";


const Home = () => {
  return (
    <ThemeProvider theme={theme}>

      <Hero />
      <Articles /> 
      <Resume />
      <ContactSection />
    </ThemeProvider>
  );
};

export default Home;