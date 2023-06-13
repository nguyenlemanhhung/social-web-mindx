import { Button, Stack } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getAllPostsApi } from "../../../../services/api";
import NoAvatar from "../../../../assets/images/avatar.webp";
import PostComponent from "../../../../components/post";
import PostComment from "../../../../components/post/PostComment";

const Posts = () => {
  const [openComment, setOpenComment] = useState(false);

  const [posts, setPosts] = useState(null);

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

  const handleOpenComment = (item) => {
    console.log("item", item);
    setOpenComment(true);
  };
  const handleCloseComment = () => {
    setOpenComment(false);
  };

  return (
    <Stack>
      {posts
        ? posts.map((item, idx) => {
            return (
              <>
                <PostComponent
                  key={idx}
                  avatar={item.user.avatar ? item.user.avatar : NoAvatar}
                  username={item.user.username}
                  postContent={item.content}
                  postImage={item.image}
                  handleOpenComment={() => handleOpenComment(item)}
                />
                <PostComment
                  username={item.content}
                  openComment={openComment}
                  handleCloseComment={handleCloseComment}
                />
              </>
            );
          })
        : "Bạn chưa có bài viết nào"}
    </Stack>
  );
};
export default Posts;
