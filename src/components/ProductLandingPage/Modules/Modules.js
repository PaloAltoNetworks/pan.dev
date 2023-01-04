import React from "react";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "./Modules.scss";

function Modules({ header, modules }) {
  const renderModules = () => {
    return Object.keys(modules).map((module, i) => {
      const moduleItem = modules[module];
      return (
        <Tabs key={i} className="modules-tabs">
          {moduleItem.map((moduleContent, i) => (
            <TabItem
              key={i}
              className="modules-tabs__item"
              value={moduleContent.tabLabel}
              label={moduleContent.tabLabel}
            >
              <h3>
                {moduleContent.link ? (
                  <Link className="tabs-item__link" to={moduleContent.link}>
                    {moduleContent.title}
                    {moduleContent.latestTag && (
                      <span className="latest-tag">
                        {moduleContent.latestTag}
                      </span>
                    )}
                  </Link>
                ) : (
                  <>
                    {moduleContent.title}
                    {moduleContent.latestTag && (
                      <span className="latest-tag">
                        {moduleContent.latestTag}
                      </span>
                    )}
                  </>
                )}
              </h3>
              {moduleContent.description}
              <div className="tab-item__footer-container">
                <div className="tab-item__logo-container">
                  {moduleContent.footerLogos.map((logoItem, i) => {
                    const containsLogoLink = logoItem.linkSrc?.length ?? false;
                    if (containsLogoLink) {
                      return (
                        <Link
                          key={i}
                          className="logo-link"
                          to={logoItem.linkSrc}
                        >
                          <img
                            className="tab-item__logo"
                            src={logoItem.logoSrc}
                            alt={logoItem.logoAlt}
                          />
                        </Link>
                      );
                    }
                    return (
                      <img
                        key={i}
                        className="tab-item__logo"
                        src={logoItem.logoSrc}
                        alt={logoItem.logoAlt}
                      />
                    );
                  })}
                </div>
                {moduleContent.link && (
                  <Link to={moduleContent.link} className="tab-item__link">
                    <span>Learn More</span>
                    <img
                      src="/img/icons/arrow-forward.svg"
                      alt="Forward arrow icon"
                    />
                  </Link>
                )}
              </div>
            </TabItem>
          ))}
        </Tabs>
      );
    });
  };

  return (
    <div className="modules-container">
      <section className="container">
        <header className="modules-header">{header}</header>
        {renderModules()}
      </section>
    </div>
  );
}

export default Modules;
