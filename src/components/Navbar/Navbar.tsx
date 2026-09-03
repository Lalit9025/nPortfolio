import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

interface NavLinkItem {
  to: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-120%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="navbar__inner">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar__logo"
          onClick={() => setMobileOpen(false)}
        >
          <span className="navbar__logo-text gradient-text">LC</span>
        </Link>

        {/* Desktop Links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navbar__link"
              activeClass="navbar__link--active"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:lalit3chouhan@gmail.com"
          className="navbar__cta btn-primary"
        >
          Let's Talk
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, x: -20 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navbar__mobile-link"
              activeClass="navbar__mobile-link--active"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <a
          href="mailto:lalit3chouhan@gmail.com"
          className="btn-primary"
          style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
        >
          Let's Talk
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
