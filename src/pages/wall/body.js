import React, { useCallback, useEffect, useState } from "react";
import Post from "../../components/post";
import { Box, Stack, Grid } from "@mui/material";
import FriendShortList from "./friend-shortlist";
import { getAllPostsByCurrentUserApi } from "../../services/api";
import NoAvatar from "../../assets/images/avatar.webp";

const BodyWall = () => {
  const [posts, setPosts] = useState(null);
  console.log("post by user: ", posts);
  const fetchPosts = useCallback(async () => {
    try {
      const response = await getAllPostsByCurrentUserApi();
      if (response.data) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FriendShortList />
        </Grid>
        <Grid item xs={8}>
          <Stack>
            {posts
              ? posts.map((item, idx) => {
                  return (
                    <Post
                      key={idx}
                      avatar={item.user.avatar ? item.user.avatar : NoAvatar}
                      username={item.user.username}
                      postContent={item.content}
                      postImage={item.image}
                    />
                  );
                })
              : "Bạn chưa có bài viết nào"}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BodyWall;
