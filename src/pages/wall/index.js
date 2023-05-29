import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";

import HeaderWall from "./header";
import BodyWall from "./body";

const WallPage = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <HeaderWall />
        <BodyWall />
      </Container>
    </Box>
  );
};

export default WallPage;
