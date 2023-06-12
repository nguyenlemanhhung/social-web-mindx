import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material/styles";
import EditProfile from "./edit";
import useAuth from "../../hooks/useAuth";

const ButtonItem = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #E7F3FF",
  borderRadius: "5px",
  color: "#b2b2b2",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#E7F3FF",
    color: "#222",
  },
});
const Profile = () => {
  const { user } = useAuth();

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
    <Container maxWidth="lg">
      <Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img
            src={
              user && user.banner
                ? user.banner
                : require("../../assets/images/banner.jpeg")
            }
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "10px",
              // ratio: "16:9",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            position: "relative",
            transform: "translateY(-50%)",
            left: "30px",
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              style={{
                width: "100px",
                borderRadius: "30%",
                border: "10px solid #f8f8f8",
                marginRight: "10px",
              }}
              src={
                user && user.avatar
                  ? user.avatar
                  : require("../../assets/images/avatar.webp")
              }
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                margin: "20px 0 5px",
              }}
            >
              {user && user.username}
            </Typography>
            <Typography variant="subtitle2">{user && user.email}</Typography>
          </Box>
        </Box>

        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={5}>
              <Typography sx={{ mb: 3 }}>Cài đặt </Typography>
              <Stack spacing={2}>
                <EditProfile handleClose={handleClose} open={open} />
                <ButtonItem onClick={handleClickOpen}>
                  Chỉnh sửa thông tin cá nhân
                  <NavigateNextIcon />
                </ButtonItem>
                <ButtonItem>
                  Bảo mật tài khoản
                  <NavigateNextIcon />
                </ButtonItem>
                <ButtonItem>
                  Change Language
                  <NavigateNextIcon />
                </ButtonItem>
              </Stack>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={5}>
              <Typography sx={{ mb: 3 }}>Hỗ trợ</Typography>
              <Stack spacing={2}>
                <ButtonItem>
                  Help and Support
                  <NavigateNextIcon />
                </ButtonItem>
                <ButtonItem>
                  Help and Support
                  <NavigateNextIcon />
                </ButtonItem>
                <ButtonItem>
                  Help and Support
                  <NavigateNextIcon />
                </ButtonItem>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default Profile;
