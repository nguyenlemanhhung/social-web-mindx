import React from "react";
import Post from "../../components/post";
import { Box, Container, IconButton, Typography, Grid } from "@mui/material";
import FriendShortList from "./friend-shortlist";

const BodyWall = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FriendShortList />
        </Grid>
        <Grid item xs={8}>
          <Post />
          <Post />
          <Post />
        </Grid>
      </Grid>
    </Box>
  );
};
export default BodyWall;
