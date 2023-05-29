import React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material/styles";

const ButtonItem = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #E7F3FF",
  borderRadius: "5px",
  color: "#b2b2b2",
  "&:hover": {
    backgroundColor: "#E7F3FF",
    color: "#222",
  },
});
const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img
            src={require("../../assets/images/banner.jpeg")}
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
              src={require("../../assets/images/profile-1.jpg")}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                margin: "20px 0 5px",
              }}
            >
              Evgen Ledo
            </Typography>
            <Typography variant="subtitle2">@Evgen Ledo</Typography>
          </Box>
        </Box>

        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={5}>
              <Typography sx={{ mb: 3 }}>Settings</Typography>
              <Stack spacing={2}>
                <ButtonItem component={Link} to="/profile/edit">
                  Edit Profile
                  <NavigateNextIcon />
                </ButtonItem>
                <ButtonItem>
                  Account Security
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
              <Typography sx={{ mb: 3 }}>Support</Typography>
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
