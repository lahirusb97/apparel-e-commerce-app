import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HeroSlideComp({ img }) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <div className="relative w-full ">
        {/* <img src={img} className="w-full object-cover bg-center" /> */}
        <LazyLoadImage
          alt={img}
          height={"100%"}
          src={img}
          width={"100%"}
          style={{
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 mb-2 flex flex-col justify-end items-center z-20">
          <Button
            size="small"
            sx={{
              m: 1,
              fontWeight: 600,
              px: matches ? 3 : 2,
              py: matches ? 1 : 0.5,
              color: "white",
              "&:hover": {
                background: "yellow",
                color: "black", // Ensuring text color is black on hover
              },
            }}
            variant="contained"
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}
