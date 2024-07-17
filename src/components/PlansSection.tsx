import React from "react";
import { motion } from "framer-motion";
import "../styles/PlansSection.css";

const PlansSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="plans-section section"
  >
    <h2 className="plans-title" id="plans">
      Plans to suit your needs
    </h2>
    <div className="plans-cards">
      <div className="plan-card">
        <h3 className="plan-type">Basic</h3>
        <p className="plan-price">
          €1.997 <span className="plan-duration">Per month</span>
        </p>
        <ul className="plan-features">
          <li>1 dedicated developer</li>
          <li>Custom workflow automations</li>
          <li>Unlimited requests</li>
          <li>Unlimited revisions</li>
          <li className="unavailable">Business consulting</li>
          <li className="unavailable">Custom chatbots</li>
          <li>Cancel & pause anytime</li>
        </ul>
        <button className="plan-button">Get Started with Basic ➔</button>
      </div>
      <div className="plan-card popular">
        <h3 className="plan-type">Pro</h3>
        <p className="plan-price">
          €3.997 <span className="plan-duration">Per month</span>
        </p>
        <div className="popular-badge">Most Popular</div>
        <ul className="plan-features">
          <li>2 dedicated developers</li>
          <li>Custom workflow automations</li>
          <li>Unlimited requests</li>
          <li>Unlimited revisions</li>
          <li>Business consulting</li>
          <li>Custom chatbots</li>
          <li>Cancel & pause anytime</li>
        </ul>
        <button className="plan-button">Get Started with Pro ➔</button>
      </div>
      <div className="plan-card">
        <h3 className="plan-type">Enterprise</h3>
        <p className="plan-price">
          Custom <span className="plan-duration">Per month</span>
        </p>
        <ul className="plan-features">
          <li>X dedicated developers</li>
          <li>Custom workflow automations</li>
          <li>Unlimited requests</li>
          <li>Unlimited revisions</li>
          <li>Business consulting</li>
          <li>Custom chatbots</li>
          <li>Cancel & pause anytime</li>
        </ul>
        <button className="plan-button">Contact us ➔</button>
      </div>
    </div>
  </motion.div>
);

export default PlansSection;
