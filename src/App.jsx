import React from "react";
import "./assets/css/index.css";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}