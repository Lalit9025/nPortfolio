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

                <span className="para-text">In my college journey, I started with HTML and CSS, enjoying the creativity of web design. As I progressed, I delved into JavaScript and React, merging my passion with career aspirations. Expanding my horizons, I've mastered Node.js, Express, MongoDB, and C++, alongside UI frameworks like Ant Design, Material UI, and Bootstrap. Each new skill fuels my drive for continuous learning, shaping an ever-evolving journey in web development.</span>
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