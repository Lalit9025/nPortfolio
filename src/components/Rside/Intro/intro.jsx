import React, { useState, useEffect } from "react";
import "./intro.css"
import lalitimg from './lalitimage.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Intro =() =>{
    const getIconSize = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth <= 576) {
          // Small devices
          return 16;
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
                <span className="i-1">Hi</span>  
                <span className="i-1">My name is</span>  
                <span className="i-2">Lalit Chouhan</span>  
                <span className="i-1">FullStack Developer</span>
                <div className="intro_btn" >
                        <a className='hireme'href="mailto:lalit3chouhan@gmail.com.com">Hire Me !</a>
                        <a className='hireme'href="https://drive.google.com/file/d/1HxD6tVK18bIPzFwWy1CXFUzKQyfeSKrm/view?usp=sharing">View Resume</a>
                    
                
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