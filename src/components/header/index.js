import React from "react";
import Box from "@mui/material/Box";
import Logo from "./logo";
import Nav from "./nav";
import SearchHeader from "./search";
import UserSetting from "./usersetting";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Box
      sx={{
        height: "75px",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          backgroundColor: "#E7F3FF",
          padding: "10px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
          <SearchHeader />
        </Box>
        <Nav />
        <UserSetting />
      </Container>
    </Box>
  );
};
export default Header;
