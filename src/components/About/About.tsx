import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdSchool } from "react-icons/io";
import { FaBolt, FaLayerGroup, FaBroadcastTower, FaMapMarkerAlt, FaCodeBranch } from "react-icons/fa";
import { SiPython, SiDjango, SiTypescript, SiRedis, SiMysql, SiAmazonsqs } from "react-icons/si";
import "./About.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = "", prefix = "", inView }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const pillars = [
  {
    icon: FaBolt,
    title: "High-Scale Ingestion",
    desc: "Async decoupling with Amazon SQS & Celery for burst flash sales.",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.25)",
  },
  {
    icon: FaBroadcastTower,
    title: "Real-Time Event Streams",
    desc: "Sub-50ms push notifications with SSE over Redis pub/sub.",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: FaLayerGroup,
    title: "Unified Microservices",
    desc: "Decommissioning legacy monoliths into unified, idempotent services.",
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.25)",
  },
];

const techPills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Amazon SQS", icon: SiAmazonsqs, color: "#FF4F8B" },
];

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about__container">
        {/* Animated Header */}
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__pill-badge">
            <span className="about__pill-dot"></span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="about__title">
            Architecting Resilient <span className="gradient-text">Backend Systems</span>
          </h2>
          <p className="about__subtitle">
            Associate Software Development Engineer at The Souled Store and IIT Roorkee alumnus, focused on distributed backends, event-driven data flows, and high-volume transaction infrastructure.
          </p>
        </motion.div>

        {/* Bento Grid with Mouse-Follow Spotlights */}
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Card 1: Core Bio & Impact (Large Card) */}
          <motion.div
            className="bento-card bento-card--bio glass"
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="bento-card__glow bento-card__glow--violet" />
            <div className="bento-card__header">
              <span className="bento-card__tag">PRODUCTION BACKEND</span>
              <div className="bento-card__status">
                <span className="bento-card__status-dot"></span>
                <span>Associate SDE @ The Souled Store</span>
              </div>
            </div>

            <h3 className="bento-bio__headline">
              Turning peak flash sale spikes into resilient, reliable transactions.
            </h3>

            <div className="bento-bio__points">
              <motion.div
                className="bento-point"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bento-point__icon-wrap">
                  <FaCodeBranch size={14} />
                </div>
                <div className="bento-point__text">
                  <strong>Unified Order Microservices:</strong> Merged cart, order creation, and invoicing into one unified service, decommissioning 3 legacy dependencies.
                </div>
              </motion.div>

              <motion.div
                className="bento-point"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bento-point__icon-wrap">
                  <FaBroadcastTower size={14} />
                </div>
                <div className="bento-point__text">
                  <strong>SSE Real-Time Push:</strong> Replaced WebSockets with Server-Sent Events over Redis pub/sub, syncing 180+ concurrent retail users across 60+ locations.
                </div>
              </motion.div>

              <motion.div
                className="bento-point"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bento-point__icon-wrap">
                  <FaBolt size={14} />
                </div>
                <div className="bento-point__text">
                  <strong>Hyperlocal Quick Delivery:</strong> Built end-to-end store fulfillment ops from scratch, now active in 25+ retail stores.
                </div>
              </motion.div>
            </div>

            <div className="bento-bio__footer">
              <div className="bento-bio__location">
                <FaMapMarkerAlt size={13} className="bento-loc-icon" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="bento-bio__stack-pills">
                {techPills.map((t) => (
                  <motion.span
                    key={t.name}
                    className="bento-stack-chip"
                    title={t.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <t.icon size={13} style={{ color: t.color }} />
                    <span>{t.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academic Prestige (IIT Roorkee) */}
          <motion.div
            className="bento-card bento-card--edu glass"
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="bento-card__glow bento-card__glow--cyan" />
            <div className="bento-edu__badge">
              <motion.div
                className="bento-edu__icon-wrap"
                whileHover={{ rotate: 10, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoMdSchool size={28} />
              </motion.div>
              <div>
                <span className="bento-edu__inst">INDIAN INSTITUTE OF TECHNOLOGY</span>
                <h4 className="bento-edu__college">IIT Roorkee</h4>
              </div>
            </div>

            <div className="bento-edu__details">
              <div className="bento-edu__degree-badge">
                <span className="bento-edu__degree">Bachelor of Technology (B.Tech)</span>
                <span className="bento-edu__batch">Class of 2025</span>
              </div>
              <p className="bento-edu__summary">
                Four years of deep foundational engineering at India's premier technological institute.
              </p>
            </div>

            <div className="bento-edu__chips">
              {["Distributed Systems", "Data Structures & Algo", "Database Systems (SQL)", "Object-Oriented Design", "Operating Systems"].map((chip) => (
                <motion.span
                  key={chip}
                  className="bento-course-chip"
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: "spring", stiffness: 350 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Engineering Focus Pillars */}
          <motion.div
            className="bento-card bento-card--pillars glass"
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="bento-pillars__header">
              <span className="bento-card__tag">CORE ARCHITECTURAL PILLARS</span>
            </div>
            <div className="bento-pillars__grid">
              {pillars.map((p) => (
                <motion.div
                  key={p.title}
                  className="bento-pillar-tile"
                  whileHover={{
                    y: -5,
                    boxShadow: `0 10px 25px ${p.glow}`,
                    borderColor: p.color,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="bento-pillar-icon"
                    style={{ color: p.color, background: `${p.color}15` }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <p.icon size={16} />
                  </motion.div>
                  <h5 className="bento-pillar-title">{p.title}</h5>
                  <p className="bento-pillar-desc">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Live Metrics Row with Animated Counting */}
        <motion.div
          className="bento-metrics-row"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="bento-metric-tile glass"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <span className="bento-metric-val gradient-text">
              <AnimatedCounter target={40} suffix="K+" inView={inView} />
            </span>
            <span className="bento-metric-lbl">Peak Orders Handled</span>
            <span className="bento-metric-sub">Flash sale concurrency</span>
          </motion.div>

          <motion.div
            className="bento-metric-tile glass"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <span className="bento-metric-val gradient-text">
              <AnimatedCounter target={25} inView={inView} />
            </span>
            <span className="bento-metric-lbl">Stores Powered</span>
            <span className="bento-metric-sub">Hyperlocal fulfillment live</span>
          </motion.div>

          <motion.div
            className="bento-metric-tile glass"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <span className="bento-metric-val gradient-text">
              <AnimatedCounter target={180} suffix="+" inView={inView} />
            </span>
            <span className="bento-metric-lbl">Concurrent SSE Users</span>
            <span className="bento-metric-sub">Real-time Redis event stream</span>
          </motion.div>

          <motion.div
            className="bento-metric-tile glass"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <span className="bento-metric-val gradient-text">
              IITR '25
            </span>
            <span className="bento-metric-lbl">Premier Engineering</span>
            <span className="bento-metric-sub">B.Tech Class of 2025</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
