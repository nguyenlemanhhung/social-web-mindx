import React from "react";
import LoadingPage from "../../loading/loading";
import { Button, Box, Typography, IconButton } from "@mui/material";
import CardStyle from "../../../components/card-style";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NoAvatar from "../../../assets/images/avatar.webp";
import { Edit2, GalleryEdit } from "iconsax-react";

const UserProfile = () => {
  const { user, metadata } = useAuth();
  if (!user) return <LoadingPage />;

  return (
    <CardStyle
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={
          user && user.banner
            ? user.banner
            : require("../../../assets/images/banner.jpeg")
        }
        style={{
          width: "100%",
          borderRadius: "10px ",
        }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-evenly",
          transform: "translateY(-50%)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "80px",
            borderRadius: "30%",
            border: "10px solid #fff",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "30%",
            }}
            src={user.avatar ? user.avatar : NoAvatar}
          />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography>{metadata && metadata.following_count}</Typography>
          <Typography variant="subtitle1">Người theo dõi</Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>{metadata && metadata.post_count}</Typography>
          <Typography variant="subtitle1">Bài viết</Typography>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          mb: 1,
        }}
      >
        {user.username}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          margin: "20px 0 30px",
        }}
      >
        {user.signature ? (
          user.signature
        ) : (
          <Button
            component={Link}
            to="/profile"
            sx={{
              textTransform: "capitalize",
              color: "#656565",
            }}
            endIcon={<Edit2 color="#FF8A65" variant="Bold" size="16" />}
          >
            Chỉnh sửa chữ ký
          </Button>
        )}
      </Typography>

      <Button
        component={Link}
        to="/profile"
        sx={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #E7F3FF",
          backgroundColor: "#f8f8f8",
          "&:hover": {
            backgroundColor: "#E7F3FF",
          },
        }}
      >
        My Profile
      </Button>
    </CardStyle>
  );
};
export default UserProfile;
