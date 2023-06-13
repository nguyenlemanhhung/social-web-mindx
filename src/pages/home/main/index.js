import Story from "./story";
import FriendSuggestion from "./FriendSuggestion";
import NewPost from "./new-post";
import { Box, Stack } from "@mui/material";
import Posts from "./post";

const MainHomePage = () => {
  return (
    <Box
      sx={{
        maxWidth: "750px",
      }}
    >
      <Story />
      <NewPost />
      <FriendSuggestion />
      <Posts />
    </Box>
  );
};
export default MainHomePage;
