import Link from "@docusaurus/Link";
import classnames from "classnames";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss"
import styles from "./styles.module.css";

const blog_json = require("./blogs.json");
const blogs = blog_json.items.slice(0, 9);

function Medium() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 7500,
    dots: true,
    infinite: true,
    speed: 850,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <img src="/icons/slider-arrow-forward.svg" />,
    prevArrow: <img src="/icons/slider-arrow-back.svg" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  const BlogCard = ({ blog }) => {
    return (
      <div className={classnames("card", styles.showcaseBlog)}>
        <div className="card__image">
          <img src={blog.thumbnail} alt={blog.title} className={styles.blogImage} />
        </div>
        <div className="card__body">
          <h3 className="avater__name">{blog.title}</h3>
          <div className="avatar__intro margin-left--none">
            <p className={classnames("text--secondary", styles.blogAuthor)}>
              By: {blog.author}
            </p>
          </div>
          <br />
          <div className="avatar__intro margin-left--none">
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{__html: blog.content }} />
            </div>
          </div>
        </div>
        <div className="card__footer">
          <Link
            className="button button--outline button--primary button--block"
            variant="plain"
            href={blog.link}
            target="_blank"
            uppercase="false"
          >
            {" "}
            Read More on Medium
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="slider-container container">
        {blogs?.length && (
          <Slider {...sliderSettings}>
            {blogs.map((blog) => <BlogCard blog={blog} />)}
          </Slider>
        )}
      </div>
    </div>
  );
}
export default Medium;
