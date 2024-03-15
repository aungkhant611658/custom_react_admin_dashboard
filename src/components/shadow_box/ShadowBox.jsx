import React from "react";
import Box from "@mui/material/Box";

import "./ShadowBox.scss";

const ShadowBox = (props) => {
  return <Box className="card">{props.children}</Box>;
};

export default ShadowBox;
