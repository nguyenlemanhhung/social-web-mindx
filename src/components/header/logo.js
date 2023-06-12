import React from "react";
import Button from "@mui/material/Box";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Button
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <img src={require("../../assets/icons/logo.png")} />
    </Button>
  );
};
export default Logo;
