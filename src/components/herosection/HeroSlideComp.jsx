import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function HeroSlideComp({ img }) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {" "}
      <div className="relative w-full h-1/3">
        <img src={img} className="w-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Typography
            bgcolor={"yellow"}
            color={"red"}
            p={1}
            typography={matches ? "h3" : "h6"}
            fontWeight={600}
          >
            2024 New Year 25% Offer
          </Typography>
          <Button
            sx={{
              background: "cyan",

              m: 1,
              fontWeight: 600,
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
