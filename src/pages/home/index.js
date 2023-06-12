import React from "react";
import Story from "./story";
import NewPost from "./new-post";
import Post from "../../components/post";
import LeftBar from "./leftbar";
import RightBar from "./rightbar";
import { Grid, Box } from "@mui/material";
import FriendSuggestion from "./FriendSuggestion";

const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid
        item
        md={3}
        sx={{
          height: "100%",
        }}
      >
        <LeftBar />
      </Grid>
      <Grid
        item
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "750px",
            overflow: "scroll",
          }}
        >
          <Story />
          <NewPost />
          <FriendSuggestion />
          <Post />
          <Post />
          <Post />
          <Post />
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sx={{
          height: "100vh",
          position: "sticky",
          top: "70px",
          paddingBottom: "70px",
        }}
      >
        <RightBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
