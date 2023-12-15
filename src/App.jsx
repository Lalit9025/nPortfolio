import "./App.css";
import Navbar from "./components/topbar/navbar"
import Intro from "./components/Rside/Intro/intro";
import Journey from "./components/Rside/MyJourney/journey";
import Projects from "./components/Rside/Projects/projects";
import Skills from "./components/Rside/skills/skills";
import Connect from "./components/Rside/Connect/connect";
function App() {
  return (
    <>

        
           <div><Navbar/></div>

           <div className="m-body">
           
            <div><Intro/></div>
            <div><Journey/></div>
            <div><Projects/></div>
            <div><Skills/></div>
            <div><Connect/></div>
           </div>
        
          
    
    </>
  );
}

export default App;
