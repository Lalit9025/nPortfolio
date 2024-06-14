import React, { useState, useEffect } from "react";
import "./intro.css"
// import lalitimg from './lalit.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import lalitimg from './WhatsApp Image 2024-03-06 at 15.01.25_7d5ec812.jpg'
import { Opacity, Repeat } from "@mui/icons-material";
import { animate } from "framer-motion";
import {motion} from "framer-motion"
import { duration } from "@mui/material";

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

  const textVariants = {
    initial:{
      x: -500,
      opacity:0,
    },
    animate: {
      x:0,
      opacity:1,
      transition:{
        duration: 1,
        staggerChildren: 0.1
      },
    },
    scrollButton: {
      opacity:0,
      y: 10,
      transition:{
        duration:2,
        repeat: Infinity
      }
    }
  }
  
  

   
    return(
        <div id ="hm" className="main_intro">
            <motion.div className="intro" variants = {textVariants} initial="initial" animate="animate">
                <motion.span  className="i-1" variants = {textVariants}>Hey, I'm</motion.span>  
                <motion.span className="i-1" variants = {textVariants}></motion.span>  
                <motion.span className="i-2" variants = {textVariants}>Lalit Chouhan</motion.span>  
                <motion.span className="i-1" variants = {textVariants}>Full Stack Developer</motion.span>
                <motion.div className="intro_btn" variants = {textVariants} >
                        <motion.a className='hireme'href="mailto:lalit3chouhan@gmail.com.com" variants = {textVariants}>Hire Me !</motion.a>
                        <motion.a className='hireme'href="https://drive.google.com/file/d/1fMeEjtvpMx-plnX1k7Oo6Lo2uLZ-Pdvx/view?usp=sharing" variants = {textVariants}>View Resume</motion.a>
                </motion.div>
                <motion.div className="social_icon" variants = {textVariants}>
                  <motion.a href="https://www.linkedin.com/in/lalit-chouhan-438b64228/" variants = {textVariants}><FaLinkedin size={iconSize} color="#ccc"/></motion.a>

                  <motion.a href="https://github.com/Lalit9025" variants = {textVariants}><FaGithub size={iconSize} color="#ccc"/></motion.a>
                  <motion.a href="https://www.instagram.com/laliit_07/" variants = {textVariants}><FaInstagram size={iconSize} color="#ccc"/></motion.a>
                </motion.div>

            </motion.div> 
            <div className="intro_img">
                <img src={lalitimg} className="intro_img_p"/>
                

            </div> 
         </div>       
    )
}

export default Intro;