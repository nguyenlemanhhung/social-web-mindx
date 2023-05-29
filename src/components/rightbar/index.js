import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import FriendsList from "./friends-list";
import ChatGroup from "./chat-group";

const RightBar = () => {
  return (
    <Box
      sx={{
        height: "100%",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", height: "60%", backgroundColor: "red" }}></Box>
      <Box sx={{ width: "100%", height: "5%", backgroundColor: "blue" }}></Box>
      <Box
        sx={{ width: "100%", height: "35%", backgroundColor: "yellow" }}
      ></Box>
      {/* <FriendsList sx={{ height: "60%" }} />
      <Divider sx={{ margin: "10px 0", height: "5%" }} />
      <ChatGroup sx={{ height: "35%" }} /> */}
    </Box>
  );
};
export default RightBar;
