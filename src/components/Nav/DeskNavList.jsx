import React, { useState } from "react";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
export default function DeskNavList({ subNav, data, setNavList }) {
  const handleToggle = () => {
    setNavList(subNav.length > 0 ? [] : data.subCat);
  };

  const handleMouseEnter = () => {
    setNavList(data.subCat);
  };

  const handleMouseLeave = () => {
    setNavList([]);
  };

  return (
    <div onClick={handleToggle} className="position-relative h-4 ">
      <div className="flex items-center" onMouseEnter={handleMouseEnter}>
        <Typography sx={{ cursor: "pointer", p: 1 }}>{data.name}</Typography>
        <FaAngleDown />
      </div>
    </div>
  );
}
