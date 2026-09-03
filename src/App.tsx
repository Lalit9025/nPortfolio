import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ParticlesBg from "./components/Hero/ParticlesBg";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga4";

const App: React.FC = () => {
  useEffect(() => {
    const gaId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
      ReactGA.send("pageview");
    }
  }, []);

  return (
    <div className="app">
      <ParticlesBg />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
