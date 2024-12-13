import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import Slider from "../Slider/Slider";
import clsx from "clsx";
import "./Slider.scss";
import styles from "./styles.module.css";

const blog_json = require("./blogs.json");
const blogs = blog_json?.items?.slice(0, 9);

function Medium() {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const BlogCard = ({ blog }) => {
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

    return (
      <div className={clsx("card", styles.showcaseBlog)}>
        <div className="card__image">
          <img
            src={cardImgSrc || "/img/stock-feed.jpg"}
            alt={blog.title}
            className={styles.blogImage}
          />
        </div>
        <div className="card__body">
          <h3 className="avater__name">{blog.title}</h3>
          <div className="avatar__intro margin-left--none">
            <p className={clsx("text--secondary", styles.blogAuthor)}>
              By: {blog.author?.name}
            </p>
          </div>
          <br />
          <div className="avatar__intro margin-left--none">
            <div className={styles.content}>
              <BrowserOnly>
                {() => <p>{getFirstParagraph(blog.content_html)}</p>}
              </BrowserOnly>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <Link
            className="button button--outline button--primary button--block"
            variant="plain"
            href={blog.url}
            target="_blank"
            uppercase="false"
          >
            {" "}
            Read More on Medium
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="slider-container container">
        {blogs?.length && (
          <Slider {...sliderSettings}>
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.guid} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
export default Medium;
