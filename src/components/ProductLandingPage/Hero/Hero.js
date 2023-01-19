import React from "react";
// components
import Link from "@docusaurus/Link";
import Slider from "../../Slider/Slider";
import Card from "../Cards/Card";
// styles
import "./Hero.scss";

function ProductHero({ anchorLink, product, header, subheader, sliderCards }) {
  return (
    <section className={`product-hero-container ${product}`}>
      <div className={`product-hero__inner-content ${product}`}>
        <div className={`product-hero__inner-left ${product}`}>
          <header className="inner-left__header">
            {header}
            {subheader}
          </header>
          <Link to={anchorLink}>
            <button className="button button--primary">Learn More</button>
          </Link>
        </div>
        {sliderCards.length && (
          <div className="product-hero__inner-right">
            <Slider className="product-hero__slider-container">
              {sliderCards.map((card, i) => (
                <Card
                  key={i}
                  cta={card.cta}
                  description={card.description}
                  image={card.image}
                  title={card.title}
                  type="imageCard"
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductHero;
