import React from "react";
import { Typography, Paper, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

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
];

const FriendItem = styled(Paper)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "5px",
  backgroundColor: "transparent",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#e7f3ff",
  },
});

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
        variant="body1"
        sx={{ marginBottom: "10px", position: "sticky", top: "0" }}
      >
        Friends List
      </Typography>

      <Stack
        spacing={1}
        sx={{
          overflow: "scroll",
          height: "100%",
        }}
      >
        {friends.map((item, idx) => (
          <FriendItem key={idx} elevation={0}>
            <img
              src={item.avatar}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            />
            <Typography>{item.name}</Typography>
          </FriendItem>
        ))}
      </Stack>
    </Box>
  );
};
export default FriendsList;
