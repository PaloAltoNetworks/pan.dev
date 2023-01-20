import React from "react";
import Image from "@theme/IdealImage";
import "./HomepageHero.scss";

function HomepageHero() {
  return (
    <div className="hero-container container">
      <header className="hero-content-container">
        <div className="hero-header-container">
          <h1 className="hero-header">
            The home of{" "}
            <span className="hero-colored-text">developer docs </span> at
          </h1>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image__logo"
            img="img/PANW_Parent_Logo_Black.svg"
          />
        </div>
      </header>
      <Image
        className="hero-image__illustration"
        img="img/homepage-hero/hero-1.svg"
      />
    </div>
  );
}

export default HomepageHero;
