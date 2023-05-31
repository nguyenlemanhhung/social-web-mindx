import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const StackItemStyle = styled(Paper)({
  elevation: 0,
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "5px",
  backgroundColor: "transparent",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#e7f3ff",
  },
});
export default StackItemStyle;
