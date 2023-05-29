import React from "react";
import {
  Box,
  IconButton,
  InputLabel,
  InputAdornment,
  TextField,
  Link,
  Button,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockIcon from "@mui/icons-material/Lock";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <TextField
        sx={{
          mb: 3,
        }}
        variant="outlined"
        fullWidth
        label="Email"
        id="signin-email"
        name="userEmail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        // onChange={(e) => handleChangeInput(e)}
      />
      <TextField
        sx={{
          mb: 3,
        }}
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Password"
        id="signin-password"
        name="userPassword"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        // onChange={(e) => handleChangeInput(e)}
      />
      <TextField
        sx={{
          mb: 3,
        }}
        variant="outlined"
        fullWidth
        type={showPasswordConfirm ? "text" : "password"}
        label="Password Confirm"
        id="signin-password"
        name="userPassword"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        // onChange={(e) => handleChangeInput(e)}
      />

      <Button
        fullWidth
        sx={{ borderRadius: "50px", mt: 3 }}
        variant="contained"
      >
        Sign Up
      </Button>

      <Divider sx={{ mt: 3, mb: 2 }}>Or</Divider>

      <Button
        variant="contained"
        fullWidth
        sx={{
          position: "relative",
          padding: "10px 0",
          mt: 2,
          backgroundColor: "#3b5998",
        }}
      >
        <FacebookIcon
          sx={{
            position: "absolute",
            left: "0",
            height: "100%",
            width: "auto",
            color: "#fff",
          }}
        />
        <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>
          Sign Up with Facebook
        </Typography>
      </Button>
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
          Sign Up with Google
        </Typography>
      </Button>
    </Box>
  );
};
export default SignUpForm;
