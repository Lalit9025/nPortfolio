import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBolt } from "react-icons/fa";
import "./Experience.css";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  isCurrent?: boolean;
  accent: string;
  impactBadge: string;
  pipeline?: string[];
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Associate Software Development Engineer",
    company: "The Souled Store",
    location: "Mumbai / Pune, IN",
    duration: "July 2025 - Present",
    type: "Full-Time",
    isCurrent: true,
    accent: "#8b5cf6",
    impactBadge: "40K+ Peak Sale Orders · 25+ Stores · 180+ SSE Users",
    pipeline: ["Order Ingest", "Amazon SQS", "Celery Worker", "Redis Pub/Sub", "SSE Stream"],
    description:
      "Engineered core backend services powering The Souled Store's retail and digital commerce platforms. Consolidated fragmented order workflows into a unified microservice, deprecating three legacy dependencies. Architected end-to-end fulfillment services for hyperlocal quick delivery across 25+ retail stores. Built an asynchronous event pipeline utilizing Amazon SQS and Celery to process 40,000+ peak sale orders reliably, and implemented Redis pub/sub with Server-Sent Events for real-time in-store dispatch updates.",
    tags: ["Python", "Django", "TypeScript", "JavaScript", "Redis Pub/Sub", "SSE", "Amazon SQS", "Celery", "Microservices", "SQL"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Kipps.AI",
    location: "Remote",
    duration: "February 2025 - March 2025",
    type: "Internship",
    isCurrent: false,
    accent: "#06b6d4",
    impactBadge: "40% Latency Reduction · Real-Time LLM Streaming",
    description:
      "Worked on conversational AI infrastructure and real-time response delivery. Implemented token streaming over Server-Sent Events (SSE) to lower perceived chatbot latency, integrated automated function calling to trigger backend business logic from natural language interactions, and developed real-time telemetry dashboards to monitor engagement trends.",
    tags: ["AI Integration", "Chatbots", "TypeScript", "Function Calling", "SSE Streaming", "Node.js", "React", "Real-time Dashboards"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Madpackers",
    location: "Remote",
    duration: "July 2024 - September 2024",
    type: "Internship",
    isCurrent: false,
    accent: "#ec4899",
    impactBadge: "OAuth 2.0 & JWT Security · 25% PMS Efficiency Gain",
    description:
      "Developed travel forum backend services using TypeScript and Node.js. Implemented OAuth 2.0 and JWT session security with robust access control, and engineered backend integrations with Property Management Systems (PMS) to synchronize real-time room availability and pricing.",
    tags: ["TypeScript", "OAuth 2.0", "JWT", "Node.js", "Redux", "PMS Integration"],
  },
  {
    title: "Android Developer Intern",
    company: "Sustainico Startup",
    location: "Remote",
    duration: "June 2024 - July 2024",
    type: "Internship",
    isCurrent: false,
    accent: "#10b981",
    impactBadge: "30% Water Efficiency Telemetry · Android MVVM",
    description:
      "Developed Android telemetry interfaces in Kotlin using MVVM architecture for smart water-metering hardware, implementing robust device provisioning, IoT communication, and usage analytics.",
    tags: ["Kotlin", "Android", "MVVM", "Water Tracking", "SourceTree"],
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  // Measure timeline container height for precise scroll tracing
  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.scrollHeight);
    }
    const handleResize = () => {
      if (timelineRef.current) {
        setTimelineHeight(timelineRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Aceternity-style Scroll-Linked Tracing Beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const beamHeight = useTransform(smoothProgress, [0, 1], [0, timelineHeight || 1000]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="experience" className="experience section" ref={containerRef}>
      <div className="experience__container">
        {/* Animated Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="exp__pill-badge">
            <span className="exp__pill-dot" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="section-title">Where I've Contributed</h2>
          <p className="section-subtitle">
            A chronological timeline of production engineering, distributed scale, and backend impact.
          </p>
        </motion.div>

        <div className="exp__timeline" ref={timelineRef}>
          {/* Static Track Line */}
          <div className="exp__timeline-track" />

          {/* Dynamic Scroll-Linked Tracing Beam that physically draws with your scroll! */}
          <motion.div
            className="exp__timeline-active-beam"
            style={{ height: beamHeight }}
          >
            <div className="exp__timeline-beam-head" />
          </motion.div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.company}
                className={`exp__item ${isLeft ? "exp__item--left" : "exp__item--right"}`}
              >
                {/* Horizontal Connector Line that expands */}
                <motion.div
                  className="exp__connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformOrigin: isLeft ? "right center" : "left center",
                    background: `linear-gradient(90deg, ${isLeft ? "transparent, " + exp.accent : exp.accent + ", transparent"})`,
                  }}
                />

                {/* 3D Perspective Spring Card with Scroll-Triggered Entrance */}
                <motion.div
                  className="exp__card glass"
                  onMouseMove={handleMouseMove}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -90 : 90,
                    y: 35,
                    rotateY: isLeft ? 14 : -14,
                    scale: 0.92,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotateY: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 18,
                    mass: 0.9,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }}
                >
                  {/* Top Glowing Gradient Accent Bar */}
                  <motion.div
                    className="exp__card-top-bar"
                    style={{ background: `linear-gradient(90deg, ${exp.accent}, #06b6d4, transparent)` }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />

                  {/* Card Header */}
                  <div className="exp__card-header">
                    <div className="exp__card-brand">
                      <motion.div
                        className="exp__card-icon"
                        style={{ color: exp.accent, background: `${exp.accent}18` }}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FaBriefcase size={15} />
                      </motion.div>
                      <div className="exp__card-meta">
                        <span className="exp__card-company">{exp.company}</span>
                        <div className="exp__card-location">
                          <FaMapMarkerAlt size={10} className="exp__loc-pin" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp__card-badges">
                      {exp.isCurrent && (
                        <span className="exp__badge-live">
                          <span className="exp__badge-dot" />
                          Present
                        </span>
                      )}
                      <span className="exp__card-duration">
                        <FaCalendarAlt size={10} className="exp__cal-icon" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="exp__impact-badge" style={{ borderColor: `${exp.accent}35`, background: `${exp.accent}0d` }}>
                    <FaBolt size={10} style={{ color: exp.accent }} />
                    <span style={{ color: exp.accent }}>{exp.impactBadge}</span>
                  </div>

                  <h3 className="exp__card-title">{exp.title}</h3>

                  {/* The Souled Store Microservice Pipeline Flow Visual */}
                  {exp.pipeline && (
                    <div className="exp__pipeline-flow">
                      <div className="exp__pipeline-header">
                        <span className="exp__pipeline-title">EVENT-DRIVEN ARCHITECTURE</span>
                        <span className="exp__pipeline-pulse-tag">LIVE STREAM</span>
                      </div>
                      <div className="exp__pipeline-track">
                        {exp.pipeline.map((step, idx) => (
                          <React.Fragment key={step}>
                            <span className="exp__pipeline-step">{step}</span>
                            {idx < exp.pipeline!.length - 1 && (
                              <span className="exp__pipeline-arrow">➔</span>
                            )}
                          </React.Fragment>
                        ))}
                        <div className="exp__pipeline-packet" />
                      </div>
                    </div>
                  )}

                  <p className="exp__card-description">{exp.description}</p>

                  <div className="exp__card-tags">
                    {exp.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="exp__tag"
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Dot Node that lights up dynamically */}
                <motion.div
                  className={`exp__dot ${exp.isCurrent ? "exp__dot--active" : ""}`}
                  style={{ borderColor: exp.accent }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                  }}
                >
                  {exp.isCurrent && (
                    <div className="exp__dot-pulse" style={{ background: exp.accent }} />
                  )}
                  <div
                    className="exp__dot-inner"
                    style={{ background: exp.accent, boxShadow: `0 0 14px ${exp.accent}` }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
