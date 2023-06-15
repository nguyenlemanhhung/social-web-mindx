import React, { useState } from "react";
import { IconButton, Box, Button, Typography } from "@mui/material";
import { CloseSquare } from "iconsax-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ChatBox = () => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const handleOpen = () => setOpenChatBox(true);
  const handleClose = () => setOpenChatBox(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Box
        sx={{
          width: "300px",
          height: "300px",
          backgroundColor: "#E7F3FF",
          display: openChatBox ? "block" : "none",
          position: "fixed",
          bottom: "0",
          left: "0",
        }}
      >
        <IconButton onClick={handleClose}>
          <CloseSquare size="24" color="#697689" />
        </IconButton>
      </Box>
    </div>
  );
};
export default ChatBox;
