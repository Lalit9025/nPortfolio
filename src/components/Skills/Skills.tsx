import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiPython,
  SiDjango,
  SiRedis,
  SiMysql,
  SiKotlin,
  SiOpenai,
  SiAmazonsqs,
  SiCelery,
  SiLinux,
} from "react-icons/si";
import "./Skills.css";

interface SkillItem {
  icon: IconType;
  name: string;
  context: string;
  color: string;
}

interface DomainCategory {
  id: string;
  title: string;
  tag: string;
  icon: IconType;
  accent: string;
  description: string;
  capabilities: string[];
  skills: SkillItem[];
}

const domains: DomainCategory[] = [
  {
    id: "backend",
    title: "Distributed Systems & Backend",
    tag: "PRODUCTION CORE",
    icon: FaServer,
    accent: "#8b5cf6",
    description:
      "Architecting asynchronous microservices, distributed task queues, and low-latency real-time event streaming pipelines.",
    capabilities: [
      "Asynchronous Message Queues",
      "Microservice Decomposition",
      "SSE Real-Time Push (Redis)",
      "Idempotent API Design",
    ],
    skills: [
      { icon: SiPython, name: "Python", context: "Production Core", color: "#3776ab" },
      { icon: SiDjango, name: "Django", context: "Web Microservices", color: "#092e20" },
      { icon: SiTypescript, name: "TypeScript", context: "Typed Backend", color: "#3178c6" },
      { icon: FaNodeJs, name: "Node.js", context: "Event-Driven Runtime", color: "#339933" },
      { icon: SiExpress, name: "Express", context: "RESTful Routing", color: "#ffffff" },
      { icon: SiAmazonsqs, name: "Amazon SQS", context: "Task Decoupling", color: "#ff4f8b" },
      { icon: SiCelery, name: "Celery", context: "Async Workers", color: "#a8e063" },
    ],
  },
  {
    id: "storage",
    title: "Databases & Event Streams",
    tag: "HIGH-THROUGHPUT STORAGE",
    icon: FaDatabase,
    accent: "#06b6d4",
    description:
      "Reliable relational schema modeling, in-memory pub/sub event broadcasting, and distributed object storage.",
    capabilities: [
      "Relational Query Optimization",
      "Pub/Sub Real-Time Fan-Out",
      "In-Memory Cache Invalidation",
      "Distributed Blob Storage",
    ],
    skills: [
      { icon: SiMysql, name: "MySQL / SQL", context: "Relational Indexing", color: "#4479a1" },
      { icon: SiRedis, name: "Redis", context: "Pub/Sub & Caching", color: "#dc382d" },
      { icon: SiMongodb, name: "MongoDB", context: "Document Store", color: "#47a248" },
      { icon: FaAws, name: "AWS S3", context: "Distributed Object Store", color: "#ff9900" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud, Systems & Core Languages",
    tag: "SCALE & PLATFORMS",
    icon: FaCloud,
    accent: "#ec4899",
    description:
      "Cloud platform integration, algorithmic system programming, version control, and containerized deployment workflows.",
    capabilities: [
      "Data Structures & Algorithms",
      "Cloud Infrastructure Routing",
      "Version Control & CI/CD",
      "Linux Server Administration",
    ],
    skills: [
      { icon: FaAws, name: "AWS Cloud", context: "S3, SQS & Compute", color: "#ff9900" },
      { icon: SiCplusplus, name: "C++", context: "Algorithms & OOP", color: "#00599c" },
      { icon: FaGitAlt, name: "Git / GitHub", context: "CI/CD & Collaboration", color: "#f05032" },
      { icon: SiKotlin, name: "Kotlin", context: "Android & Telemetry", color: "#7f52ff" },
      { icon: SiLinux, name: "Linux / CLI", context: "Server Operations", color: "#fcc624" },
    ],
  },
  {
    id: "frontend",
    title: "Full-Stack & Reactive Interfaces",
    tag: "CLIENT & AI INTEGRATION",
    icon: FaCode,
    accent: "#10b981",
    description:
      "Building reactive, state-synchronized interfaces, token-level LLM streaming, and responsive design systems.",
    capabilities: [
      "Reactive State Architecture",
      "LLM Streaming (SSE)",
      "Dynamic Dashboard Telemetry",
      "Design System Tokens",
    ],
    skills: [
      { icon: FaReact, name: "React", context: "Component Hierarchy", color: "#61dafb" },
      { icon: SiRedux, name: "Redux", context: "Global State Store", color: "#764abc" },
      { icon: SiOpenai, name: "AI Integration", context: "Chatbots & LLMs", color: "#10a37f" },
      { icon: SiTailwindcss, name: "Tailwind CSS", context: "Utility Styling", color: "#06b6d4" },
      { icon: FaJsSquare, name: "JavaScript", context: "ES6+ Async/Await", color: "#f7df1e" },
    ],
  },
];

const marqueeTrack1 = [
  { icon: SiPython, name: "Python", color: "#3776ab" },
  { icon: SiDjango, name: "Django", color: "#092e20" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: SiAmazonsqs, name: "Amazon SQS", color: "#ff4f8b" },
  { icon: SiRedis, name: "Redis Pub/Sub", color: "#dc382d" },
  { icon: SiMysql, name: "MySQL / SQL", color: "#4479a1" },
  { icon: SiCelery, name: "Celery Workers", color: "#a8e063" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: FaServer, name: "Microservices", color: "#8b5cf6" },
];

const marqueeTrack2 = [
  { icon: FaAws, name: "AWS Cloud & S3", color: "#ff9900" },
  { icon: FaReact, name: "React", color: "#61dafb" },
  { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
  { icon: SiCplusplus, name: "C++ (DSA)", color: "#00599c" },
  { icon: SiOpenai, name: "AI Streaming & Chatbots", color: "#10a37f" },
  { icon: SiRedux, name: "Redux State", color: "#764abc" },
  { icon: SiKotlin, name: "Kotlin", color: "#7f52ff" },
  { icon: FaGitAlt, name: "Git & CI/CD", color: "#f05032" },
  { icon: SiLinux, name: "Linux Environment", color: "#fcc624" },
];


const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="skills__container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills__pill-badge">
            <span className="skills__pill-dot" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Skills & Architecture Matrix</h2>
          <p className="section-subtitle">
            Core technologies and engineering proficiencies across backend infrastructure, storage, and platform layers.
          </p>
        </motion.div>

        {/* 4 Architecture Domain Panels */}
        <div className="skills__matrix-grid">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              className="domain-card glass"
              initial={{ opacity: 0, y: 60, scale: 0.93, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.18, margin: "0px 0px -50px 0px" }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseMove={handleMouseMove}
              whileHover={{ y: -6, scale: 1.012 }}
            >
              {/* Top Accent Bar */}
              <div
                className="domain-card__accent-bar"
                style={{ background: `linear-gradient(90deg, ${domain.accent}, transparent)` }}
              />

              {/* Header */}
              <div className="domain-card__header">
                <div className="domain-card__brand">
                  <div
                    className="domain-card__icon-wrap"
                    style={{ color: domain.accent, background: `${domain.accent}16` }}
                  >
                    <domain.icon size={18} />
                  </div>
                  <div>
                    <span className="domain-card__tag" style={{ color: domain.accent }}>
                      {domain.tag}
                    </span>
                    <h3 className="domain-card__title">{domain.title}</h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="domain-card__desc">{domain.description}</p>

              {/* Architectural Capabilities */}
              <div className="domain-card__capabilities">
                {domain.capabilities.map((cap) => (
                  <span key={cap} className="domain-cap-pill">
                    <span className="domain-cap-dot" style={{ background: domain.accent }} />
                    {cap}
                  </span>
                ))}
              </div>

              {/* Skills Grid within Domain */}
              <div className="domain-card__skills-list">
                {domain.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="domain-skill-chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 350 }}
                  >
                    <skill.icon size={16} style={{ color: skill.color }} />
                    <div className="domain-skill-info">
                      <span className="domain-skill-name">{skill.name}</span>
                      <span className="domain-skill-context">{skill.context}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual-Direction Kinetic Infinite Marquee */}
        <motion.div
          className="skills__dual-marquee"
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Track 1: Scrolling Left */}
          <div className="marquee-track-wrapper">
            <div className="marquee-track marquee-track--left">
              {[...marqueeTrack1, ...marqueeTrack1, ...marqueeTrack1].map((item, idx) => (
                <div key={idx} className="marquee-chip">
                  <item.icon size={15} style={{ color: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Scrolling Right */}
          <div className="marquee-track-wrapper">
            <div className="marquee-track marquee-track--right">
              {[...marqueeTrack2, ...marqueeTrack2, ...marqueeTrack2].map((item, idx) => (
                <div key={idx} className="marquee-chip">
                  <item.icon size={15} style={{ color: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
