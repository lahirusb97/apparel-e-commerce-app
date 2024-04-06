import React from "react";
import Slider from "react-slick";
import HeroSlideComp from "./HeroSlideComp";
import { useMediaQuery } from "@mui/material";

function SliderImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const heroimg = useMediaQuery("(min-width:800px)");

  return (
    <div className="slider-container my-4">
      <Slider {...settings}>
        <HeroSlideComp img={heroimg ? "/slide5.jpg" : "/slide5m.jpg"} />
        <HeroSlideComp img={heroimg ? "/slide6.jpg" : "/slide6m.jpg"} />
      </Slider>
    </div>
  );
}

export default SliderImg;
