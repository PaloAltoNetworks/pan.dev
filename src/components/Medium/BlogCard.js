import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import "./BlogCard.css";

const BlogCard = ({ blog, key }) => {
  const getFirstParagraph = (blogContent) => {
    let firstParagraph = null;
    let div = document.createElement("div");
    div.innerHTML = blogContent;
    let elements = div.childNodes;

    // Find the first paragraph element in the blog content
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].nodeName === "P") {
        firstParagraph = elements[i].innerText;
        break;
      }
    }

    return firstParagraph;
  };

  const cardImgSrc =
    blog.thumbnail ||
    (blog.content_html.match(/<img[^>]+src="([^">]+)"/)
      ? blog.content_html.match(/<img[^>]+src="([^">]+)"/)[1]
      : null);

  const getAuthorInitials = (author) => {
    const authorFullName = author.split(" ");
    const firstInitial = authorFullName[0][0].toUpperCase();
    const lastInitial =
      authorFullName.length > 1
        ? authorFullName[authorFullName.length - 1][0].toUpperCase()
        : firstInitial;

    return firstInitial + lastInitial;
  };

  return (
    <Link
      style={{ color: "inherit" }}
      href={blog.url}
      target="_blank"
      className="card"
    >
      <div className="card__container">
        <img
          className="card__image"
          src={cardImgSrc || "/img/stock-feed.jpg"}
        />
        <div className="card__overlay"></div>
        <div className="card__content">
          <div className="card__author-info">
            <div className="card__author-avatar">
              {getAuthorInitials(blog.author?.name)}
            </div>
            <span className="card__author-name">{blog.author?.name}</span>
          </div>
          <span className="card__title">{blog.title}</span>
          <BrowserOnly>
            {() => (
              <p className="card__description">
                {getFirstParagraph(blog.content_html)}
              </p>
            )}
          </BrowserOnly>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
