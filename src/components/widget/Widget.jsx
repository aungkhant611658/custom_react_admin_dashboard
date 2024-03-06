import React from "react";
import Box from "@mui/material/Box";

import "./Widget.scss";

const Widget = () => {
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
      <div className="left">Left</div>
      <div className="right">Right</div>
    </Box>
  );
};

export default Widget;
