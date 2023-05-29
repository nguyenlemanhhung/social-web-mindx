import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import bgBanner from "../../assets/images/banner.jpeg";

const HeaderWall = () => {
  return (
    <Box>
      <img
        src={require("../../assets/images/banner.jpeg")}
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          // ratio: "16:9",
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
          src={require("../../assets/images/profile-1.jpg")}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{
              margin: "20px 0 5px",
            }}
          >
            Evgen Ledo
          </Typography>
          <Typography variant="subtitle2">@Evgen Ledo</Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            margin: "0 10px 0 30px",
          }}
        >
          <Typography>550</Typography>
          <Typography variant="subtitle2">Following</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>150</Typography>
          <Typography variant="subtitle2">Followers</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderWall;
