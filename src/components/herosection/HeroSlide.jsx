import {
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import HeroSlideComp from "./HeroSlideComp";
import { TbTruckDelivery } from "react-icons/tb";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaCreditCard, FaFaceGrinStars } from "react-icons/fa6";
import SliderImg from "./SliderImg";
import "./slickcss.css";
export default function HeroSlide() {
  const matches = useMediaQuery("(min-width:600px)");
  const heroimg = useMediaQuery("(min-width:800px)");

  return (
    <div className="mt-16">
      <SliderImg />
      {/* <Carousel navButtonsAlwaysVisible={true} animation="slide" autoPlay>
        <HeroSlideComp img={heroimg ? "/slide5.jpg" : "/slide5m.jpg"} />
        <HeroSlideComp img={heroimg ? "/slide6.jpg" : "/slide6m.jpg"} />
      </Carousel> */}
      <Paper>
        <div className="flex sm:flex-row flex-col  sm:justify-center justify-start  mx-4 mb-4 flex-wrap">
          <div className="flex items-center   my-2">
            <TbTruckDelivery size={30} />
            <div className="ml-3">
              <Typography variant="body1">Free Shipping</Typography>
              <Typography color={"text.secondary"} variant="body2">
                Delivered to your doorstep
              </Typography>
            </div>
          </div>
          <div className="sm:border-l-2 gray-black  mx-2"></div>
          <div className="flex items-center  my-2">
            <VscCallOutgoing size={30} />
            <div className="ml-3">
              <Typography variant="body1"> 071-0000007</Typography>
              <Typography color={"text.secondary"} variant="body2">
                Call us for more informations
              </Typography>
            </div>
          </div>
          <div className="sm:border-l-2  gray-black mx-2"></div>
          <div className="flex items-center  my-2">
            <FaCreditCard size={30} />
            <div className="ml-3">
              <Typography variant="body1"> Payment</Typography>
              <Typography color={"text.secondary"} variant="body2">
                Secure system
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
