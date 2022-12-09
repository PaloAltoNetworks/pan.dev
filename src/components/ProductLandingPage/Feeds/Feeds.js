import React from 'react'
import Link from '@docusaurus/Link'
import jsonFeeds from './feeds.json'
import './Feeds.scss'

function Feeds() {
  const imageFeeds = jsonFeeds.items.slice(0, 2);
  const nonImageFeeds = jsonFeeds.items.slice(2, 6);

  return (
    <div className="container">
      <section className="feeds-container">
        <header className="feeds-header">
          <h1>Latest Terraform News from Hashicorp</h1>
        </header>
        <div className="feeds-image-list-container">
          <div className="feeds-image-container">
            {imageFeeds.map((feed, i) =>
              <Link key={i} to={feed.link}>
                <div className="feeds-image-text-wrapper">
                  <img
                    src="/img/product-landing/terraform/feeds/stock-feed.jpg"
                    alt={feed.title}
                  />
                  <h3 className="feeds__title">{feed.title}</h3>
                </div>
              </Link>
            )}
          </div>
          <ul className="feeds-list">
            {nonImageFeeds.map((feed, i) =>
              <li key={i} className="feeds-list__item">
                <Link to={feed.link}>{feed.title}</Link>
                <img
                  className="external-icon"
                  src="/img/icons/external-icon.png"
                  alt="External icon"
                />
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Feeds