import React from "react";
import LeftBar from "./leftbar";
import RightBar from "./rightbar";
import MainHomePage from "./main";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={3} sx={{ height: "100%" }}>
        <LeftBar />
      </Grid>

      <Grid
        item
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <MainHomePage />
      </Grid>

      <Grid
        item
        md={2}
        sx={{
          height: "100%",
        }}
      >
        <RightBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
