import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material/styles";

const Overlay = styled(Box)({
  backgroundColor: "rgba(255,255,255,0.3)",
  position: "absolute",
  bottom: "0",
  left: "0",
  height: "20%",
  width: "100%",
});

const listStory = [
  {
    bgImage: require("../assets/images/story-1.jpg"),
    avatar: require("../assets/images/profile-10.jpg"),
    name: "John",
  },
  {
    bgImage: require("../assets/images/story-2.jpg"),
    avatar: require("../assets/images/profile-11.jpg"),
    name: "Andrew",
  },
  {
    bgImage: require("../assets/images/story-3.jpg"),
    avatar: require("../assets/images/profile-12.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../assets/images/story-4.jpg"),
    avatar: require("../assets/images/profile-13.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../assets/images/story-5.jpg"),
    avatar: require("../assets/images/profile-14.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../assets/images/story-6.jpg"),
    avatar: require("../assets/images/profile-15.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../assets/images/story-1.jpg"),
    avatar: require("../assets/images/profile-16.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../assets/images/story-2.jpg"),
    avatar: require("../assets/images/profile-17.jpg"),
    name: "Rosaline",
  },
];

const Story = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        // position: "relative",
        width: "100%",
        height: "12rem",
        marginBottom: "20px",
        overflow: "auto",
      }}
    >
      {listStory.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${item.bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: "20px",
            // position: "relative",
            // overflow: "hidden",
          }}
        >
          <img
            src={item.avatar}
            style={{
              borderRadius: "50%",
              width: "40px",
            }}
          />
          <Typography
            sx={{
              color: "#e7f3ff",
              background: "rgba(255,255,255,0.5)",
            }}
          >
            {item.name}
          </Typography>
          {/* <Overlay></Overlay> */}
        </Box>
      ))}
      <IconButton
        sx={{
          width: "40px",
          height: "40px",
          position: "sticky",
          right: "5px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#f8f8f8",
          "&:hover": {
            backgroundColor: "#e7f3ff",
          },
        }}
      >
        <NavigateNextIcon fonSize="small" />
      </IconButton>
    </Stack>
  );
};
export default Story;
