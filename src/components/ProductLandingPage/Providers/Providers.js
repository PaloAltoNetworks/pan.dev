import React from 'react'
import Card from '../Cards/Card'
import './Providers.scss'

function Providers({ header, subheader, providerCards }) {
  return (
    <div id="providers-container" className="providers-container">
      <section className="container">
        <header className="providers-header">
          {header}
          {subheader}
        </header>
        <div className="provider-cards-container">
          {providerCards.map((card, i) =>
            <Card
              key={i}
              cta={card.cta}
              description={card.description}
              title={card.title}
              latestTag={card.latestTag}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default Providers