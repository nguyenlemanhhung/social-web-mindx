import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

const Body = () => {
  return (
    <Box style={{ height: "calc(100vh - 75px)" }}>
      <Container
        maxWidth="xxl"
        sx={{
          height: "100%",
          padding: "20px",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
export default Body;
