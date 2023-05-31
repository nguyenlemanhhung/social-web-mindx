import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { GalleryEdit, Edit2 } from "iconsax-react";

const EditProfile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen}>scroll=paper</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Chỉnh sửa thông tin cá nhân
        </DialogTitle>
        <DialogContent dividers="paper">
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
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>

            <img
              src={require("../../assets/images/profile-1.jpg")}
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
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
            <img
              src={require("../../assets/images/banner.jpeg")}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: "#E7F3FF",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                marginBottom: "10px",
              }}
            >
              <Typography variant="body2">Tên đăng nhập</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                }}
              >
                <Typography variant="body2">Evgen Ledo</Typography>
                <IconButton>
                  <Edit2 color="#FF8A65" variant="Bold" size="16" />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                marginBottom: "10px",
              }}
            >
              <Typography variant="body2">Email</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                }}
              >
                <Typography variant="body2">EvgenLedo@gmail.com</Typography>
                <IconButton>
                  <Edit2 color="#FF8A65" variant="Bold" size="16" />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                marginBottom: "10px",
              }}
            >
              <Typography variant="body2">Email</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                }}
              >
                <Typography variant="body2">EvgenLedo@gmail.com</Typography>
                <IconButton>
                  <Edit2 color="#FF8A65" variant="Bold" size="16" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button variant="contained" onClick={handleClose}>
            Lưu thay đổi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditProfile;
