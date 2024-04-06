import React, { useEffect, useState } from "react";
import HeroSlide from "../../components/herosection/HeroSlide";
import { Divider, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import NewSlider from "./NewSlider";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const [products, setProducts] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    lazyLoad: true,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <HeroSlide />
      <div>
        <Typography fontWeight={600} textAlign="center" variant="h6">
          New Arivals
        </Typography>

        <div className="slider-container">
          <Slider {...settings}>
            {products.slice(0, 4).map((e) => (
              <ProductCard newz={true} offer={false} key={e.id} item={e} />
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <Typography mt={4} fontWeight={600} textAlign="center" variant="h6">
          Best Offers
        </Typography>

        <div className="slider-container">
          <Slider {...settings}>
            {products.slice(16, 20).map((e) => (
              <div key={e.id}>
                <ProductCard item={e} newz={false} offer={true} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
