import { Typography, Button, styled } from "@mui/material";

const ButtonStack = styled(Button)({
  color: "#fff",
  backgroundColor: "#f8f8f8",
  border: "1px solid #E7F3FF",
  borderRadius: "20px",
  padding: "5px 15px",
  "&:hover": {
    backgroundColor: "#E7F3FF",
  },
});
const ButtonAction = styled("img")({
  width: "20px",
  marginRight: "5px",
});
const TextButton = styled(Typography)({
  fontSize: "12px",
  textTransform: "capitalize",
});

const ButtonActionPost = ({ name, urlIcon }) => {
  return (
    <ButtonStack size="small">
      <ButtonAction src={urlIcon} />
      <TextButton variant="subtitle2">{name}</TextButton>
    </ButtonStack>
  );
};
export default ButtonActionPost;
