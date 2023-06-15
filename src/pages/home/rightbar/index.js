import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import FriendsList from "./friends-list";
import ChatGroup from "./chat-group";
import ChatBox from "./ChatBox";

const RightBar = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <FriendsList />
      <Divider sx={{ margin: "10px 0", height: "5%" }} />
      <ChatGroup />
      {/* Box chat */}
      <ChatBox />
    </Box>
  );
};
export default RightBar;
