import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  Box,
  Typography,
  Divider,
  FormControl,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import CommentPost from "../../../../components/CommentPost";
import { LikeTag, Send, CloseSquare } from "iconsax-react";
import NoAvatar from "../../../../assets/images/avatar.webp";
import { createCommentApi } from "../../../../services/api";
import AvataPostStyle from "../../../../components/AvataPostStyle";
import { InsertEmoticon } from "@mui/icons-material";
import useAuth from "../../../../hooks/useAuth";

const listComments = [
  {
    avatar: require("../../../../assets/images/profile-1.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../../../assets/images/profile-2.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../../../assets/images/profile-3.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../../../assets/images/profile-4.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../../../assets/images/profile-5.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../../../assets/images/profile-6.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
];

const PostDetailsDialog = ({
  openPostDetails,
  handleClosePostDetails,
  postDetails,
}) => {
  console.log("postDetails:", postDetails);
  const { user } = useAuth();

  const post_id = postDetails._id;

  const [comment, setComment] = useState("");

  const handleCreateComment = async () => {
    try {
      const data = {
        content: comment,
        image: "",
      };
      await createCommentApi(post_id, data);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={openPostDetails} onClose={handleClosePostDetails}>
      <DialogTitle
        id="customized-dialog-title"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="body1">Bài viết của</Typography>
        &nbsp;
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          {postDetails.user.username}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClosePostDetails}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseSquare size="24" color="#697689" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#fff" }} dividers>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <AvataPostStyle
            src={postDetails.user.avatar ? postDetails.user.avatar : NoAvatar}
          />
          <Box>
            <Typography variant="body1">{postDetails.user.username}</Typography>
            <Typography variant="subtitle1">2 giờ trước</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2">{postDetails.content}</Typography>
          <img
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "20px",
            }}
            src={postDetails.image}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LikeTag size="24" color="#FF8A65" variant="Bulk" />
            <Typography variant="subtitle1">100 lươt thích</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              {postDetails && postDetails.comments
                ? postDetails.comments.length
                : "0"}
              &nbsp;bình luận
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ margin: "10px 0 20px" }} />
        {postDetails && postDetails.comments && postDetails.comments.length
          ? postDetails.comments.map((item, idx) => (
              <CommentPost key={idx} text={item.content} />
            ))
          : "Chưa có bình luận nào..."}
      </DialogContent>
      <DialogActions sx={{ padding: "10px 20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            width: "100%",
          }}
        >
          <AvataPostStyle src={user && user.avatar ? user.avatar : NoAvatar} />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "5px" }}>
              <FilledInput
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                name="comment"
                placeholder="Viết bình luận..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleCreateComment} edge="end">
                      <Send size="24" color="#697689" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
export default PostDetailsDialog;
