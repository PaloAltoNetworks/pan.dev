import React from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from "clsx";
import "./Featured.scss";

function FeaturedCard({ colorclass, description, label, products }) {
  function ProductContent({ product }) {
    const { apiDocs, docs, label } = product; 
    const allDocs = [...docs, ...apiDocs]

    return (
      <div className="featured-card__product-container">
        <h3 className="featured-card__product-group-label">{label}</h3>
        <ul className="featured-card__product-list">
          {
            allDocs.map(docs => {
              const { label, to, icon } = docs
              const iconClass = icon === "doc" ? "doc-icon" : "api-doc-icon"

              return <li className={`featured-card__product-list-item ${iconClass}`}>
                <NavbarNavLink className="featured-card__product-link" label={label} to={to}/>
              </li>
            })
          }
        </ul>
      </div>
    )
  }

  return (
    <div className={clsx("featured-card-container", colorclass)}>
      <div className="featured-card-content">
        <h2 className="featured-card-content__label">{label}</h2>
        <div className="featured-card-content__section-divider"/>
        <p className="featured-card-content__description">{description}</p>
        <div className="featured-card__products-container">
          {products.map((product, i) => <ProductContent key={i} product={product}/>)}
        </div>
      </div>
    </div>
  );
}

function FeaturedCardIndex() {
  const { siteConfig: { themeConfig } } = useDocusaurusContext();
  const { navbar: { items } } = themeConfig;
  const featuredCards = items[0].items;

  return (
    <div className="featured-container container">
      {featuredCards?.length && (
        <div className="featured-cards-container">
          {featuredCards.map((props, idx) => (
            <FeaturedCard key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedCardIndex;
