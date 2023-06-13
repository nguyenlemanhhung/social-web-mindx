import { Button } from "@mui/material";

const ButtonActionPost = ({ text, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      fullWidth
      startIcon={icon}
      sx={{
        color: "#65676b",
        fontSize: "14px",
        fontWeight: "600",
        textTransform: "capitalize",
        padding: "10px 20px",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      {text}
    </Button>
  );
};
export default ButtonActionPost;
