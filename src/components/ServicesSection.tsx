import React from "react";
import { motion } from "framer-motion";
import "../styles/ServicesSection.css";

const ServicesSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="service-section section"
  >
    <h2 className="service-title" id="services">
      Services Offered
    </h2>
    <div className="service-cards">
      <div className="service-card">
        <h3 className="card-title">Card Title 1</h3>
        <p className="card-content">
          This is some detail service the specific feature or service offered.
        </p>
      </div>
      <div className="service-card">
        <h3 className="card-title">Card Title 2</h3>
        <p className="card-content">
          This is some detail service the specific feature or service offered.
        </p>
      </div>
      <div className="service-card">
        <h3 className="card-title">Card Title 3</h3>
        <p className="card-content">
          This is some detail service the specific feature or service offered.
        </p>
      </div>
    </div>
  </motion.div>
);

export default ServicesSection;
