import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaCopy,
  FaCheck,
  FaClock,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const topicSuggestions = [
  "Backend Engineering",
  "Distributed Systems",
  "SDE Opportunity",
  "Technical Consultation",
];


const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lalit3chouhan@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSelectTopic = (topic: string) => {
    setData((prev) => ({ ...prev, subject: topic }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    emailjs
      .send("service_q8cjh0u", "template_2faue4i", data as unknown as Record<string, unknown>, "_Uri4ER9oWnw0qmLl")
      .then(
        () => {
          toast.success("Message sent successfully! 🎉 I'll get back to you shortly.", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
          setData({ name: "", email: "", subject: "", message: "" });
          setSending(false);
        },
        () => {
          toast.error("Failed to send message. Please reach out directly at lalit3chouhan@gmail.com", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          setSending(false);
        }
      );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact__container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact__pill-badge">
            <span className="contact__pill-dot" />
            <span>CONNECT & COLLABORATE</span>
          </div>
          <h2 className="section-title">Let's Build Something High-Scale</h2>
          <p className="section-subtitle">
            Whether you have a role in mind, need backend architecture consultation, or just want to connect.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* =========================================
              LEFT COLUMN: AVAILABILITY & INFO HUB
              ========================================= */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Live Availability Status Card */}
            <div className="contact__status-card glass">
              <div className="contact__status-indicator">
                <span className="contact__status-beacon" />
                <span className="contact__status-text">Available for Opportunities</span>
              </div>
              <p className="contact__status-desc">
                Currently open to <strong>SDE-1 / SDE-2</strong> roles specializing in backend distributed systems, microservices, and high-concurrency event pipelines.
              </p>
              <div className="contact__status-meta">
                <div className="contact__meta-item">
                  <FaClock size={11} className="contact__meta-icon" />
                  <span>Typical response time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="contact__channels">
              {/* Email with copy button */}
              <div className="contact__channel-card glass">
                <div className="contact__channel-icon contact__channel-icon--email">
                  <HiOutlineMail size={20} />
                </div>
                <div className="contact__channel-details">
                  <span className="contact__channel-label">DIRECT EMAIL</span>
                  <a href="mailto:lalit3chouhan@gmail.com" className="contact__channel-value">
                    lalit3chouhan@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact__copy-btn"
                  title="Copy email to clipboard"
                >
                  {copied ? <FaCheck size={13} style={{ color: "#10b981" }} /> : <FaCopy size={13} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact__channel-card glass">
                <div className="contact__channel-icon contact__channel-icon--phone">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="contact__channel-details">
                  <span className="contact__channel-label">PHONE</span>
                  <a href="tel:+919171250851" className="contact__channel-value">
                    +91 9171250851
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact__channel-card glass">
                <div className="contact__channel-icon contact__channel-icon--loc">
                  <HiOutlineLocationMarker size={20} />
                </div>
                <div className="contact__channel-details">
                  <span className="contact__channel-label">CURRENT LOCATION</span>
                  <span className="contact__channel-value">
                    Pune, Maharashtra, India (Open to Relocation / Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Tiles */}
            <div className="contact__social-grid">
              <motion.a
                href="https://www.linkedin.com/in/lalit-chouhan-438b64228/"
                target="_blank"
                rel="noreferrer"
                className="contact__social-tile glass"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <FaLinkedin size={20} style={{ color: "#0a66c2" }} />
                <span>LinkedIn</span>
                <span className="social-arrow">↗</span>
              </motion.a>

              <motion.a
                href="https://github.com/Lalit9025"
                target="_blank"
                rel="noreferrer"
                className="contact__social-tile glass"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <FaGithub size={20} style={{ color: "#ffffff" }} />
                <span>GitHub</span>
                <span className="social-arrow">↗</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/laliit_07/"
                target="_blank"
                rel="noreferrer"
                className="contact__social-tile glass"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <FaInstagram size={20} style={{ color: "#e4405f" }} />
                <span>Instagram</span>
                <span className="social-arrow">↗</span>
              </motion.a>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: GLASS INTERACTIVE FORM
              ========================================= */}
          <motion.form
            className="contact__form glass"
            onSubmit={handleSubmit}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Accent Gradient Bar */}
            <div className="contact__form-accent-bar" />

            <div className="contact__form-header">
              <h3 className="contact__form-title">Send a Message</h3>
              <span className="contact__form-sub">Fill out the fields below or pick a quick topic.</span>
            </div>

            {/* Quick Topic Chips */}
            <div className="contact__topics">
              <span className="contact__topics-label">Quick topics:</span>
              <div className="contact__topics-list">
                {topicSuggestions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`contact__topic-btn ${data.subject === t ? "contact__topic-btn--active" : ""}`}
                    onClick={() => handleSelectTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="contact__form-row">
              <div className="contact__input-group">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={data.name}
                  onChange={handleInputChange}
                  required
                  className="contact__input"
                  placeholder=" "
                />
                <label htmlFor="contact-name" className="contact__label">
                  Your Name
                </label>
              </div>
              <div className="contact__input-group">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={data.email}
                  onChange={handleInputChange}
                  required
                  className="contact__input"
                  placeholder=" "
                />
                <label htmlFor="contact-email" className="contact__label">
                  Your Email
                </label>
              </div>
            </div>

            <div className="contact__input-group">
              <input
                type="text"
                name="subject"
                id="contact-subject"
                value={data.subject}
                onChange={handleInputChange}
                required
                className="contact__input"
                placeholder=" "
              />
              <label htmlFor="contact-subject" className="contact__label">
                Subject
              </label>
            </div>

            <div className="contact__input-group">
              <textarea
                name="message"
                id="contact-message"
                value={data.message}
                onChange={handleInputChange}
                required
                className="contact__input contact__textarea"
                placeholder=" "
                rows={5}
              />
              <label htmlFor="contact-message" className="contact__label">
                Your Message / System Specs
              </label>
            </div>

            <motion.button
              type="submit"
              className="btn btn--primary contact__submit-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="contact__spinner" />
                  <span>Dispatching Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  <span>Transmit Message</span>
                  <span className="submit-arrow">➔</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
