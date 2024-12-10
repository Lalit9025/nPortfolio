import {GiJourney} from "react-icons/gi";
import "./journey.css";
import "../../top.css"
import Education from "./Education";
const Journey =()=>{
    return(
        <div id ="ab"className="journey">
           <div className="jj">
                <div className="c-heading">
                  <span className="head_text">About Me</span>
                </div>

                <span className="para-text">I’m Lalit Chouhan, a Full Stack Developer with experience in building scalable web and mobile applications. Currently pursuing B.Tech at IIT Roorkee, I’ve worked on impactful projects like an Android app for water efficiency at Sustainico and a travel forum backend at Madpackers. Skilled in TypeScript, React, Node.js, and AWS, I specialize in crafting secure, efficient, and user-friendly solutions. 
                <br/>Let’s build something incredible together! 🚀</span>
            </div>  
            
            <div className="jj">
                  <div className="c-heading">
                    <span className="head_text">Education</span>
                  </div>

                  <Education 
                    branchName={"B.Tech in Production and Industrial"}
                    school={"IIT Roorkee"}
                    duration={"Nov 2021 - Present"}
                  />
            </div>

        </div>

    )
}

export default Journey;