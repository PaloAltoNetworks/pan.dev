import React from "react";
import Slider from "../Slider/Slider";
import BlogCard from "./BlogCard.js";
import "./Slider.scss";

let blog_json;

try {
  blog_json = require("./blogs.json");
} catch (error) {
  blog_json = null;
}

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

  return (
    <div className="medium-container container">
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
