import { Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import HeroSlideComp from "./HeroSlideComp";

export default function HeroSlide() {
  return (
    <div className="mt-16">
      <Carousel>
        <HeroSlideComp img={"/slide1.jpg"} />
        <HeroSlideComp img={"/slide2.jpg"} />
        <HeroSlideComp img={"/slide3.jpg"} />
      </Carousel>
    </div>
  );
}
