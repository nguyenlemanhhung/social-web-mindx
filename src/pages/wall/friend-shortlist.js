import React from "react";
import CardStyle from "../../components/card-style";
import { Box, Typography, Grid, Link } from "@mui/material";

const listFriends = [
  {
    name: "Xuân Nguyễn",
    avatar: require("../../assets/images/profile-1.jpg"),
  },
  {
    name: "Cường Phạm",
    avatar: require("../../assets/images/profile-2.jpg"),
  },
  {
    name: "Thảo Vit",
    avatar: require("../../assets/images/profile-3.jpg"),
  },
  {
    name: "Lam Tran",
    avatar: require("../../assets/images/profile-4.jpg"),
  },
  {
    name: "Thuỳ Dương",
    avatar: require("../../assets/images/profile-5.jpg"),
  },
  {
    name: "Nhật Minh",
    avatar: require("../../assets/images/profile-6.jpg"),
  },
  {
    name: "Hà Thu",
    avatar: require("../../assets/images/profile-7.jpg"),
  },
  {
    name: "Nguyễn Khánh",
    avatar: require("../../assets/images/profile-8.jpg"),
  },
];

const FriendShortList = () => {
  return (
    <CardStyle>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Bạn bè của bạn</Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              padding: "5px 20px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#e7f3ff",
              },
            }}
          >
            <Typography variant="subtitle1">Tất cả</Typography>
          </Link>
        </Box>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          29 người
        </Typography>
        <Grid container spacing={2}>
          {listFriends.map((item, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <img
                  alt="avatar-friend"
                  src={item.avatar}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
                <Typography variant="subtitle1">{item.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </CardStyle>
  );
};
export default FriendShortList;
