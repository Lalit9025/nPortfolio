import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaRobot,
  FaShoppingCart,
  FaLink,
  FaUsers,
  FaUtensils,
  FaTerminal,
  FaCheckCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";
import "./Projects.css";

interface ProjectItem {
  id: string;
  icon: IconType;
  heading: string;
  category: "systems" | "ai" | "web";
  categoryLabel: string;
  badge: string;
  description: string;
  visualType: "pipeline" | "prompt" | "shortener" | "ecommerce" | "social" | "filter";
  metrics: { label: string; value: string };
  highlights: string[];
  tech: string[];
  githubLink: string;
  liveLink?: string;
  accent: string;
}

const filterTabs = [
  { id: "all", label: "All Systems" },
  { id: "systems", label: "Cloud & Distributed" },
  { id: "ai", label: "AI & Full-Stack" },
  { id: "web", label: "Web Applications" },
];

const projectData: ProjectItem[] = [
  {
    id: "deploy-engine",
    icon: FaServer,
    heading: "Application Deployment Engine",
    category: "systems",
    categoryLabel: "Distributed Cloud Infrastructure",
    badge: "Microservices",
    description:
      "Automated CI/CD deployment platform inspired by Vercel. Architected as an asynchronous microservice pipeline with decoupled Upload, Worker, and Reverse Proxy routing services.",
    visualType: "pipeline",
    metrics: { label: "Lookup Latency", value: "< 30ms" },
    highlights: ["Decoupled Build Workers", "Redis Task Queues", "AWS S3 Artifact Store", "Subdomain Routing"],
    tech: ["TypeScript", "Node.js", "Express", "AWS S3", "Redis", "React"],
    githubLink: "https://github.com/Lalit9025",
    liveLink: "https://github.com/Lalit9025",
    accent: "#8b5cf6",
  },
  {
    id: "ai-gen",
    icon: FaRobot,
    heading: "AI Image Generator",
    category: "ai",
    categoryLabel: "Generative AI Platform",
    badge: "GenAI Pipeline",
    description:
      "Full-stack generative AI media service integrating OpenAI DALL-E APIs, automated prompt parsing, Cloudinary asset storage, and community prompt showcase indexing.",
    visualType: "prompt",
    metrics: { label: "Inference Stream", value: "DALL-E 3" },
    highlights: ["Prompt Indexing", "OpenAI DALL-E", "Cloudinary CDN", "Async Asset Delivery"],
    tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    githubLink: "https://github.com/Lalit9025/Image-Generator",
    liveLink: "https://image-generator-mu-six.vercel.app/",
    accent: "#06b6d4",
  },
  {
    id: "ecommerce",
    icon: FaShoppingCart,
    heading: "Ecommerce Web Platform",
    category: "ai",
    categoryLabel: "Commerce Architecture",
    badge: "Full-Stack MERN",
    description:
      "Full-stack commerce platform featuring role-based JWT authentication, administrative inventory control, and optimized database query endpoints reducing response latency.",
    visualType: "ecommerce",
    metrics: { label: "Query Optimization", value: "-50% Latency" },
    highlights: ["JWT Session Auth", "Admin Control Panel", "Optimized Query APIs", "State Management"],
    tech: ["MERN Stack", "JWT Auth", "Node.js", "MongoDB", "Bootstrap", "Vercel"],
    githubLink: "https://github.com/Lalit9025/Ecommerce-web-app",
    liveLink: "https://ecommerce-web-app-yarz-lalit9025s-projects.vercel.app/",
    accent: "#ec4899",
  },
  {
    id: "url-shortener",
    icon: FaLink,
    heading: "URL Shortener Service",
    category: "systems",
    categoryLabel: "High-Throughput Web Service",
    badge: "Telemetry Engine",
    description:
      "High-throughput URL redirection service with click telemetry analytics, cryptographic collision-resistant hashing, and clean RESTful API endpoints.",
    visualType: "shortener",
    metrics: { label: "Hash Collision Rate", value: "0.00%" },
    highlights: ["Hash Redirection", "Click Telemetry", "RESTful Routes", "Analytics Logging"],
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Lalit9025/UrlShortner",
    liveLink: "https://url-shortner-fr.vercel.app/",
    accent: "#f59e0b",
  },
  {
    id: "jodi",
    icon: FaUsers,
    heading: "Jodi Web App",
    category: "web",
    categoryLabel: "Interactive Web Application",
    badge: "Responsive UI",
    description:
      "Interactive social discovery web platform featuring modern component architecture, responsive multi-breakpoint design patterns, and clean client-side state handling.",
    visualType: "social",
    metrics: { label: "State Synchronization", value: "Reactive" },
    highlights: ["Dynamic Matching UI", "Responsive Design", "State Architecture", "Modular Components"],
    tech: ["React", "JavaScript", "Bootstrap", "Vercel"],
    githubLink: "https://github.com/Lalit9025/Jodi-web-app",
    liveLink: "https://jodi-web-app-three.vercel.app/",
    accent: "#10b981",
  },
  {
    id: "foody-zone",
    icon: FaUtensils,
    heading: "Foody Zone",
    category: "web",
    categoryLabel: "Frontend Application",
    badge: "Styled Tokens",
    description:
      "Real-time food discovery and filtering application featuring instant multi-category indexing, custom styled-components theme tokens, and dynamic grid rendering.",
    visualType: "filter",
    metrics: { label: "Filter Indexing", value: "Sub-10ms" },
    highlights: ["Instant Query Filtering", "Styled Components", "Firebase Hosting", "Theme Tokens"],
    tech: ["React", "Styled Components", "Firebase", "JavaScript"],
    githubLink: "https://github.com/Lalit9025/Foody-Zone",
    liveLink: "https://foody-zone-4e151.web.app/",
    accent: "#f97316",
  },
];


const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filteredProjects =
    activeTab === "all"
      ? projectData
      : projectData.filter((p) => p.category === activeTab);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="projects__container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="proj__pill-badge">
            <span className="proj__pill-dot" />
            <span>ARCHITECTURE SHOWCASE</span>
          </div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A curated portfolio of distributed cloud infrastructure, microservices, and full-stack software.
          </p>
        </motion.div>

        {/* Interactive Category Filter Pills */}
        <motion.div
          className="proj__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`proj__filter-btn ${isActive ? "proj__filter-btn--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive && (
                  <motion.div
                    className="proj__filter-pill-active"
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="proj__filter-label">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Project Grid with Framer Motion layout */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                className="project-card glass"
                initial={{ opacity: 0, y: 55, scale: 0.93, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.18, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.65,
                  delay: (idx % 3) * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseMove={handleMouseMove}
                whileHover={{ y: -6, scale: 1.015 }}
              >
                {/* Top Subtle Accent Gradient Bar */}
                <div
                  className="project-card__accent-bar"
                  style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                />

                {/* Card Header */}
                <div className="project-card__top">
                  <div
                    className="project-card__icon-wrap"
                    style={{ color: project.accent, background: `${project.accent}18` }}
                  >
                    <project.icon size={18} />
                  </div>

                  <div className="project-card__top-actions">
                    <span
                      className="project-card__badge"
                      style={{ borderColor: `${project.accent}45`, color: project.accent }}
                    >
                      {project.badge}
                    </span>
                    <div className="project-card__quick-links">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="project-icon-btn"
                          title="View Source Code"
                        >
                          <FaGithub size={14} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="project-icon-btn"
                          title="Open Live Preview"
                        >
                          <FaExternalLinkAlt size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="project-card__meta">
                  <span className="project-card__category" style={{ color: project.accent }}>
                    {project.categoryLabel}
                  </span>
                  <h3 className="project-card__title">{project.heading}</h3>
                </div>

                {/* =========================================
                    DYNAMIC ARCHITECTURAL VISUAL WIDGET
                    ========================================= */}
                <div className="project-card__visual-box">
                  {project.visualType === "pipeline" && (
                    <div className="proj-vis proj-vis--pipeline">
                      <div className="proj-vis__flow">
                        <span className="proj-vis__node">Git Clone</span>
                        <span className="proj-vis__arrow">➔</span>
                        <span className="proj-vis__node">AWS S3</span>
                        <span className="proj-vis__arrow">➔</span>
                        <span className="proj-vis__node">Redis Q</span>
                        <span className="proj-vis__arrow">➔</span>
                        <span className="proj-vis__node">Proxy</span>
                        <div className="proj-vis__packet" />
                      </div>
                    </div>
                  )}

                  {project.visualType === "prompt" && (
                    <div className="proj-vis proj-vis--prompt">
                      <div className="proj-vis__prompt-bar">
                        <FaTerminal size={11} className="proj-vis__term-icon" />
                        <span className="proj-vis__prompt-text">prompt: "cyberpunk skyline, 8k..."</span>
                      </div>
                      <span className="proj-vis__status-chip">DALL-E Ingest</span>
                    </div>
                  )}

                  {project.visualType === "shortener" && (
                    <div className="proj-vis proj-vis--shortener">
                      <div className="proj-vis__hash-row">
                        <span className="proj-vis__long-url">https://domain.io/path...</span>
                        <span className="proj-vis__arrow">➔</span>
                        <span className="proj-vis__short-url">/r/7x8Q3a</span>
                      </div>
                      <span className="proj-vis__status-chip">Collision-Free Hash</span>
                    </div>
                  )}

                  {project.visualType === "ecommerce" && (
                    <div className="proj-vis proj-vis--ecommerce">
                      <div className="proj-vis__metric-bar">
                        <FaCheckCircle size={11} style={{ color: "#ec4899" }} />
                        <span>Query Optimization</span>
                        <strong className="proj-vis__val">-50% Latency</strong>
                      </div>
                      <span className="proj-vis__status-chip">JWT Auth Protected</span>
                    </div>
                  )}

                  {project.visualType === "social" && (
                    <div className="proj-vis proj-vis--social">
                      <div className="proj-vis__metric-bar">
                        <FaCheckCircle size={11} style={{ color: "#10b981" }} />
                        <span>Reactive State Engine</span>
                        <strong className="proj-vis__val">Dynamic Sync</strong>
                      </div>
                      <span className="proj-vis__status-chip">Responsive Grid</span>
                    </div>
                  )}

                  {project.visualType === "filter" && (
                    <div className="proj-vis proj-vis--filter">
                      <div className="proj-vis__chips-row">
                        <span className="proj-vis__mini-chip">Fast Filtering</span>
                        <span className="proj-vis__mini-chip">Styled Tokens</span>
                        <span className="proj-vis__mini-chip">Firebase</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Narrative Description */}
                <p className="project-card__description">{project.description}</p>

                {/* Architectural Highlights */}
                <div className="project-card__highlights">
                  {project.highlights.map((item) => (
                    <span key={item} className="project-highlight-tag">
                      <span className="project-highlight-dot" style={{ background: project.accent }} />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="project-card__tags">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div className="project-card__footer">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                    <span className="link-arrow">↗</span>
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-link project-action-link--live"
                      style={{ color: project.accent }}
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Preview</span>
                      <span className="link-arrow">↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
