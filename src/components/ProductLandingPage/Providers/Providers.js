import React from 'react'
import Card from '../Cards/Card'
import './Providers.scss'

function Providers({ header, subheader, providerCards }) {
  return (
    <div className="providers-container">
      <section className="container">
        <header className="providers-header">
          {header}
          {subheader}
        </header>
        <div className="provider-cards-container">
          {providerCards.map(card =>
            <Card
              cta={card.cta}
              description={card.description}
              title={card.title}
              releaseTagUrl={card.releaseTagUrl}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default Providers