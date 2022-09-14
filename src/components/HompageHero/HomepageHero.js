import React from "react";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import './HomepageHero.scss'

function HomepageHero() {
  return (
    <div className="hero-container">
      <header className="hero-content-container">
        <div className="container hero-header-container">
          <h1 className="hero-header">
            The home of <span className="hero-colored-text">developer docs </span> at..
          </h1>
        </div>
        <div className="container hero-image-container">
          <img className="hero-image" src="img/PANW_Parent_Logo_Black.svg"/>
        </div>
      </header>
    </div>
  )
}

export default HomepageHero