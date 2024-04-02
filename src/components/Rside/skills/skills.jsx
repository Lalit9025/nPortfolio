import "./skills.css";
import {GiSkills} from "react-icons/gi"
import { SkillBox } from "./skillbox";
import {FaHtml5,FaCss3Alt,FaReact, FaGithub,FaNodeJs} from "react-icons/fa"
import {DiJavascript,DiJqueryLogo} from "react-icons/di"
import {TbBrandVscode} from "react-icons/tb";
import {BiLogoGit, BiLogoMongodb} from "react-icons/bi";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { colors, fabClasses } from "@mui/material";
import { pink } from "@mui/material/colors";
import html from './html.png'
import css from './css.png'
import js from './js.png'
import rect from './react.png'
import c from './c++.png'
import vs from './vs.png'
import node from './icons8-nodejs-240.png'
import express from './icons8-express-js-250.png'
import mongodb from './icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png'

const Skills =()=>{
    return (
      <div id = "sk"className="skills">
              <div className="c-heading">
                  <span className="head_text">My Tech Stack</span>
                  <span className="head_text2">Technologies I've been working recently</span>
              </div>


            <div className="w-dev">
                  <div className="icons-arr">
                   <SkillBox className="icon-pr" icon={html} name ={"HTML"} />
                   <SkillBox className="icon-pr" icon={css}  name ={"CSS"}/>
                   <SkillBox className="icon-pr" icon={js} name ={"Javascript"}/>
                   <SkillBox className="icon-pr" icon={rect} name ={"ReactJs"}/>
                   <SkillBox className="icon-pr" icon={node} name ={"NodeJs"}/>
                   <SkillBox className="icon-pr" icon={express} name ={"ExpressJs"}/>
                   <SkillBox className="icon-pr" icon={mongodb} name ={"MongoDB"}/>
                   <SkillBox className="icon-pr" icon={c} name ={"C++"}/>
                   <SkillBox className="icon-pr" icon={vs} name ={"Vs Code"}/>
                   </div>
            </div>
        </div>
            
          
    
    )
}

export default Skills;
