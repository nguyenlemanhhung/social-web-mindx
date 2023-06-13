import { Button } from "@mui/material";

const ButtonActionNewPost = ({ onChange, text, icon, name, type }) => {
  return (
    <Button
      size="small"
      component="label"
      startIcon={icon}
      sx={{
        color: "#656565",
        backgroundColor: "#f8f8f8",
        border: "1px solid #E7F3FF",
        borderRadius: "20px",
        padding: "5px 15px",
        fontSize: "12px",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#E7F3FF",
        },
      }}
    >
      {text}
      <input
        name={name}
        hidden
        accept="image/*"
        multiple
        type={type}
        onChange={onChange}
      />
    </Button>
  );
};
export default ButtonActionNewPost;
