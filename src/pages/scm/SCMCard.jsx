import React from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";

function SCMCard({ label, description, docs, colorclass }) {
  function SCMCardContent({ docs }) {
    return (
      <div className="scm-card-container">
        <ul className="scm-content-list">
          {docs.map((docs, i) => {
            const { label, to, icon } = docs;
            const iconClass = icon === "doc" ? "doc-icon" : "api-doc-icon";

            return (
              <li
                className={`featured-card__product-list-item ${iconClass}`}
                key={i}
              >
                <NavbarNavLink
                  className="featured-card__product-link"
                  label={label}
                  to={to}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className={clsx("featured-card-container", colorclass)}>
      <div className="featured-card-content">
        <h2 className="featured-card-content__label">{label}</h2>
        <div className="featured-card-content__section-divider" />
        <p className="featured-card-content__description">{description}</p>
        <SCMCardContent docs={docs} />
      </div>
    </div>
  );
}

export default SCMCard;
