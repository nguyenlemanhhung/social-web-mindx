import { Button, Stack } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getAllPostsApi } from "../../../../services/api";
import NoAvatar from "../../../../assets/images/avatar.webp";
import PostComponent from "../../../../components/post";
import PostDetailsDialog from "./PostDetailsDialog";
import { useDispatch, useSelector } from "../../../../redux/store";
import { setPosts } from "../../../../redux/slices/post";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postData);

  const [openPostDetails, setOpenPostDetails] = useState(false);
  const [postDetails, setPostDetails] = useState(null);
  const [postList, setPostList] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await getAllPostsApi();
      if (response.data) {
        setPostList(response.data);
        dispatch(setPosts(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleOpenPostDetails = (item) => {
    setPostDetails(item);

    setOpenPostDetails(true);
  };
  const handleClosePostDetails = () => {
    setOpenPostDetails(false);
  };

  return (
    <Stack>
      {postList
        ? postList.map((item, idx) => {
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
      {postDetails ? (
        <PostDetailsDialog
          postDetails={postDetails}
          openPostDetails={openPostDetails}
          handleClosePostDetails={handleClosePostDetails}
        />
      ) : null}
    </Stack>
  );
};
export default Posts;
