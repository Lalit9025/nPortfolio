import "./projects.css";
import { ProjectBox } from "./project-box";
import solo from './solo.png'
import eshop from './eshop.png'
import url from './u1.png'
import rolldice from './rolldice.png'
import writingapp from './writing-app.png'
import port from './portfolio.png'
import foodyzone from './foodyzone.png'
const Projects = () => {
return(
    <div id="pr" className="project">
        <div className="c-heading">
                 <span className="head_text">Projects</span>
        </div>
        <span className="head_text2">Things I've built so far</span>
        <div className="project_row">
          
          <div className="project_row_child">
          <ProjectBox 
            img={port} 
            classs={"normal"}
            class_img ={"pimg_nor"}
            heading='Portfolio Website' 
            tech=' HTML, CSS, Javascript, ReactJs'
            link1 ={'https://lalit9025.github.io/nPortfolio/'}
            link2={'https://github.com/Lalit9025/nPortfolio'}
        />
          <ProjectBox 
            img={rolldice} 
            classs={"reverse"}
            class_img ={"pimg_rev"}
            heading='Dice Game' 
            tech=' HTML, CSS, Javascript, ReactJs, Vite, Styled Components'
            link1 ={'https://dice-roll-93bb2.web.app/'}
            link2={'https://github.com/Lalit9025/Roll-Dice'}
        />

        <ProjectBox 
            img={url} 
            classs={"normal"}
            class_img ={"pimg_nor"}
            heading='URL Shortner' 
            tech=' HTML, CSS, Javascript, NodeJs, ExpressJS'
            link1 ={'https://url-shortner-cls3.onrender.com/'}
            link2={'https://github.com/Lalit9025/urlshortner'}
        />
            

            {/* <ProjectBox 
            img={solo} 
            heading='Solo Web' 
            des='Developed a responsive portfolio website with HTML, CSS, JavaScript, and React. Implemented a user-friendly one-page design showcasing my expertise with clear and concise content.'
            tech=' HTML, CSS, Javascript'
            link1 ={'https://solo-web-d274a.web.app/'}
            link2={'https://github.com/Lalit9025/solo-web'}/> */}


        <ProjectBox 
            img={eshop} 
            classs={"reverse"}
            class_img ={"pimg_rev"}
            heading='Ecommerce Website' 
            tech=' HTML, CSS, Javascript, ReactJs, Context-API'
            link1 ={'https://eshop-fb048.web.app/'}
            link2={'https://github.com/Lalit9025/eShop'}
        />
          <ProjectBox 
            img={writingapp} 
            classs={"normal"}
            class_img ={"pimg_nor"}
            heading='Web based writing tool' 
            tech=' HTML, CSS, Javascript, ReactJs, Ant Design'
            link1 ={'https://lalit9025.github.io/Web-Based-Writing-Tool/'}
            link2={'https://github.com/Lalit9025/Web-Based-Writing-Tool'}
        />
        <ProjectBox 
            img={foodyzone} 
            classs={"reverse"}
            class_img ={"pimg_rev"}
            heading='Foody Zone' 
            tech=' HTML, CSS, Javascript, ReactJs, Styled Components'
            link1 ={'https://foody-zone-4e151.web.app/'}
            link2={'https://github.com/Lalit9025/Foody-Zone'}
        />
          </div>
            
        </div> 
    </div>
               
                
          
    
)
}

export default Projects;