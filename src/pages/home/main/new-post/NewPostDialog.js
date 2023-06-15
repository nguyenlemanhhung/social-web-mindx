import React, { useState } from "react";
import { handleUploadToStorage } from "../../../../utils/uploadFile";
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
import { createPostApi } from "../../../../services/api";
import { Gallery, VideoSquare, ChartSquare } from "iconsax-react";
import ButtonActionNewPost from "../../../../components/ButtonActionNewPost";

const NewPostDialog = ({ open, handleClose }) => {
  const [newPost, setNewPost] = useState({
    content: "",
    image: "",
    video: "",
  });

  const [imagePost, setImagePost] = useState();

  const handleChangePost = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleCreatePost = async () => {
    try {
      const data = {
        ...newPost,
        image: imagePost ? await handleUploadToStorage(imagePost) : "",
      };
      // console.log("data:", data);

      await createPostApi(data);
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
            <CloseSquare size="24" color="#697689" />
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
              borderBottom: "none",
            },

            "&.css-beyidw-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":
              {
                borderBottom: "none",
              },
          }}
        />
        <Box
          sx={{
            mb: 2,
          }}
        >
          {imagePost ? (
            <img
              src={URL.createObjectURL(imagePost)}
              style={{
                width: "auto",
                height: "100px",
                borderRadius: "10px",
              }}
            />
          ) : (
            ""
          )}
        </Box>
        <Stack direction="row" spacing={2}>
          <ButtonActionNewPost
            type={"file"}
            name={"photo"}
            icon={<Gallery size="24" color="#549bff" variant="Bulk" />}
            text={"Ảnh"}
            onChange={(e) => setImagePost(e.target.files[0])}
          />
          <ButtonActionNewPost
            type={"file"}
            name={"video"}
            icon={<VideoSquare size="24" color="#fd3b4f" variant="Bold" />}
            text={"Video"}
            // onChange={(e) => setImagePost(e.target.files[0])}
          />
          <ButtonActionNewPost
            type={"file"}
            name={"polling"}
            icon={<ChartSquare size="24" color="#9d9fe8" variant="Bulk" />}
            text={"Khảo sát"}
            // onChange={(e) => setImagePost(e.target.files[0])}
          />
        </Stack>
        <Button
          fullWidth
          onClick={handleCreatePost}
          sx={{
            backgroundColor: newPost && newPost.content ? "#E7F3FF" : "#E4E6EB",
            color: newPost && newPost.content ? "#ff8a65" : "#697689",
            fontWeight: newPost && newPost.content ? "500" : "300",
            boxShadow:
              newPost && newPost.content
                ? "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                : "none",
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
