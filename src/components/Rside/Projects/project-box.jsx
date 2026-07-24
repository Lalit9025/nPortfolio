import "./project-box.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";


export const ProjectBox = (props) => {
  const getIconSize = () => {
    if (typeof window === "undefined") {
      return 16;
    }

    const windowWidth = window.innerWidth;

    if (windowWidth > 550 && windowWidth <= 576) {
      // Small devices
      return 10;
    }
    else if (windowWidth <= 900){
      // Medium devices
      return 12;
    }else {
      // Large devices
      return 16;
    }
  };

  const [iconSize, setIconSize] = useState(16);

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

  return (
    <div 
     className={`pbox-body ${props.classs}`}

    >
        <div className="im"><img className={props.class_img} src={props.img} alt={props.heading} /></div>
        <div className="des_bx">
          <div className="pr-heading">{props.heading}</div>
          <div className="pr-tech">Tech Stack: {props.tech}</div>
          <div className="pbtn">
            <a className="pbtn-prop" href={props.link1} style={{textDecoration:'none'}}><FaLink className="pbtn_p_icon" size={iconSize} /><p className="WG">Live Preview</p></a>
            <a className="pbtn-prop" href={props.link2} style={{ textDecoration: 'none' }}><FaGithub className="pbtn_p_icon" size={iconSize} /><p className="WG">View Code</p>
            </a>
          </div>
        </div>
    </div>
  );
};
