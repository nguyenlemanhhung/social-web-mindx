import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

const Body = () => {
  return (
    <Box style={{ height: "calc(100vh - 75px)", paddingTop: "20px" }}>
      <Container
        maxWidth="xxl"
        sx={{
          height: "100%",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
export default Body;
