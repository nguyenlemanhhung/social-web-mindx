import React from "react";

const ButtonSocial = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        padding: "10px 0",
        mt: 2,
        backgroundColor: "#dd4b39",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#902012",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 10px",
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "auto",
          backgroundColor: "#902012",
        }}
      >
        <img
          src={require("../../assets/icons/google.png")}
          style={{
            left: "0",
            height: "50%",
            width: "auto",
            color: "#fff",
          }}
        />
      </Box>
      <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>
        Logn In with Google
      </Typography>
    </Button>
  );
};
export default ButtonSocial;
