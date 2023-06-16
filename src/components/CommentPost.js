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
          position: "relative",
          padding: "10px",
          backgroundColor: "#E7F0F9",
          borderRadius: "10px",
          "&:before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "15px",
            width: 10,
            height: 10,
            bgcolor: "#E7F0F9",
            transform: "translate(-50%, -50%) rotate(45deg)",
            zIndex: 0,
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default CommentPost;
