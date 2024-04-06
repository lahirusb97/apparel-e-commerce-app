import React from "react";

export default function DetailComp() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <TbTruckDelivery color="red" size={matches ? 40 : 30} />
        <Typography fontSize={matches ? 24 : 20} variant="h6">
          Free Shipping
        </Typography>
        <Typography variant="subtitle1">
          Delivered to your doorstep at no additional cost
        </Typography>
      </div>
    </div>
  );
}
