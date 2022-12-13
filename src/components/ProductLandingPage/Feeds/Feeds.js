import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import feedsJson from './feeds.json';
import mediumFeedsJson from '../../Medium/blogs.json';
import './Feeds.scss';

function Feeds() {
  const hashicorpImageFeeds = feedsJson.items.slice(0, 2);
  const hashicorpFeeds = feedsJson.items.slice(2, 6);
  const mediumImageFeeds = mediumFeedsJson.items.slice(0, 2);
  const mediumFeeds = mediumFeedsJson.items.slice(2, 6);

  const FeedItem = ({ feeds, imageFeeds }) => {
    return (
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
          {feeds.map((feed, i) =>
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
    )
  }

  return (
    <div className="container">
      <section className="feeds-container">
        <header className="feeds-header">
          <h1>Latest Terraform News from</h1>
        </header>
        <Tabs>
          <TabItem value="HashiCorp" label="HashiCorp">
            <FeedItem feeds={hashicorpFeeds} imageFeeds={hashicorpImageFeeds} />
          </TabItem>
          <TabItem value="PAN.dev" label="PAN.dev">
            <FeedItem feeds={mediumFeeds} imageFeeds={mediumImageFeeds} />
          </TabItem>
        </Tabs>
      </section>
    </div>
  )
}

export default Feeds