import React from "react";
import CardStyle from "../../../components/card-style";
import StackButton from "./StackButton";
import { Box, Button } from "@mui/material";
import AvataPostStyle from "../../../components/AvataPostStyle";
import NewPostDialog from "./NewPostDialog";

const NewPost = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardStyle>
      <Box
        sx={{
          display: "flex",
          alignItems: "top",
        }}
      >
        <AvataPostStyle src={require("../../../assets/images/profile-1.jpg")} />
        <NewPostDialog open={open} handleClose={handleClose} />
        <Box sx={{ width: "100%" }}>
          <Button
            onClick={handleClickOpen}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              borderRadius: "20px",
              backgroundColor: "#F8F8F8",
              padding: "10px 20px",
              color: "#656565",
              textTransform: "capitalize",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#E0E3E7",
              },
            }}
          >
            Bạn đang nghĩ gì thế ?
          </Button>
          <StackButton />
        </Box>
      </Box>
    </CardStyle>
  );
};
export default NewPost;
