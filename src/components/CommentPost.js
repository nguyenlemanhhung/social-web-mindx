import { Box, Typography } from "@mui/material";

const CommentPost = ({ avatar, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        margin: "10px 0",
      }}
    >
      <img
        src={avatar}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          marginRight: "5px",
        }}
      />
      <Typography
        sx={{
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default CommentPost;
