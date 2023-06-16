import React, { useEffect, useState } from "react";
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

const EditPostDialog = ({
  dataPostEdit,
  openEditPost,
  handleCloseEditPost,
}) => {
  const [newData, setNewData] = useState({
    content: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    setNewData(dataPostEdit);
  }, []);

  const [imagePost, setImagePost] = useState();

  //   const handleChangePost = (e) => {
  //     const { name, value } = e.target;
  //     setNewData({ ...newPost, [name]: value });
  //   };
  //   const handleCreatePost = async () => {
  //     try {
  //       const data = {
  //         ...newPost,
  //         image: imagePost ? await handleUploadToStorage(imagePost) : "",
  //       };
  //       // console.log("data:", data);

  //       await createPostApi(data);
  //       setNewPost(null);
  //       handleCloseEditPost();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openEditPost}
      onClose={handleCloseEditPost}
    >
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
          <Typography variant="body1">Chỉnh sửa bài viết</Typography>
          <IconButton
            onClick={handleCloseEditPost}
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
          //   onChange={() => setNewData}
          name="content"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          value={newData ? newData.content : ""}
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
          {newData ? (
            <img
              src={newData.image}
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
            text={"Photo"}
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
          //   onClick={handleCreatePost}
          sx={{
            backgroundColor:
              newData && newData.content && imagePost ? "#E7F3FF" : "#E4E6EB",
            color: newData && newData.content ? "#656565" : "#BCC0C4",
            marginTop: "20px",
          }}
        >
          Cập nhật
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default EditPostDialog;
