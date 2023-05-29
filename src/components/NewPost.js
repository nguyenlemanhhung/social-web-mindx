import React from "react";
import CardStyle from "./card-style";
import {
  Box,
  TextField,
  Stack,
  Button,
  Typography,
  styled,
  FilledInput,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AvataPostStyle from "./AvataPostStyle";
import SendIcon from "@mui/icons-material/Send";

const ButtonStack = styled(Button)({
  color: "#fff",
  backgroundColor: "#f8f8f8",
  border: "1px solid #E7F3FF",
  borderRadius: "20px",
  padding: "5px 15px",
  "&:hover": {
    backgroundColor: "#E7F3FF",
  },
});
const ButtonAction = styled("img")({
  width: "20px",
  marginRight: "5px",
});
const TextButton = styled(Typography)({
  fontSize: "12px",
  textTransform: "capitalize",
});

const NewPost = () => {
  return (
    <CardStyle>
      <Box
        sx={{
          display: "flex",
          alignItems: "top",
        }}
      >
        <AvataPostStyle src={require("../assets/images/profile-1.jpg")} />
        <Box sx={{ width: "100%" }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
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

          <Stack direction="row" spacing={2}>
            <ButtonStack size="small">
              <ButtonAction src={require("../assets/icons/picture.png")} />
              <TextButton variant="subtitle2">Photo</TextButton>
            </ButtonStack>
            <ButtonStack size="small">
              <ButtonAction src={require("../assets/icons/video.png")} />
              <TextButton variant="subtitle2">Video</TextButton>
            </ButtonStack>
            <ButtonStack size="small">
              <ButtonAction src={require("../assets/icons/polling.png")} />
              <TextButton variant="subtitle2">Polling</TextButton>
            </ButtonStack>
          </Stack>
        </Box>
      </Box>
    </CardStyle>
  );
};
export default NewPost;
