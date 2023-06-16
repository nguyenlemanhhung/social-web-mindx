import React, { useState } from "react";
import { Typography, Divider, Box, Button } from "@mui/material";
import FriendsList from "./friends-list";
import ChatGroup from "./chat-group";
import ChatBox from "./ChatBox";

const RightBar = () => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const [friendSelect, setFriendSelect] = useState(null);

  const handleOpenChatBox = (item) => {
    setFriendSelect(item);
    setOpenChatBox(true);
  };
  const handleCloseChatBox = () => setOpenChatBox(false);
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <FriendsList handleOpenChatBox={handleOpenChatBox} />
      <Divider sx={{ margin: "10px 0", height: "5%" }} />
      <ChatGroup />
      {/* Box chat */}

      <ChatBox
        friendSelect={friendSelect}
        openChatBox={openChatBox}
        handleCloseChatBox={handleCloseChatBox}
      />
    </Box>
  );
};
export default RightBar;
