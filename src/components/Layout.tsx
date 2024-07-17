import React from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";

import "./Layout.css"; // Styles specific to the Layout component

const Layout: React.FC = ({ children }) => {
  const [hoveredAbout, setHoveredAbout] = React.useState(false);
  const [hoveredServices, setHoveredServices] = React.useState(false);
  const [hoveredPlans, setHoveredPlans] = React.useState(false);
  const [hoveredContact, setHoveredContact] = React.useState(false);
  const { x } = useSpring({
    x: hoveredAbout ? 10 : 0,
  });
  const { y } = useSpring({
    y: hoveredServices ? 10 : 0,
  });
  const { z } = useSpring({
    z: hoveredPlans ? 10 : 0,
  });
  const { w } = useSpring({
    w: hoveredContact ? 10 : 0,
  });

  return (
    <div>
      <header className="header">
        <h1 className="logo">Allen Aby</h1>
        <nav className="nav">
          <ul className="nav-list">
            <animated.div
              className="nav-link"
              onMouseEnter={() => setHoveredAbout(true)}
              onMouseLeave={() => setHoveredAbout(false)}
              style={{
                transform: x.to((x) => `translateX(${x}px)`),
              }}
            >
              <li className="nav-item">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
            </animated.div>
            <animated.div
              className="nav-link"
              onMouseEnter={() => setHoveredServices(true)}
              onMouseLeave={() => setHoveredServices(false)}
              style={{
                transform: y.to((y) => `translateX(${y}px)`),
              }}
            >
              <li className="nav-item">
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
            </animated.div>
            <animated.div
              className="nav-link"
              onMouseEnter={() => setHoveredPlans(true)}
              onMouseLeave={() => setHoveredPlans(false)}
              style={{
                transform: z.to((z) => `translateX(${z}px)`),
              }}
            >
              <li className="nav-item">
                <Link to="plans" smooth={true} duration={500}>
                  Plans
                </Link>
              </li>
            </animated.div>
            <animated.div
              className="nav-link"
              onMouseEnter={() => setHoveredContact(true)}
              onMouseLeave={() => setHoveredContact(false)}
              style={{
                transform: w.to((w) => `translateX(${w}px)`),
              }}
            >
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </animated.div>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>© 2024 Allen Aby</p>
      </footer>
    </div>
  );
};

export default Layout;
