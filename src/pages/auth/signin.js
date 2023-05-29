import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SignInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <Link href="#" underline="none">
          {"Forget password?"}
        </Link>
      </Box>

      <Button
        fullWidth
        sx={{ borderRadius: "50px", mt: 3 }}
        variant="contained"
      >
        Sign In
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
          Logn In with Facebook
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
          Logn In with Google
        </Typography>
      </Button>
    </Box>
  );
};
export default SignInForm;
