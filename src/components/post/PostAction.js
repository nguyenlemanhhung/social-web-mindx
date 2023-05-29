import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { styled } from "@mui/material/styles";
import PostComment from "./PostComment";

const IconButtonAction = styled(IconButton)({
  color: "#65676b",
  padding: "5px 20px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
});

const PostAction = () => {
  return (
    <Stack direction="row" spacing={3} maxWidth="md" mt={2}>
      <IconButtonAction>
        <FavoriteBorderIcon />
      </IconButtonAction>
      <PostComment />
      <IconButtonAction>
        <ShareOutlinedIcon />
      </IconButtonAction>
    </Stack>
  );
};
export default PostAction;
