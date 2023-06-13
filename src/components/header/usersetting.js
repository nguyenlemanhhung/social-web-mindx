import React from "react";
import CardStyle from "../card-style";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwitchMode from "./switch-mode";
import { LoginCurve } from "iconsax-react";
import useAuth from "../../hooks/useAuth";

const UserSetting = () => {
  const { user } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <CardStyle sx={{ padding: "5px" }}>
      <Tooltip title="Open settings">
        <Button
          onClick={handleOpenUserMenu}
          sx={{ p: 0, textTransform: "none", fontWeight: "600" }}
          endIcon={<ArrowDropDownIcon />}
        >
          <img
            style={{ width: "40px", borderRadius: "50%", marginRight: "5px" }}
            src={
              user && user.avatar
                ? user.avatar
                : require("../../assets/images/avatar.webp")
            }
          />
          {user && user.username}
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <SwitchMode />

        <MenuItem>
          <LoginCurve size="24" color="#FF8A65" />
          <Typography
            variant="body2"
            sx={{
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            Đăng xuất
          </Typography>
        </MenuItem>
      </Menu>
    </CardStyle>
  );
};
export default UserSetting;
