import { Button, Stack } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getAllPostsApi } from "../../../../services/api";
import NoAvatar from "../../../../assets/images/avatar.webp";
import PostComponent from "../../../../components/post";
import PostDetailsDialog from "./PostDetailsDialog";

const Posts = () => {
  const [openPostDetails, setOpenPostDetails] = useState(false);
  const [postDetails, setPostDetails] = useState(null);
  const [posts, setPosts] = useState(null);
  console.log("posts", posts);
  const fetchPosts = useCallback(async () => {
    try {
      const response = await getAllPostsApi();
      if (response.data) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  });

  const handleOpenPostDetails = (item) => {
    // console.log("item", item);
    setPostDetails(item);

    setOpenPostDetails(true);
  };
  const handleClosePostDetails = () => {
    setOpenPostDetails(false);
  };

  return (
    <Stack>
      {posts
        ? posts.map((item, idx) => {
            return (
              <PostComponent
                key={idx}
                avatar={item.user.avatar ? item.user.avatar : NoAvatar}
                username={item.user.username}
                postContent={item.content}
                postImage={item.image}
                handleOpenComment={() => handleOpenPostDetails(item)}
              />
            );
          })
        : "Bạn chưa có bài viết nào"}

      <PostDetailsDialog
        postDetails={postDetails}
        openPostDetails={openPostDetails}
        handleClosePostDetails={handleClosePostDetails}
      />
    </Stack>
  );
};
export default Posts;
