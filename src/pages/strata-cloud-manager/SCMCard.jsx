import React from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";

function SCMCard({ label, description, docs, colorclass, type }) {
  function SCMCardContent({ docs }) {
    const renderCardContent = () => {
      if (type && type === "hierarchy") {
        return Object.entries(docs).map(([category, docs]) => {
          return (
            <div>
              <h3 className="featured-card__product-group-label scm">
                {category}
              </h3>
              {docs.map((doc, i) => {
                const { label, to, icon } = doc;
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
            </div>
          );
        });
      } else {
        return docs.map((doc, i) => {
          const { label, to, icon } = doc;
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
        });
      }
    };

    return (
      <div className="scm-card-container">
        <ul
          className={clsx("scm-content-list", {
            hierarchy: type === "hierarchy",
          })}
        >
          {docs && renderCardContent()}
        </ul>
      </div>
    );
  }

  return (
    <div className={clsx("featured-card-container scm-landing", colorclass)}>
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
