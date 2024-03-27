import React, { useState, useEffect } from "react";
import "./intro.css"
import lalitimg from './lalit.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Intro =() =>{
    const getIconSize = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth <= 576) {
          // Small devices
          return 24;
        } else if (windowWidth <= 992) {
          // Medium devices
          return 20;
        } else {
          // Large devices
          return 28;
        }
      };

    const [iconSize, setIconSize] = useState(getIconSize());

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   
    return(
        <div id ="hm" className="main_intro">
            <div className="intro">
                <span className="i-1">Hey, I'm</span>  
                <span className="i-1"></span>  
                <span className="i-2">Lalit Chouhan</span>  
                <span className="i-1">Full Stack Developer</span>
                <div className="intro_btn" >
                        <a className='hireme'href="mailto:lalit3chouhan@gmail.com.com">Hire Me !</a>
                        <a className='hireme'href="https://drive.google.com/file/d/1fMeEjtvpMx-plnX1k7Oo6Lo2uLZ-Pdvx/view?usp=sharing">View Resume</a>
                </div>
                <div className="social_icon">
                  <a href="https://www.linkedin.com/in/lalit-chouhan-438b64228/"><FaLinkedin size={iconSize} color="#ccc"/></a>
                  <a href="https://github.com/Lalit9025"><FaGithub size={iconSize} color="#ccc"/></a>
                  <a href="https://www.instagram.com/laliit_07/"><FaInstagram size={iconSize} color="#ccc"/></a>
                </div>

            </div> 
            <div className="intro_img">
                <img src={lalitimg} className="intro_img_p"/>
                

            </div> 
         </div>       
    )
}

export default Intro;