import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Queries from "./components/Queries";


export default function App() {
  return (
    <main>
    
      
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Queries />
      <Portfolio />
    </main>
  );
}