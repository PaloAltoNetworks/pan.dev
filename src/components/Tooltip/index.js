import React from "react";
import "./styles.css";

const Tooltip = ({ children, text, isVisible, tabIndex }) => {
  return (
    <div className="tooltip-container" tabindex={tabIndex}>
      {children}
      <span
        className={`tooltip-text ${isVisible ? "non-floating-island" : ""}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
