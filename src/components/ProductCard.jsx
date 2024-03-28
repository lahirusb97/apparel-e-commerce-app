import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          width: 320,
          height: 345,
          objectFit: "contain",
          margin: ".5em auto",
        }}
        image={item.images[0]}
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "center", p: 0, m: 0 }}>
        <Typography
          sx={{ textAlign: "center", p: 0, m: 0 }}
          gutterBottom
          variant="h6"
          component="div"
        >
          SEAM DETAIL MAXI DRESS
        </Typography>
        <Typography
          sx={{ textAlign: "center", p: 0, m: 0 }}
          color={"rebeccapurple"}
          variant="body2"
        >
          Rs.3500
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => console.log(item)}
          variant="contained"
          color="primary"
          size="small"
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
