import React from "react";
import { Box, Stack } from "@mui/material";
import { Typography, IconButton } from "@mui/material";
import { ArrowRight2 } from "iconsax-react";

const listStory = [
  {
    bgImage: require("../../../assets/images/story-1.jpg"),
    avatar: require("../../../assets/images/profile-10.jpg"),
    name: "John",
  },
  {
    bgImage: require("../../../assets/images/story-2.jpg"),
    avatar: require("../../../assets/images/profile-11.jpg"),
    name: "Andrew",
  },
  {
    bgImage: require("../../../assets/images/story-3.jpg"),
    avatar: require("../../../assets/images/profile-12.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-4.jpg"),
    avatar: require("../../../assets/images/profile-13.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-5.jpg"),
    avatar: require("../../../assets/images/profile-14.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-6.jpg"),
    avatar: require("../../../assets/images/profile-15.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-1.jpg"),
    avatar: require("../../../assets/images/profile-16.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-2.jpg"),
    avatar: require("../../../assets/images/profile-17.jpg"),
    name: "Rosaline",
  },
  {
    bgImage: require("../../../assets/images/story-1.jpg"),
    avatar: require("../../../assets/images/profile-10.jpg"),
    name: "John",
  },
  {
    bgImage: require("../../../assets/images/story-2.jpg"),
    avatar: require("../../../assets/images/profile-11.jpg"),
    name: "Andrew",
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
            minWidth: "90px",
            backgroundImage: `url(${item.bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "10px",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={item.avatar}
            style={{
              border: "2px solid #fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            alt="avatar story"
          />
          <Box
            sx={{
              width: "100%",
              background: "rgba(255,255,255,0.5)",
              padding: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "Center", color: "#050505" }}
            >
              {item.name}
            </Typography>
          </Box>
        </Box>
      ))}
      <IconButton
        sx={{
          width: "30px",
          height: "30px",
          position: "sticky",
          right: "5px",
          top: "50%",
          transform: "translateY(-50%)",
          background:
            "linear-gradient(112.14deg, rgb(52, 97, 255) 1.15%, rgb(152, 72, 255) 73.09%)",
          // "&:hover": {
          //   backgroundColor: "#e7f3ff",
          // },
        }}
      >
        <ArrowRight2 size="32" color="#FFF" />
      </IconButton>
    </Stack>
  );
};
export default Story;
