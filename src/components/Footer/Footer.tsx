import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa";
import { IconType } from "react-icons";
import "./Footer.css";

interface FooterSocial {
  icon: IconType;
  href: string;
  label: string;
}

const footerSocials: FooterSocial[] = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/lalit-chouhan-438b64228/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Lalit9025",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/laliit_07/",
    label: "Instagram",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__gradient-line" />
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo gradient-text">LC</span>
            <span className="footer__tagline">Associate Software Development Engineer</span>
          </div>

          <div className="footer__socials">
            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="footer__back-to-top"
          >
            <FaArrowUp size={14} />
          </Link>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} Lalit Chouhan. All rights reserved.
          </span>
          <span className="footer__made-with">
            Made with{" "}
            <motion.span
              className="footer__heart"
              animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              ❤️
            </motion.span>{" "}
            and lots of ☕
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
