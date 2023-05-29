import React from "react";
import Story from "../components/story";
import NewPost from "../components/NewPost";
import Post from "../components/post";
import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid
        item
        md="3"
        sx={{
          height: "100%",
        }}
      >
        <LeftBar />
      </Grid>
      <Grid
        item
        md="7"
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
          <Post />
          <Post />
        </Box>
      </Grid>
      <Grid
        item
        md="2"
        sx={{
          height: "100%",
        }}
      >
        <RightBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
