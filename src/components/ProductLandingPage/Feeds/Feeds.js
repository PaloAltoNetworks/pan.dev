import React from "react";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "./Feeds.scss";

let mediumFeedsJson;
// let feedsJson;

try {
  mediumFeedsJson = require("../../Medium/blogs.json");
} catch (error) {
  mediumFeedsJson = null;
}

// try {
//   feedsJson = require("./feeds.json");
// } catch (error) {
//   feedsJson = null;
// }

function Feeds() {
  // const hashicorpImageFeeds = feedsJson.items.slice(0, 2);
  // const hashicorpFeeds = feedsJson.items.slice(2, 6);

  const filterMediumTerraform = (item) => {
    const title = item.title;
    const content_html = item.content_html;

    if (title && title.toLowerCase().includes("terraform")) return true;
    if (content_html && content_html.toLowerCase().includes("terraform"))
      return true;
  };

  const filteredMediumTerraform = mediumFeedsJson.items.filter(
    filterMediumTerraform
  );
  const mediumImageFeeds = filteredMediumTerraform.slice(0, 2);
  const mediumFeeds = filteredMediumTerraform.slice(2, 6);

  const FeedItem = ({ feeds, imageFeeds }) => {
    const hasFeeds = feeds.length > 0;
    const hasImageFeeds = imageFeeds.length > 0;

    return (
      <div className="feeds-image-list-container">
        {hasImageFeeds && (
          <div className="feeds-image-container">
            {imageFeeds.map((feed, i) => {
              const cardImageSrc =
                feed.thumbnail ||
                (feed.content_html.match(/<img[^>]+src="([^">]+)"/)
                  ? feed.content_html.match(/<img[^>]+src="([^">]+)"/)[1]
                  : null);

              return (
                <Link key={i} to={feed.url}>
                  <div className="feeds-image-text-wrapper">
                    <img
                      src={cardImageSrc || "/img/stock-feed.jpg"}
                      alt={feed.title}
                    />
                    <h3 className="feeds__title">{feed.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        {hasFeeds && (
          <ul className="feeds-list">
            {feeds.map((feed, i) => (
              <li key={i} className="feeds-list__item">
                <Link to={feed.url}>{feed.title}</Link>
                <img
                  className="external-icon"
                  src="/img/icons/external-icon.png"
                  alt="External icon"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <section className="feeds-container">
        <header className="feeds-header">
          <h1>Latest Terraform Blogs</h1>
        </header>
        <FeedItem feeds={mediumFeeds} imageFeeds={mediumImageFeeds} />
      </section>
    </div>
  );
}

export default Feeds;
