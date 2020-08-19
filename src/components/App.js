import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "../GlobalTheme";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const THEME = {
  colors: {
    melon: "hsla(14, 51%, 75%, 1)",
    paper: "#e7dea9",
    tan: "hsla(38, 47%, 75%, 1)",
    grey: "#ccc",
    darkGrey: "#3e4c59",
    white: "#fff",
  },
  fonts: {
    bold: "'Montserrat', sans-serif",
  },
};

export default function App() {
  return (
    <div>
      <GlobalTheme />
      <ThemeProvider theme={THEME}>
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
