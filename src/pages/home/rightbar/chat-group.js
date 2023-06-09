import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import StackItemStyle from "../../../components/StackItemStyle";
import AvatarSmallStyle from "../../../components/AvatarSmallStyle";

const groupList = [
  {
    name: "web 67",
    avatar: require("../../../assets/images/group-code.png"),
  },
  {
    name: "Cú đêm",
    avatar: require("../../../assets/images/group-cu-dem.png"),
  },
  {
    name: "Code toàn Bug",
    avatar: require("../../../assets/images/group-bug.jpeg"),
  },
  {
    name: "CIJS81(NX)",
    avatar: require("../../../assets/images/mindx.jpeg"),
  },
  {
    name: "group chat 5",
    avatar: require("../../../assets/images/feed-3.jpg"),
  },
  {
    name: "group chat 6",
    avatar: require("../../../assets/images/feed-3.jpg"),
  },
];

const ChatGroup = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "10px",
        height: "30%",
      }}
    >
      <Box
        sx={{
          marginBottom: "10px",
          position: "sticky",
          top: "0",
          display: "flex",
          alignItem: "center",
        }}
      >
        <Typography variant="body1">Nhóm trò chuyện</Typography>
      </Box>

      <Stack spacing={1} sx={{ height: "100%", overflow: "scroll" }}>
        {groupList.map((item, idx) => {
          return (
            <StackItemStyle key={idx} elevation={0}>
              <AvatarSmallStyle src={item.avatar} />
              <Typography variant="body2">{item.name}</Typography>
            </StackItemStyle>
          );
        })}
      </Stack>
    </Box>
  );
};
export default ChatGroup;
