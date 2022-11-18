import React from 'react'
import Card from '../Cards/Card'
import './UseCases.scss'

function UseCases({ header, subheader, useCaseCards }) {
  return (
    <div className="use-cases-container">
      <section className="container">
        <header className="use-cases-header">
          {header}
          {subheader}
        </header>
        <div className="use-cases-cards-container">
          {useCaseCards.map(card => {
            return <Card
              title={card.title}
              links={card.links}
              cta={card.cta}
              type="linkCard"
            />
          })}
        </div>
      </section>
    </div>
  )
}

export default UseCases