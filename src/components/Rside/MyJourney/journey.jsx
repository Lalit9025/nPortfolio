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

                <span className="para-text">In my first college year, curiosity led me to web development. Crafting web pages with HTML and CSS was a rewarding creative outlet. Venturing into JavaScript and advanced frameworks, I embraced React, shaping web development into both a hobby and a career aspiration, fueling my journey of continuous learning.</span>
            </div>  
            
            <div className="jj">
                  <div className="c-heading">
                    <span className="head_text">Education</span>
                  </div>

                  <Education 
                    branchName={"Bachelor in Production and Industrial"}
                    school={"IIT Roorkee"}
                    duration={"Nov 2021 - Present"}
                  />
            </div>

        </div>

    )
}

export default Journey;