import React from "react";
import PostAction from "./post/PostAction";
import CardStyle from "./card-style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvataPostStyle from "./AvataPostStyle";

const Post = () => {
  return (
    <CardStyle sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <AvataPostStyle src={require("../assets/images/profile-10.jpg")} />
        <Box>
          <Typography variant="subtitle2">@Muhaderhh</Typography>
          <Typography variant="body1">Mudreh Kumbirai</Typography>
        </Box>
      </Box>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <img
        style={{
          width: "100%",
          marginTop: "10px",
          borderRadius: "20px",
        }}
        src={require("../assets/images/feed-2.jpg")}
      />
      <PostAction />
    </CardStyle>
  );
};
export default Post;
