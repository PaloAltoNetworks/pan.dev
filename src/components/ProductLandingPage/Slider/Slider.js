import React from "react";
import Slider from "react-slick";

function SliderComponent(props) {
  const defaultSettings = {
    autoplay: true,
    autoplaySpeed: 7500,
    dots: true,
    infinite: true,
    speed: 850,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <img src="/icons/slider-arrow-forward.svg" />,
    prevArrow: <img src="/icons/slider-arrow-back.svg" />,
    responsive: [
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
    <Slider {...defaultSettings} {...props}>
      {props.children}
    </Slider >
  )
}

export default SliderComponent
