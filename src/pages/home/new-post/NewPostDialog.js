import React, { useState } from "react";
import ButtonActionPost from "../../../components/ButtonActionPost";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  Divider,
  TextField,
  Stack,
} from "@mui/material";
import { CloseSquare } from "iconsax-react";
import { createPostApi } from "../../../services/api";

const NewPostDialog = ({ open, handleClose }) => {
  const [newPost, setNewPost] = useState({
    content: "",
  });

  const handleChangePost = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleCreatePost = async () => {
    try {
      await createPostApi(newPost);
      setNewPost(null);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">Bài viết mới</Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
            }}
          >
            <CloseSquare size="24" color="#FF8A65" />
          </IconButton>
        </Box>
        <Divider sx={{ margin: "10px 0" }} />
        <TextField
          onChange={handleChangePost}
          name="content"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          placeholder="Bạn đang nghĩ gì thế ?"
          sx={{
            marginBottom: "10px",
            "&.css-beyidw-MuiInputBase-root-MuiInput-root:before": {
              border: "none",
            },
            "&.css-beyidw-MuiInputBase-root-MuiInput-root:before": {
              borderBottom: "none",
            },
            "&.css-beyidw-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":
              {
                borderBottom: "none",
              },
          }}
        />
        <Stack direction="row" spacing={2}>
          <ButtonActionPost
            urlIcon={require("../../../assets/icons/picture.png")}
            name={"Photo"}
          />
          <ButtonActionPost
            urlIcon={require("../../../assets/icons/video.png")}
            name={"Video"}
          />
          <ButtonActionPost
            urlIcon={require("../../../assets/icons/polling.png")}
            name={"Polling"}
          />
        </Stack>
        <Button
          fullWidth
          onClick={handleCreatePost}
          sx={{
            backgroundColor: newPost && newPost.content ? "#E7F3FF" : "#E4E6EB",
            color: newPost && newPost.content ? "#656565" : "#BCC0C4",
            marginTop: "20px",
          }}
        >
          Đăng
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default NewPostDialog;
