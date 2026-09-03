import React from "react";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";
import profileImg from "../../assets/profile.jpg";
import "./Hero.css";

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lalit-chouhan-438b64228/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Lalit9025", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/laliit_07/", label: "Instagram" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__greeting" variants={itemVariants}>
            <span className="hero__wave">👋</span> Hey there, I'm
          </motion.span>

          <motion.h1 className="hero__name" variants={itemVariants}>
            <span className="gradient-text">Lalit Chouhan</span>
          </motion.h1>

          <motion.div className="hero__role" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                "Associate Software Development Engineer",
                2000,
                "Associate SDE @ The Souled Store",
                2000,
                "Backend & Distributed Systems",
                2000,
                "IIT Roorkee Alumnus",
                2000,
                "Scalable Cloud Infrastructure",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__typewriter"
            />
          </motion.div>

          <motion.p className="hero__description" variants={itemVariants}>
            Associate Software Development Engineer at <strong>The Souled Store</strong> and <strong>IIT Roorkee</strong> alumnus.
            I design and build resilient backend microservices, asynchronous event pipelines, and high-throughput systems that scale reliably under heavy production load.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a
              href="mailto:lalit3chouhan@gmail.com"
              className="btn-primary"
            >
              <HiOutlineMail size={18} />
              Hire Me
            </a>
            <a
              href="./Lalit_Chouhan_Resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink size={16} />
              View Resume
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hero__social-link"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Photo with Glowing Ring */}
        <motion.div
          className="hero__image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__image-ring">
            <div className="hero__image-ring-inner">
              <img src={profileImg} alt="Lalit Chouhan" className="hero__image" />
            </div>
          </div>
          {/* Floating orbs */}
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="hero__scroll-text">Scroll Down</span>
        <FaArrowDown size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
