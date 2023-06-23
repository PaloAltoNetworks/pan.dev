import React from "react";
import Link from "@docusaurus/Link";
import "./styles.scss";

function CloudCard({ title, subtitle, text, link }) {
  const cloudId = title.toLowerCase().replace(" ", "-");
  return (
    <div className="cloud-card">
      <div className="cloud-card__inner-header">
        <div className="cloud-card__inner-header-logo">
          <img src={`/product-logos/${cloudId}-logo.png`} alt={cloudId} />
        </div>
        <div className="cloud-card__inner-header-title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="cloud-card__inner-context">
        <p>{text}</p>
      </div>
      <div className="cloud-card__inner-footer">
        <Link to={link} className="tab-item__link">
          <span>Learn More</span>
          <img src="/img/icons/arrow-forward.svg" alt="Forward arrow icon" />
        </Link>
      </div>
    </div>
  );
}

export default CloudCard;
