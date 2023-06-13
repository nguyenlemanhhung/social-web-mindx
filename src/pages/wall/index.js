import React from "react";
import { Box, Container } from "@mui/material";

import HeaderWall from "./header";
import BodyWall from "./body";

const WallPage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Container maxWidth="lg">
        <HeaderWall />
        <BodyWall />
      </Container>
    </Box>
  );
};

export default WallPage;
