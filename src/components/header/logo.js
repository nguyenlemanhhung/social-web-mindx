import React from "react";
import Box from "@mui/material/Box";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <img src={require("../../assets/icons/logo.png")} />
    </Box>
  );
};
export default Logo;
