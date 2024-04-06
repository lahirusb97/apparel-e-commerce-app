import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductCard({ item, offer, newz }) {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Card
        variant="elevation"
        elevation={2}
        sx={{
          maxWidth: 345,
          position: "relative",
          cursor: "pointer",
          p: 1,
          m: 1,
          transition: "box-shadow 0.3s ease", // Adding transition for smooth effect
          "&:hover": {
            boxShadow: "0px 3px 10px rgba(0,191,255, 0.8)", // Shadow effect on hover
          },
        }}
      >
        {newz ? (
          <Typography
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              p: 0.5,
              backgroundColor: "green",
              color: "white",
            }}
            variant="body"
          >
            New
          </Typography>
        ) : (
          <></>
        )}
        {offer ? (
          <Typography
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              p: 0.5,
              backgroundColor: "red",
              color: "white",
            }}
            variant="body"
          >
            25% off
          </Typography>
        ) : (
          <></>
        )}

        <LazyLoadImage
          alt={item.image}
          height={200}
          src={item.image}
          width={300}
          style={{
            width: 300,
            height: 200,
            objectFit: "contain",
            backgroundPosition: "center",
            margin: ".5em auto",
          }}
        />
        <CardContent sx={{ textAlign: "center", p: 0, m: 0 }}>
          <Typography
            sx={{
              textAlign: "center",
              p: 0,
              m: 0,
              whiteSpace: "nowrap", // Prevent text wrapping
              overflow: "hidden", // Hide overflow text
              textOverflow: "ellipsis", // Add ellipsis for additional text
            }}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography
            fontWeight={600}
            sx={{ textAlign: "center", p: 0, m: 0 }}
            color={"orange"}
            variant="subtitle1"
          >
            Rs.3500
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => console.log(item)}
            variant="contained"
            size="small"
            sx={{
              fontWeight: 600,
              px: 2,
              py: 0.5,
              color: "white",
              "&:hover": {
                background: "yellow",
                color: "black", // Ensuring text color is black on hover
              },
            }}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
