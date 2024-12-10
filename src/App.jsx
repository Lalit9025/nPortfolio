import "./App.css";
import Navbar from "./components/topbar/navbar"
import Intro from "./components/Rside/Intro/intro";
import Journey from "./components/Rside/MyJourney/journey";
import Projects from "./components/Rside/Projects/projects";
import Skills from "./components/Rside/skills/skills";
import Connect from "./components/Rside/Connect/connect";
import ReactGA from 'react-ga4';
import { useEffect } from "react";
import Workexp from "./components/Rside/Experience/Workexp";


function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    ReactGA.send('pageview');
  }, []);

  return (
    <>     
        <div><Navbar/></div>
        <div className="m-body">
            <div><Intro/></div>
            <div><Journey/></div>
            <div><Workexp/></div>
            <div><Projects/></div>
            <div><Skills/></div>
            <div><Connect/></div>
        </div>
    </>
  );
}

export default App;
