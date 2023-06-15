import React, { useState } from "react";
import CardStyle from "../../../../components/card-style";
import { Box, Button, Stack } from "@mui/material";
import AvataPostStyle from "../../../../components/AvataPostStyle";
import NewPostDialog from "./NewPostDialog";
import useAuth from "../../../../hooks/useAuth";
import ButtonActionNewPost from "../../../../components/ButtonActionNewPost";
import { Gallery, VideoSquare, ChartSquare } from "iconsax-react";

const NewPost = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

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
        <AvataPostStyle
          src={
            user && user.avatar
              ? user.avatar
              : require("../../../../assets/images/avatar.webp")
          }
        />
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
          <Stack direction="row" spacing={2}>
            <ButtonActionNewPost
              type={"button"}
              name={"photo"}
              icon={<Gallery size="24" color="#549bff" variant="Bulk" />}
              text={"Ảnh"}
              onClick={handleClickOpen}
            />
            <ButtonActionNewPost
              name={"video"}
              icon={<VideoSquare size="24" color="#fd3b4f" variant="Bold" />}
              text={"Video"}
              onClick={handleClickOpen}
            />
            <ButtonActionNewPost
              name={"polling"}
              icon={<ChartSquare size="24" color="#9d9fe8" variant="Bulk" />}
              text={"Khảo sát"}
              onClick={handleClickOpen}
            />
          </Stack>
        </Box>
      </Box>
    </CardStyle>
  );
};
export default NewPost;
