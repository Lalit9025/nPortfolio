import "./projects.css";
import { ProjectBox } from "./project-box";
import rolldice from './rolldice.png';
import writingapp from './writing-app.png';
import port from './portfolio.png';
import foodyzone from './foodyzone.png';
import ecommerce from './ecommerce.png';
import urlshortner from './newurlshortner.png';
import jodi from './jodi-web-app.png';
import imagegen from './imagegen.png'

const projectData = [
  {
    img: imagegen,
    classs: "normal",
    class_img: "pimg_nor",
    heading: 'Image Generator',
    tech: 'React Node.js Express MongoDB',
    link1: 'https://image-generator-mu-six.vercel.app/',
    link2: 'https://github.com/Lalit9025/Image-Generator'
  },
  {
    img: ecommerce,
    classs: "reverse",
    class_img: "pimg_rev",
    heading: 'Ecommerce website',
    tech: 'MERN Stack, Ant Design, Bootstrap',
    link1: 'https://ecommerce-web-app-yarz-lalit9025s-projects.vercel.app/',
    link2: 'https://github.com/Lalit9025/Ecommerce-web-app'
  },
  {
    img: urlshortner,
    classs: "normal",
    class_img: "pimg_nor",
    heading: 'URL Shortner',
    tech: 'MERN Stack, Tailwind CSS',
    link1: 'https://url-shortner-fr.vercel.app/',
    link2: 'https://github.com/Lalit9025/UrlShortner'
  },
  {
    img: port,
    classs: "reverse",
    class_img: "pimg_rev",
    heading: 'Portfolio Website',
    tech: 'HTML, CSS, Javascript, ReactJs',
    link1: 'https://lalit9025.github.io/nPortfolio/',
    link2: 'https://github.com/Lalit9025/nPortfolio'
  },
  {
    img: rolldice,
    classs: "normal",
    class_img: "pimg_nor",
    heading: 'Dice Game',
    tech: 'HTML, CSS, Javascript, ReactJs, Vite, Styled Components',
    link1: 'https://dice-roll-93bb2.web.app/',
    link2: 'https://github.com/Lalit9025/Roll-Dice'
  },
  {
    img: jodi,
    classs: "reverse",
    class_img: "pimg_rev",
    heading: 'Jodi web app',
    tech: 'HTML, CSS, Javascript, React, Bootstrap',
    link1: 'https://jodi-web-app-three.vercel.app/',
    link2: 'https://github.com/Lalit9025/Jodi-web-app'
  },
  {
    img: writingapp,
    classs: "normal",
    class_img: "pimg_nor",
    heading: 'Web based writing tool',
    tech: 'HTML, CSS, Javascript, ReactJs, Ant Design',
    link1: 'https://lalit9025.github.io/Web-Based-Writing-Tool/',
    link2: 'https://github.com/Lalit9025/Web-Based-Writing-Tool'
  },
  {
    img: foodyzone,
    classs: "reverse",
    class_img: "pimg_rev",
    heading: 'Foody Zone',
    tech: 'HTML, CSS, Javascript, ReactJs, Styled Components',
    link1: 'https://foody-zone-4e151.web.app/',
    link2: 'https://github.com/Lalit9025/Foody-Zone'
  }
];

const Projects = () => {
  return (
    <div id="pr" className="project">
      <div className="c-heading">
        <span className="head_text">Projects</span>
      </div>
      <span className="head_text2">Things I've built so far</span>
      <div className="project_row">
        <div className="project_row_child">
          {projectData.map((project, index) => (
            <ProjectBox
              key={index}
              img={project.img}
              classs={project.classs}
              class_img={project.class_img}
              heading={project.heading}
              tech={project.tech}
              link1={project.link1}
              link2={project.link2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
