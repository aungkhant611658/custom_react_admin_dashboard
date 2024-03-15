import React from "react";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ButtonWithIcon = ({
  buttonText = "ADD",
  color = green[800],
  borderColor = green[800],
  icon = <AddCircleIcon />,
}) => {
  return (
    <Button
      className="button-with-icon addButton"
      variant="outlined"
      startIcon={icon}
      style={{ color: color, borderColor: borderColor }}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonWithIcon;
