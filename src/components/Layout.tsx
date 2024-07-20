// Layout.tsx
import React from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Layout.css"; // Styles specific to the Layout component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hovered, setHovered] = React.useState({
    about: false,
    services: false,
    plans: false,
    contact: false,
  });

  const springProps = (hoverKey: "about" | "services" | "plans" | "contact") =>
    useSpring({
      transform: hovered[hoverKey] ? "translateX(10px)" : "translateX(0px)",
    });

  return (
    <div>
      <header className="header">
        <h1 className="logo">Allen Aby</h1>
        <nav className="nav">
          <ul className="nav-list">
            {["about", "services", "plans", "contact"].map((item) => (
              <animated.div
                key={item}
                className="nav-link"
                onMouseEnter={() =>
                  setHovered((prev) => ({ ...prev, [item]: true }))
                }
                onMouseLeave={() =>
                  setHovered((prev) => ({ ...prev, [item]: false }))
                }
                style={springProps(
                  item as "about" | "services" | "plans" | "contact"
                )}
              >
                <li className="nav-item">
                  <Link to={item} smooth={true} duration={500}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              </animated.div>
            ))}
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
