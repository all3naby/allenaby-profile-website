import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ArrowButton.css";

const ArrowButton: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  const { x } = useSpring({
    x: hovered ? 20 : 0,
  });

  return (
    <animated.div
      className="arrow-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: x.to((x) => `translateX(${x}px)`),
      }}
    >
      →
    </animated.div>
  );
};

export default ArrowButton;
