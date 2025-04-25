import React from "react";
import "./HomepageBanner.scss";

function HomepageBanner({ imgSrc, text }) {
  return (
    <header className="homepage-header">
      <span id="developer-docs-header">{text}</span>
    </header>
  );
}

export default HomepageBanner;
