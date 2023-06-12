import React from "react";
import { Box, Badge, Tooltip, Menu, MenuItem, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import NotificationHeader from "./notiheader";
import { Home2, NoteFavorite, Messages, Personalcard } from "iconsax-react";

const Nav = () => {
  const NavLinkStyle = styled(NavLink)({
    color: "#b2b2b2",
    padding: "5px 30px",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "0%",
      height: "100%",
      background: "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
      transition: "all .5s",
      zIndex: "-1",
    },
    "&:hover": {
      color: "#fff",
      "&::before": {
        width: "100%",
      },
    },
  });

  const navLinkStyle = ({ isActive }) => ({
    color: "#fff",
    background: isActive
      ? "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)"
      : "",
    transition: "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  });
  return (
    <Box
      sx={{
        backgroundColor: "rgba(25, 118, 210, 0.1)",
        borderRadius: "20px",
        padding: "5px 10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
      }}
    >
      <NavLinkStyle to="/" className="nav-link" style={navLinkStyle}>
        <Tooltip title="Home Page">
          <Home2 size="24" />
        </Tooltip>
      </NavLinkStyle>

      <NavLinkStyle to="/wall" className="nav-link" style={navLinkStyle}>
        <Tooltip title="My Wall">
          <Personalcard size="24" />
        </Tooltip>
      </NavLinkStyle>

      <NavLinkStyle to="/messages" className="nav-link" style={navLinkStyle}>
        <Tooltip title="messages">
          <Messages size="24" />
        </Tooltip>
      </NavLinkStyle>

      <NavLinkStyle to="/favorite" className="nav-link" style={navLinkStyle}>
        <Tooltip title="Favorites">
          <NoteFavorite size="24" />
        </Tooltip>
      </NavLinkStyle>

      <Divider orientation="vertical" variant="middle" flexItem />
      <NotificationHeader />
    </Box>
  );
};
export default Nav;
