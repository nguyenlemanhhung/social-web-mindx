import React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Grid,
  Stack,
  Button,
} from "@mui/material";

const Group = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        mt: 3,
      }}
    >
      <Typography sx={{ mb: 3 }}>Group</Typography>
      <Stack spacing={2}>
        <Button
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assets/images/feed-6.jpg")}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          <Typography>Group 1</Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assets/images/feed-7.jpg")}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          <Typography>Group 2</Typography>
        </Button>
      </Stack>
    </Box>
  );
};
export default Group;
