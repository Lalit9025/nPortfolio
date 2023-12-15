import React, {useState} from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import logo from './LALIT (1).png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu =() => setClick(false)
    return (
      <div className="main-nav">
            
              <img src={logo} className="nav_logo_p"/> 
          
            <div className="navbar">        
              <Link to="hm" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">Home</Link>

              <Link to="ab" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">About</Link>

              <Link to="pr" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Projects</Link>


              <Link to="sk" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Skills</Link>

              <Link to="cn" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu} className="desktopMenuListItem">Contact</Link>
     
            </div>
      </div>
    )
}

export default Navbar;