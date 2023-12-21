import "./projects.css";
import { ProjectBox } from "./project-box";
import solo from './solo.png'
import eshop from './eshop.png'
import url from './u1.png'
import rolldice from './rolldice.png'


const Projects = () => {
return(
    <div id="pr" className="project">
        <div className="c-heading">
                 <span className="head_text">Projects</span>
        </div>
        <span className="head_text2">Things I've built so far</span>
        <div className="project_row">

        <ProjectBox 
            img={rolldice} 
            heading='Dice Game' 
            des='Developed and deployed a Dice game using the HTML, CSS, Javascript, ReactJs, Vite. It adds the score if selected no. and Dice no. are equal. Reset Button set the score to Zero.'
            tech=' HTML, CSS, Javascript, ReactJs, Vite, Styled Components'
            link1 ={'https://dice-roll-93bb2.web.app/'}
            link2={'https://github.com/Lalit9025/Roll-Dice'}/>

            <ProjectBox 
            img={url} 
            heading='URL Shortner' 
            des='Developed a URL shortener application using the MERN (MongoDB, Express.js, React.js, Node.js) Stack, focusing on creating a robust and efficient system for managing shortened URLs.'
            tech=' HTML, CSS, Javascript, NodeJs, ExpressJS'
            link1 ={'https://url-shortner-cls3.onrender.com/'}
            link2={'https://github.com/Lalit9025/urlshortner'}/>
            

            {/* <ProjectBox 
            img={solo} 
            heading='Solo Web' 
            des='Developed a responsive portfolio website with HTML, CSS, JavaScript, and React. Implemented a user-friendly one-page design showcasing my expertise with clear and concise content.'
            tech=' HTML, CSS, Javascript'
            link1 ={'https://solo-web-d274a.web.app/'}
            link2={'https://github.com/Lalit9025/solo-web'}/> */}


           <ProjectBox 
            img={eshop} 
            heading='Ecommerce Web App' 
            des='Developed and deployed a modern e-commerce site using React. Implemented critical features like eShop Header, Basket functionality,and Firebase authentication'
            tech=' HTML, CSS, Javascript, ReactJs, Context-API'
            link1 ={'https://eshop-fb048.web.app/'}
            link2={'https://github.com/Lalit9025/eShop'}/>
            
        </div> 
    </div>
               
                
          
    
)
}

export default Projects;