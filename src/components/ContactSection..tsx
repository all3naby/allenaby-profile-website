import React from "react";
import { motion } from "framer-motion";
import "../styles/ContactSection.css";

const ContactSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="contact-section section"
  >
    <h2 className="contact-title" id="contact">
      Get in touch
    </h2>
    <div className="contact-content">
      <div className="contact-info">
        <h3 className="info-title">Email</h3>
        <p className="info-item">
          <a href="mailto:mail@nebula.com" className="contact-link">
            mail@nebula.com <span className="arrow">➔</span>
          </a>
        </p>
        <h3 className="info-title">Phone</h3>
        <p className="info-item">
          <a href="tel:+31203439223" className="contact-link">
            +31 (0) 20 343 9223 <span className="arrow">➔</span>
          </a>
        </p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+31 (0) 20 343 9223"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  </motion.div>
);

export default ContactSection;
