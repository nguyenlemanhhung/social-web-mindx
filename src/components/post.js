import React from "react";
import PostAction from "./post/PostAction";
import CardStyle from "./card-style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvataPostStyle from "./AvataPostStyle";

const Post = ({ avatar, username, postContent, postImage }) => {
  return (
    <CardStyle sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <AvataPostStyle src={avatar} />
        <Typography variant="body1">{username}</Typography>
      </Box>
      <Typography variant="body2">{postContent}</Typography>
      <img
        style={{
          width: "100%",
          marginTop: "10px",
          borderRadius: "20px",
        }}
        src={postImage}
      />
      <PostAction />
    </CardStyle>
  );
};
export default Post;
