import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutSections.css";

const AboutSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="about-section section"
  >
    <h2 className="about-title" id="about">
      About Me
    </h2>
    <div className="about-cards">
      <div className="about-card">
        <h3 className="card-title">Card Title 1</h3>
        <p className="card-content">
          This is some detail about the specific feature or service offered.
        </p>
      </div>
      <div className="about-card">
        <h3 className="card-title">Card Title 2</h3>
        <p className="card-content">
          This is some detail about the specific feature or service offered.
        </p>
      </div>
      <div className="about-card">
        <h3 className="card-title">Card Title 3</h3>
        <p className="card-content">
          This is some detail about the specific feature or service offered.
        </p>
      </div>
    </div>
  </motion.div>
);

export default AboutSection;
