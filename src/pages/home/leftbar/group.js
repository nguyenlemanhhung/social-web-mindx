import React from "react";
import { styled } from "@mui/material/styles";
import StackItemStyle from "../../../components/StackItemStyle";
import AvatarSmallStyle from "../../../components/AvatarSmallStyle";
import { Box, Typography, Stack } from "@mui/material";
const listGroup = [
  {
    name: "[MINDX] I PNL-WEB67 T2-T6",
    avatar: require("../../../assets/images/mindx.jpeg"),
    newPost: 10,
  },
  {
    name: "Cộng đồng ReactJS - Việt Nam",
    avatar: require("../../../assets/images/ReactJS.jpeg"),
    newPost: 6,
  },
];
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
        {listGroup &&
          listGroup.map((item, idx) => {
            return (
              <StackItemStyle elevation={0} key={idx}>
                <AvatarSmallStyle src={item.avatar} />
                <Box>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
                    {item.newPost} bài viết mới
                  </Typography>
                </Box>
              </StackItemStyle>
            );
          })}
      </Stack>
    </Box>
  );
};
export default Group;
