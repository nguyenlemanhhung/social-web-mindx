import React from "react";
import { Button } from "@mui/material";

const ButtonSocial = ({ bgColor, bgColorHover, icon, text }) => {
  return (
    <Button
      // onClick={onClick}
      variant="contained"
      fullWidth
      sx={{
        position: "relative",
        padding: "10px 0",
        backgroundColor: `${bgColor}`,
        "&:hover": {
          backgroundColor: `${bgColorHover}`,
        },
      }}
      startIcon={<icon size="32" color="#FFF" variant="Outline" />}
    >
      {text}
    </Button>
  );
};
export default ButtonSocial;
