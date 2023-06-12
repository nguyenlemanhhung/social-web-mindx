import React from "react";
import CardStyle from "../../components/card-style";
import { Box, Typography, Grid, Link } from "@mui/material";

const listFriends = [
  {
    avatar: require("../../assets/images/profile-13.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-14.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-15.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-16.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-17.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-18.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-19.jpg"),
    name: "Evgen Ledo",
  },
  {
    avatar: require("../../assets/images/profile-20.jpg"),
    name: "Evgen Ledo",
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
          <Typography>Bạn bè của bạn</Typography>
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
            <Typography>Tất cả</Typography>
          </Link>
        </Box>
        <Typography variant="subtitle2" sx={{ mb: 3 }}>
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
                <Typography variant="subtitle2">{item.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </CardStyle>
  );
};
export default FriendShortList;
