import React from "react";
import { Typography, Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const groupList = [
  {
    name: "group chat 1",
    avatar: require("../../assets/images/feed-1.jpg"),
  },
  {
    name: "group chat 2",
    avatar: require("../../assets/images/feed-2.jpg"),
  },
  {
    name: "group chat 3",
    avatar: require("../../assets/images/feed-3.jpg"),
  },
  {
    name: "group chat 1",
    avatar: require("../../assets/images/feed-1.jpg"),
  },
  {
    name: "group chat 2",
    avatar: require("../../assets/images/feed-2.jpg"),
  },
  {
    name: "group chat 3",
    avatar: require("../../assets/images/feed-3.jpg"),
  },
  {
    name: "group chat 1",
    avatar: require("../../assets/images/feed-1.jpg"),
  },
  {
    name: "group chat 2",
    avatar: require("../../assets/images/feed-2.jpg"),
  },
];

const GroupItem = styled(Paper)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  // marginBottom: "10px",
  padding: "5px",
  backgroundColor: "transparent",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#e7f3ff",
  },
});
const ChatGroup = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "10px",
      }}
    >
      <Typography sx={{ marginBottom: "10px", position: "sticky", top: "0" }}>
        Chat Group
      </Typography>

      <Stack sx={{ height: "100%", overflow: "scroll" }}>
        {groupList.map((item, idx) => {
          return (
            <GroupItem key={idx} elevation={0}>
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
            </GroupItem>
          );
        })}
      </Stack>
    </Box>
  );
};
export default ChatGroup;
