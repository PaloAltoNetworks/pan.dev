import React from 'react';
import './HomepageBanner.scss'

function HomepageBanner({ imgSrc, text }) {

  return (
    <header className="homepage-banner-container">
      <div className="container banner-content-container">
        <h2 className="banner-header">{text}</h2>
      </div>
    </header>
  )
}

export default HomepageBanner