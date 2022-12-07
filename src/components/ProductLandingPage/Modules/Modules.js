import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './Modules.scss';

function Modules({ header, modules }) {
  const renderModules = () => {
    return Object.keys(modules).map(module => {
      const moduleItem = modules[module];
      return (
        <Tabs className="modules-tabs">
          {moduleItem.map((moduleContent, i) =>
            <TabItem
              key={i}
              className="modules-tabs__item"
              value={moduleContent.tabLabel}
              label={moduleContent.tabLabel}
            >
              {moduleContent.title}
              {moduleContent.description}
              <div className="tab-item__logo-container">
                {moduleContent.footerLogos.map((logoItem, i) => {
                  const containsLink = logoItem.linkSrc?.length ?? false;
                  if (containsLink) {
                    return (
                      <Link key={i} className="logo-link" to={logoItem.logoSrc}>
                        <img
                          className="tab-item__logo"
                          src={logoItem.logoSrc}
                          alt={logoItem.logoAlt}
                        />
                      </Link>
                    )
                  }
                  return (
                    <img
                      className="tab-item__logo"
                      src={logoItem.logoSrc}
                      alt={logoItem.logoAlt}
                    />
                  )
                })}
              </div>
            </TabItem>
          )}
        </Tabs>
      )
    })
  }

  return (
    <div className="modules-container">
      <section className="container">
        <header className="modules-header">
          {header}
        </header>
        {renderModules()}
      </section>
    </div>
  )
}

export default Modules
