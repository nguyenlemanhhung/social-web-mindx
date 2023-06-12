import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { handleUploadToStorage } from "../../utils/uploadFile";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { GalleryEdit, Edit2 } from "iconsax-react";
import useAuth from "../../hooks/useAuth";
import { wait } from "@testing-library/user-event/dist/utils";
import { updateProfileApi } from "../../services/api";

const EditItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "rgba(25, 118, 210, 0.1)",
});

const EditProfile = ({ handleClose, open }) => {
  const { user } = useAuth();

  const [editData, setEditData] = useState({
    avatar: "",
    banner: "",
    username: "",
    phonenumber: "",
    signature: "",
  });
  const [avatarImage, setAvatarImage] = useState();
  const [bannerImage, setBannerImage] = useState();

  const handleAddData = async () => {
    try {
      const data = {
        ...editData,
        avatar: avatarImage ? await handleUploadToStorage(avatarImage) : "",
        banner: bannerImage ? await handleUploadToStorage(bannerImage) : "",
      };
      console.log("data:", data);
      console.log("editdata:", editData);

      await updateProfileApi(data);
      handleClose();

      alert("cập  nhật thành công");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setEditData({
        ...editData,
        avatar: user.avatar,
        banner: user.banner,
        username: user.username,
        phonenumber: user.phonenumber,
        signature: user.signature,
      });
    }
  }, [setEditData, user]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper">
      <DialogTitle
        sx={{
          backgroundColor: "#E7F3FF",
        }}
      >
        Chỉnh sửa thông tin cá nhân
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography>Hình đại diện</Typography>
              <Button
                size="small"
                variant="outlined"
                component="label"
                startIcon={<GalleryEdit color="#FF8A65" variant="Bold" />}
              >
                Chỉnh sửa
                <input
                  name="avatar"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => setAvatarImage(e.target.files[0])}
                />
              </Button>
            </Box>

            <img
              src={
                avatarImage
                  ? URL.createObjectURL(avatarImage)
                  : editData && editData.avatar
                  ? editData.avatar
                  : require("../../assets/images/avatar.webp")
              }
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography>Hình nền</Typography>
              <Button
                size="small"
                variant="outlined"
                component="label"
                startIcon={<GalleryEdit color="#FF8A65" variant="Bold" />}
              >
                Chỉnh sửa
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => setBannerImage(e.target.files[0])}
                />
              </Button>
            </Box>
            <img
              src={
                bannerImage
                  ? URL.createObjectURL(bannerImage)
                  : editData && editData.banner
                  ? editData.banner
                  : require("../../assets/images/banner.jpeg")
              }
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>

          <TextField
            onChange={(e) => handleChangeInput(e)}
            value={editData.username}
            variant="outlined"
            fullWidth
            type="text"
            label="Tên đăng nhập"
            id="edit-username"
            name="username"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton size="small">
                    <Edit2 color="#FF8A65" variant="Bold" size="16" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={(e) => handleChangeInput(e)}
            value={editData.phonenumber}
            variant="outlined"
            fullWidth
            type="text"
            label="Số điện thoại"
            id="edit-phonenumber"
            name="phonenumber"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    size="small"

                    // onClick={handleClickShowPassword}
                  >
                    <Edit2 color="#FF8A65" variant="Bold" size="16" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={(e) => handleChangeInput(e)}
            value={editData.signature}
            variant="outlined"
            fullWidth
            type="text"
            label="Chữ ký"
            id="edit-signature"
            name="signature"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton size="small">
                    <Edit2 color="#FF8A65" variant="Bold" size="16" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: "#E7F3FF",
        }}
      >
        <Button onClick={handleClose}>Huỷ</Button>
        <Button variant="contained" onClick={handleAddData}>
          Lưu thay đổi
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditProfile;
