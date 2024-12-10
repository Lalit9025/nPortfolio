import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Workexp.css';
import '../../top.css'
import { useMediaQuery } from '@mui/material';

const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Madpackers",
      duration: "July 2024 - Present",
      description: `
        Built a travel forum backend using TypeScript to handle active daily users efficiently. 
        Implemented OAuth 2.0, JWT, and Redux for secure sessions, achieving a significant improvement in data security. 
        Integrated a Property Management System (PMS) with the backend, boosting system efficiency by 25%, and led technical 
        meetings that enhanced team collaboration and reduced response times to under 200ms.
      `,
    },
    {
        title: "Android Developer Intern",
        company: "Sustainico Startup",
        duration: "June 2024 - July 2024",
        description: `
          Developed an Android app using Kotlin to manage water tracking systems, resulting in a 30% improvement in water efficiency. 
          Collaborated with the CTO and designers to create a user-friendly interface using MVVM, increasing usability by 35%. 
          Introduced features for managing homes and devices, enhancing user engagement by 50%, and optimized team workflows through 
          version control with SourceTree, improving productivity by 25%.
        `,
      }
  ];
  
  
const Workexp = () => {
    const isMobile = useMediaQuery("(max-width: 1169px)");
  return (
    <div className="experience-section">
      <span className="head_text">Experience</span>
      <div className='timeline_div'>
        <VerticalTimeline>
            {experiences.map((exp, index) => (
            <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(30, 30, 30, 0.7)', color: '#fff', border: '1px solid #333' }}
                contentArrowStyle={{ borderRight: '7px solid #333' }}
                date={exp.duration}
                iconStyle={{ 
                    background: '#8b5cf6',  
                    width: '18px', 
                    height: '18px', 
                    marginLeft: isMobile ? "10px" : "-9px",
                  }}
            >
                <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                <p>{exp.description}</p>
            </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Workexp;

