import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowRight2 } from "iconsax-react";

const listFriendSuggestion = [
  {
    avatar: require("../../../assets/images/profile-10.jpg"),
    name: "John",
  },
  {
    avatar: require("../../../assets/images/profile-11.jpg"),
    name: "Andrew",
  },
  {
    avatar: require("../../../assets/images/profile-12.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-13.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-14.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-15.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-16.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-17.jpg"),
    name: "Rosaline",
  },
  {
    avatar: require("../../../assets/images/profile-10.jpg"),
    name: "John",
  },
  {
    avatar: require("../../../assets/images/profile-11.jpg"),
    name: "Andrew",
  },
];
const FriendSuggestion = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <Typography variant="body1">Có thể bạn quen !</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflow: "auto", marginTop: "10px" }}
      >
        {listFriendSuggestion.map((item, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#E7F3FF",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                },
                "&:hover > .stack-button": {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  marginRight: "10px",
                }}
              >
                <img
                  src={item.avatar}
                  style={{ width: "80px", borderRadius: "10px" }}
                />
                <Typography variant="body2" component="div">
                  {item.name}
                </Typography>
              </Box>
              <Stack
                className="stack-button"
                spacing={2}
                sx={{
                  display: "none",
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    background:
                      "linear-gradient(112.14deg, rgb(52, 97, 255) 1.15%, rgb(152, 72, 255) 73.09%)",
                    borderRadius: "5px",
                    width: "max-content",
                  }}
                >
                  Kết bạn
                </Button>
                <Button
                  sx={{
                    border: "1px solid #b2b2b2",
                    color: "#656565",
                    width: "max-content",
                  }}
                >
                  Bỏ qua
                </Button>
              </Stack>
            </Box>
          );
        })}
        <IconButton
          sx={{
            width: "30px",
            height: "30px",
            position: "sticky",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            background:
              "linear-gradient(112.14deg, rgb(52, 97, 255) 1.15%, rgb(152, 72, 255) 73.09%)",
            // "&:hover": {
            //   backgroundColor: "#e7f3ff",
            // },
          }}
        >
          <ArrowRight2 size="24" color="#FFF" />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default FriendSuggestion;
