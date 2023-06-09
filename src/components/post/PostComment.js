import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvataPostStyle from "../AvataPostStyle";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { LikeTag } from "iconsax-react";

const listComments = [
  {
    avatar: require("../../assets/images/profile-1.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../assets/images/profile-2.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../assets/images/profile-3.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../assets/images/profile-4.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../assets/images/profile-5.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
  {
    avatar: require("../../assets/images/profile-6.jpg"),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur",
  },
];

const PostComment = ({
  openComment,
  handleCloseComment,
  username,
  postContent,
  postImage,
}) => {
  return (
    <Dialog open={openComment} onClose={handleCloseComment}>
      <DialogTitle id="customized-dialog-title" sx={{ textAlign: "center" }}>
        Bài viết của {username}
        <IconButton
          aria-label="close"
          onClick={handleCloseComment}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
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
          <AvataPostStyle src={require("../../assets/images/profile-10.jpg")} />
          <Box>
            <Typography variant="subtitle2">@Muhaderhh</Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "10px",
              }}
            >
              Mudreh Kumbirai
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Typography variant="body2">{postContent}</Typography>
          <img
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "20px",
            }}
            src={postImage}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LikeTag size="24" color="#FF8A65" variant="Bulk" />
            <Typography variant="subtitle1">100 lươt thích</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">50 bình luận</Typography>
          </Box>
        </Box>
        <Divider sx={{ margin: "10px 0 20px" }} />
        {listComments.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "start",
              margin: "10px 0",
            }}
          >
            <img
              src={item.avatar}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <Typography
              sx={{
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            width: "100%",
          }}
        >
          <AvataPostStyle src={require("../../assets/images/profile-1.jpg")} />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "5px" }}>
              <FilledInput
                placeholder="Tell your friends about your thoughts..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SendIcon fontSize="small" />
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
export default PostComment;
