import React from "react";
import "./HomepageBanner.scss";

function HomepageBanner({ imgSrc, text }) {
  return (
    <header className="homepage-header text-white">
      <span id="developer-docs-header">{text}</span>
    </header>
  );
}

export default HomepageBanner;
