import { Container, Typography, Box } from "@mui/material";

const LoadingPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={require("../../assets/icons/loading.gif")} />
      </Box>
    </Container>
  );
};
export default LoadingPage;
