import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ButtonAuthStyle = styled(Button)({
  borderRadius: "50px",
  mt: 3,
  padding: "10px",
  color: "#216fdb",
  transition: "all .3s",
  position: "relative",
  overflow: "hidden",
  border: "1px solid #216fdb",
  zIndex: "10",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "0%",
    height: "100%",
    background: "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
    transition: "all .3s",
    zIndex: "-1",
  },
  "&:hover": {
    color: "#fff",
    "&::before": {
      width: "100%",
    },
  },
});
export default ButtonAuthStyle;
