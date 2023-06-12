import React from "react";
import { Box, Typography } from "@mui/material";
import NoAvatar from "../../assets/images/avatar.webp";
import useAuth from "../../hooks/useAuth";

const HeaderWall = () => {
  const { user, metadata } = useAuth();
  return (
    <Box>
      <img
        src={require("../../assets/images/banner.jpeg")}
        alt="banner-header"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          position: "relative",
          transform: "translateY(-50%)",
          padding: "0 30px",
        }}
      >
        <img
          style={{
            width: "100px",
            borderRadius: "30%",
            border: "10px solid #f8f8f8",
            marginRight: "10px",
          }}
          src={user.avatar ? user.avatar : NoAvatar}
          alt="avatar-wall"
        />
        <Box>
          <Typography
            variant="body1"
            sx={{
              margin: "20px 0 5px",
            }}
          >
            {user.username}
          </Typography>
          <Typography variant="subtitle2">{user.email}</Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            margin: "0 10px 0 30px",
          }}
        >
          <Typography>{metadata.following_count}</Typography>
          <Typography variant="subtitle2">Người theo dõi</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>{metadata.post_count}</Typography>
          <Typography variant="subtitle2">Bài viết</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderWall;
