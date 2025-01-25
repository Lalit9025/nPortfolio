import React, {useEffect, useState} from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import logo from './LALIT (1).png'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [hidden, setHidden] = useState(false);
  const closeMenu =() => setClick(false)

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })



    return (
      <motion.div 
        className="main-nav"
        variants={{
          visible:{ y: 0},
          hidden: { y: "-100%" },
        }}
        animate ={hidden ? "hidden" : "visible"}
        transition={{duration: 0.35, ease: "easeInOut"}}
      >
            
              <img src={logo} className="nav_logo_p"/> 
          
            <div className="navbar">        
              <Link to="hm" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">Home</Link>

              <Link to="ab" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">About</Link>

              <Link to="pr" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Projects</Link>


              <Link to="sk" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Skills</Link>

              <Link to="cn" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Contact</Link>
     
            </div>
      </motion.div>
    )
}

export default Navbar;