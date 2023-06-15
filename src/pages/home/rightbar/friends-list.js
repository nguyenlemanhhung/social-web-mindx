import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import StackItemStyle from "../../../components/StackItemStyle";
import AvatarSmallStyle from "../../../components/AvatarSmallStyle";
import CircleIcon from "@mui/icons-material/Circle";

const friends = [
  {
    name: "Xuân Nguyễn",
    avatar: require("../../../assets/images/profile-1.jpg"),
    isOnline: true,
    offlineTime: "",
  },
  {
    name: "Cường Phạm",
    avatar: require("../../../assets/images/profile-2.jpg"),
    isOnline: false,
    offlineTime: "1 giờ trước",
  },
  {
    name: "Thảo Vit",
    avatar: require("../../../assets/images/profile-3.jpg"),
    isOnline: false,
    offlineTime: "30 phút trước",
  },
  {
    name: "Lam Tran",
    avatar: require("../../../assets/images/profile-4.jpg"),
    isOnline: true,
    offlineTime: "",
  },
  {
    name: "Thuỳ Dương",
    avatar: require("../../../assets/images/profile-5.jpg"),
    isOnline: false,
    offlineTime: "15 phút trước",
  },
  {
    name: "Nhật Minh",
    avatar: require("../../../assets/images/profile-6.jpg"),
    isOnline: true,
    offlineTime: "",
  },
  {
    name: "Hà Thu",
    avatar: require("../../../assets/images/profile-7.jpg"),
    isOnline: true,
    offlineTime: "",
  },
  {
    name: "Nguyễn Khánh",
    avatar: require("../../../assets/images/profile-8.jpg"),
    isOnline: false,
    offlineTime: "2 giờ trước",
  },
  {
    name: "Han Tam",
    avatar: require("../../../assets/images/profile-9.jpg"),
    isOnline: false,
    offlineTime: "2 giờ trước",
  },
  {
    name: "Thanh Thu",
    avatar: require("../../../assets/images/profile-10.jpg"),
    isOnline: true,
    offlineTime: "",
  },
];

const FriendsList = ({ handleOpenChatBox, item }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "50%",
        padding: "10px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", position: "sticky", top: "0" }}
      >
        Bạn bè
      </Typography>

      <Stack
        spacing={1}
        sx={{
          overflow: "scroll",
          height: "100%",
        }}
      >
        {friends.map((item, idx) => (
          <StackItemStyle
            key={idx}
            elevation={0}
            onClick={() => handleOpenChatBox(item)}
          >
            <AvatarSmallStyle
              src={item.avatar}
              style={{
                border: `2px solid ${item.isOnline ? "#7ed882" : "#b2b2b2"}`,
              }}
            />

            <Box>
              <Typography variant="body2">{item.name}</Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  borderRadius: "10px",
                  color: item.isOnline ? "#58c265" : "#656565",
                  lineHeight: "1",
                }}
              >
                {item.isOnline ? "online" : `${item.offlineTime}`}
              </Typography>
            </Box>
          </StackItemStyle>
        ))}
      </Stack>
    </Box>
  );
};
export default FriendsList;
