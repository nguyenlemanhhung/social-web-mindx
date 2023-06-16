import React from "react";
import {
  IconButton,
  Box,
  Typography,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import { CloseSquare, Gallery, Send } from "iconsax-react";
import AvatarSmallStyle from "../../../components/AvatarSmallStyle";

const ChatBox = ({ openChatBox, handleCloseChatBox, friendSelect }) => {
  return (
    <Box
      sx={{
        width: "300px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

        backgroundColor: "#FFF",
        display: openChatBox ? "block" : "none",
        position: "fixed",
        bottom: "0",
        right: "200px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #f2f2f2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AvatarSmallStyle src={friendSelect ? friendSelect.avatar : null} />
          <Typography>{friendSelect ? friendSelect.name : null}</Typography>
        </Box>
        <IconButton onClick={handleCloseChatBox}>
          <CloseSquare size="24" color="#697689" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          padding: "10px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderTop: "1px solid #f2f2f2",
        }}
      >
        <IconButton>
          <Gallery size="24" color="#697689" />
        </IconButton>
        <FilledInput
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <Send size="24" color="#697689" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};
export default ChatBox;
