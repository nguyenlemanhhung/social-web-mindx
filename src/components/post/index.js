import React from "react";
import CardStyle from "../card-style";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import AvataPostStyle from "../AvataPostStyle";
import { More, LikeTag } from "iconsax-react";
import { Edit2, Trash } from "iconsax-react";
import { Like1, MessageText1 } from "iconsax-react";
import ButtonActionPost from "../ButtonActionPost";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import useAuth from "../../hooks/useAuth";

const PostComponent = (props) => {
  const {
    countComments,
    avatar,
    username,
    postContent,
    postImage,
    handleOpenPostDetails,
    handleOpenEditPost,
  } = props;

  const { user } = useAuth();
  const isAuthor = user && user.username === username;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CardStyle sx={{ padding: "20px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          marginBottom: "15px",
          paddingRight: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E7F3FF",
            padding: "5px 10px 5px 20px",
            borderBottomRightRadius: "20px",
            borderTopRightRadius: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <AvataPostStyle src={avatar} />
          <Box>
            <Typography variant="body1">{username}</Typography>
            <Typography variant="subtitle1">2 giờ trước</Typography>
          </Box>
        </Box>
        <Box>
          {isAuthor ? (
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "post-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <More size="24" color={open ? "#ff8a65" : "#697689"} />
            </IconButton>
          ) : null}

          <Menu
            id="post-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleOpenEditPost}>
              <Edit2 size="16" color="#FF8A65" variant="Outline" />
              <Typography variant="body2" ml={1}>
                Chỉnh sửa bài viết
              </Typography>
            </MenuItem>
            <MenuItem>
              <Trash size="16" color="#FF8A65" variant="Outline" />
              <Typography variant="body2" ml={1}>
                {" "}
                Xoá bài viết
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Typography variant="body2">{postContent}</Typography>
        <img
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "20px",
          }}
          src={postImage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LikeTag size="24" color="#FF8A65" variant="Bulk" />
          <Typography variant="subtitle1">100 lươt thích</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">{countComments} bình luận</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          margin: "10px 0",
        }}
      />
      <Grid container spacing={2} sx={{ padding: "0 20px" }}>
        <Grid item xs={4}>
          <ButtonActionPost
            icon={<Like1 size="24" color="#65676b" />}
            text={"Thích"}
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonActionPost
            icon={<MessageText1 size="24" color="#65676b" />}
            text={"Bình luận"}
            onClick={handleOpenPostDetails}
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonActionPost
            icon={<ShareOutlinedIcon sx={{ color: "#65676b" }} />}
            text={"Chia sẻ"}
          />
        </Grid>
      </Grid>
    </CardStyle>
  );
};
export default PostComponent;
