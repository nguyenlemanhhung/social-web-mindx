import * as React from "react";
import {
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Badge,
  Divider,
} from "@mui/material";
import { Notification } from "iconsax-react";

const notiList = [
  {
    name: "friend 1",
    avatar: require("../../assets/images/profile-1.jpg"),
  },
  {
    name: "friend 2",
    avatar: require("../../assets/images/profile-2.jpg"),
  },
  {
    name: "friend 3",
    avatar: require("../../assets/images/profile-3.jpg"),
  },
  {
    name: "friend 4",
    avatar: require("../../assets/images/profile-4.jpg"),
  },
  {
    name: "friend 5",
    avatar: require("../../assets/images/profile-5.jpg"),
  },
  {
    name: "friend 6",
    avatar: require("../../assets/images/profile-6.jpg"),
  },
  {
    name: "friend 7",
    avatar: require("../../assets/images/profile-7.jpg"),
  },
  {
    name: "friend 8",
    avatar: require("../../assets/images/profile-8.jpg"),
  },
  {
    name: "friend 9",
    avatar: require("../../assets/images/profile-9.jpg"),
  },
  {
    name: "friend 10",
    avatar: require("../../assets/images/profile-10.jpg"),
  },
];

const NotificationHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hahaha">
      <IconButton
        aria-label="more"
        id="noti-button"
        aria-controls={open ? "noti-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="primary">
          <Notification
            size="24"
            // color="#FF8A65"
            color={open ? "#FF8A65" : "#b2b2b2"}
          />
        </Badge>
      </IconButton>

      <Menu
        id="noti-menu"
        MenuListProps={{
          "aria-labelledby": "noti-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "350px",
            padding: "10px",
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
              right: "50%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translate(-50%, -50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <Box>
          <Typography variant="h5">Thông báo</Typography>
        </Box>
        <Divider sx={{ margin: "10px 0" }} />
        <Box
          sx={{
            maxHeight: "600px",

            overflow: "scroll",
          }}
        >
          {notiList.map((item, idx) => (
            <MenuItem
              key={idx}
              // selected={option === "Pyxis"}
              // onClick={handleClose}
              sx={{
                padding: "10px",
                backgroundColor: "transparent",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#e7f3ff",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                }}
              >
                <img
                  src={item.avatar}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                  alt="avatar noti user"
                />
                <Box>
                  <Typography variant="body2">
                    {item.name} đã bình luận bài viết của bạn
                  </Typography>
                  <Typography variant="subtitle1">3 giờ trước</Typography>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </div>
  );
};
export default NotificationHeader;
