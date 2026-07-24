import React, { useState, useEffect } from "react";
import "./intro.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import lalitimg from './final.jpg'
import { motion } from "framer-motion";

const Intro =() =>{
    const getIconSize = () => {
        if (typeof window === "undefined") {
          return 28;
        }

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

    const [iconSize, setIconSize] = useState(28);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize());
    };

    setIconSize(getIconSize());

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
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
                        <motion.a className='hireme'href="https://drive.google.com/file/d/1zghh-BXJKoXL1FquA7GijMaJyTwYp2w_/view?usp=drive_link" variants = {textVariants}>View Resume</motion.a>
                </motion.div>
                <motion.div className="social_icon" variants = {textVariants}>
                  <motion.a href="https://www.linkedin.com/in/lalit-chouhan-438b64228/" variants = {textVariants}><FaLinkedin size={iconSize} color="#ccc"/></motion.a>

                  <motion.a href="https://github.com/Lalit9025" variants = {textVariants}><FaGithub size={iconSize} color="#ccc"/></motion.a>
                  <motion.a href="https://www.instagram.com/laliit_07/" variants = {textVariants}><FaInstagram size={iconSize} color="#ccc"/></motion.a>
                </motion.div>

            </motion.div> 
            <div className="intro_img">
                <img src={lalitimg} className="intro_img_p" alt="Lalit Chouhan" />
                
            </div> 
         </div>       
    )
}

export default Intro;