import { Typography, Stack, Box, Paper } from "@mui/material";
import React from "react";
import SearchHeader from "../../components/header/search";
import { styled } from "@mui/material/styles";

const listMessages = [
  {
    name: "friend 1",
    avatar: require("../../assets/images/profile-1.jpg"),
    lastMessage: "hello friend 1",
  },
  {
    name: "friend 2",
    avatar: require("../../assets/images/profile-2.jpg"),
    lastMessage: "hello friend 2",
  },
  {
    name: "friend 3",
    avatar: require("../../assets/images/profile-3.jpg"),
    lastMessage: "hello friend 3",
  },
  {
    name: "friend 4",
    avatar: require("../../assets/images/profile-4.jpg"),
    lastMessage: "hello friend 4",
  },
  {
    name: "friend 5",
    avatar: require("../../assets/images/profile-5.jpg"),
    lastMessage: "hello friend 5",
  },
  {
    name: "friend 6",
    avatar: require("../../assets/images/profile-6.jpg"),
    lastMessage: "hello friend 6",
  },
  {
    name: "friend 7",
    avatar: require("../../assets/images/profile-7.jpg"),
    lastMessage: "hello friend 7",
  },
  {
    name: "friend 8",
    avatar: require("../../assets/images/profile-8.jpg"),
    lastMessage: "hello friend 8",
  },
  {
    name: "friend 9",
    avatar: require("../../assets/images/profile-9.jpg"),
    lastMessage: "hello friend 9",
  },
  {
    name: "friend 10",
    avatar: require("../../assets/images/profile-10.jpg"),
    lastMessage: "hello friend 10",
  },
  {
    name: "friend 1",
    avatar: require("../../assets/images/profile-1.jpg"),
    lastMessage: "hello friend 11",
  },
  {
    name: "friend 2",
    avatar: require("../../assets/images/profile-2.jpg"),
    lastMessage: "hello friend 12",
  },
  {
    name: "friend 3",
    avatar: require("../../assets/images/profile-3.jpg"),
    lastMessage: "hello friend 13",
  },
];

const MessageItem = styled(Paper)({
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
const ListMessages = () => {
  return (
    <>
      <Box>
        <Typography>Chat</Typography>
        <SearchHeader />
      </Box>
      <Stack>
        {listMessages.map((item, idx) => {
          return (
            <MessageItem key={idx} elevation={0}>
              <img
                src={item.avatar}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              />
              <Box>
                <Typography>{item.name}</Typography>
                <Typography>{item.lastMessage}</Typography>
              </Box>
            </MessageItem>
          );
        })}
      </Stack>
    </>
  );
};
export default ListMessages;
