import React from "react";
import { styled } from "@mui/material/styles";
import StackItemStyle from "../../../components/StackItemStyle";
import AvatarSmallStyle from "../../../components/AvatarSmallStyle";
import { Box, Typography, Stack } from "@mui/material";

const Group = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        mt: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Nhóm tham gia
      </Typography>
      <Stack spacing={2}>
        <StackItemStyle elevation={0}>
          <AvatarSmallStyle
            src={require("../../../assets/images/feed-7.jpg")}
          />
          <Typography variant="body2">Group 1</Typography>
        </StackItemStyle>
        <StackItemStyle elevation={0}>
          <AvatarSmallStyle
            src={require("../../../assets/images/feed-7.jpg")}
          />
          <Typography variant="body2">Group 2</Typography>
        </StackItemStyle>
      </Stack>
    </Box>
  );
};
export default Group;
