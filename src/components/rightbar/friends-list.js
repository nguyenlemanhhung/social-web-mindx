import React from "react";
import { Typography, Paper, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import StackItemStyle from "../StackItemStyle";
import AvatarSmallStyle from "../AvatarSmallStyle";

const friends = [
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

const FriendsList = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // marginBottom: "20px",
        padding: "10px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", position: "sticky", top: "0" }}
      >
        Bạn bè
      </Typography>

      <Stack
        spacing={1}
        sx={{
          overflow: "scroll",
          height: "100%",
        }}
      >
        {friends.map((item, idx) => (
          <StackItemStyle key={idx} elevation={0}>
            <AvatarSmallStyle src={item.avatar} />
            <Typography variant="body2">{item.name}</Typography>
          </StackItemStyle>
        ))}
      </Stack>
    </Box>
  );
};
export default FriendsList;
