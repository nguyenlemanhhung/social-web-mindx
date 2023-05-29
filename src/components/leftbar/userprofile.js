import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardStyle from "../card-style";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <CardStyle
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={require("../../assets/images/banner.jpeg")}
        style={{
          width: "100%",
          borderRadius: "10px ",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          transform: "translateY(-50%)",
          position: "relative",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography>150</Typography>
          <Typography variant="subtitle2">Followers</Typography>
        </Box>

        <img
          style={{
            width: "100px",
            borderRadius: "30%",
            border: "10px solid #fff",
          }}
          src={require("../../assets/images/profile-1.jpg")}
        />

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>550</Typography>
          <Typography variant="subtitle2">Following</Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          mb: 1,
        }}
      >
        Evgen Ledo
      </Typography>
      <Typography variant="subtitle2">@Evgen Ledo</Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          margin: "20px 0 30px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>

      <Button
        component={Link}
        to="/profile"
        sx={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #E7F3FF",
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
