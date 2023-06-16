import { Box, Typography } from "@mui/material";
import AvatarSmallStyle from "./AvatarSmallStyle";

const CommentPost = ({ avatar, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        margin: "10px 0",
      }}
    >
      <AvatarSmallStyle src={avatar} />
      <Typography
        variant="body2"
        sx={{
          padding: "10px",
          backgroundColor: "#E7F0F9",
          borderRadius: "10px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default CommentPost;
