import React from 'react';
import './HomepageBanner.scss'

function HomepageBanner({ imgSrc, text }) {

  return (
    <header className="homepage-banner-container">
      <div className="container banner-content-container">
        <img className="banner-image" src={imgSrc}/>
        <h1 className="banner-header">{text}</h1>
      </div>
    </header>
  )
}

export default HomepageBanner