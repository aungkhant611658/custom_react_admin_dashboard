import React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./Widget.scss";
import { KeyboardArrowDown } from "@mui/icons-material";

const Widget = ({ type, icon, link, isMoney, amount, percentage }) => {
  return (
    <Box
      className="widget"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="left"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <span className="title">{type}</span>
        <span className="counter">
          {isMoney && "$"} {amount}
        </span>
        <span className="link">{link}</span>
      </Box>

      <Box
        className="right"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <Box
          className={`percentage ${
            Math.sign(percentage) === 1 ? "positive" : "negative"
          }`}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {Math.sign(percentage) === 1 && <KeyboardArrowUpIcon />}
          {Math.sign(percentage) === -1 && <KeyboardArrowDown />}
          {percentage}%
        </Box>
        {icon}
      </Box>
    </Box>
  );
};

export default Widget;
