import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { Box, Container } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />

      <main style={{ height: "100%" }}>
        <Container
          maxWidth="xxl"
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};
export default Layout;
