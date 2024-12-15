import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import theme from "../styles/theme";
import Articles from "../components/Articles";


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Articles /> 
      <Resume />
    </ThemeProvider>
  );
};

export default Home;