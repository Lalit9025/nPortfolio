"use client";

import "./App.css";
import Navbar from "./components/topbar/navbar"
import Intro from "./components/Rside/Intro/intro";
import Journey from "./components/Rside/MyJourney/journey";
import Projects from "./components/Rside/Projects/projects";
import Skills from "./components/Rside/skills/skills";
import Connect from "./components/Rside/Connect/connect";
import ReactGA from 'react-ga4';
import { useEffect, useState } from "react";
import Workexp from "./components/Rside/Experience/Workexp";
import Footer from "./components/Rside/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send('pageview');
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>     
        <div><Navbar theme={theme} onToggleTheme={() => setTheme((prev) => prev === "dark" ? "light" : "dark")} /></div>
        <div className="m-body">
            <div className="section-panel"><Intro/></div>
            <div className="section-panel"><Journey/></div>
            <div className="section-panel"><Workexp/></div>
            <div className="section-panel"><Projects/></div>
            <div className="section-panel"><Skills/></div>
            <div className="section-panel"><Connect/></div>
            <div className="section-panel"><Footer/></div>
        </div>
    </>
  );
}

export default App;
