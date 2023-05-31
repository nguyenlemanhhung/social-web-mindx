import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Link,
  Button,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Facebook, Google } from "iconsax-react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

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
        label="Tên đăng nhập"
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
        label="Mật khẩu"
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
          label="Ghi nhớ đăng nhập"
        />
        <Link href="#" underline="none">
          {"Quên mật khẩu ?"}
        </Link>
      </Box>

      <Button
        fullWidth
        sx={{
          borderRadius: "50px",
          mt: 3,
          padding: "10px",
          color: "#216fdb",
          border: "1px solid #216fdb",
          "&:hover": {
            background:
              "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
            color: "#fff",
          },
        }}
      >
        Đăng nhập
      </Button>

      <Divider sx={{ mt: 3, mb: 2 }}>
        <Typography variant="subtitle1">Or</Typography>
      </Divider>

      <Button
        variant="contained"
        fullWidth
        sx={{
          position: "relative",
          padding: "10px 0",
          mt: 2,
          backgroundColor: "#3b5998",
        }}
        startIcon={<Facebook size="32" color="#FF8A65" variant="Outline" />}
      >
        {/* <Facebook size="32" color="#FF8A65" variant="Outline" /> */}
        Đăng nhập bằng Facebook
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          position: "relative",
          padding: "10px 0",
          mt: 2,
          backgroundColor: "#3b5998",
        }}
        startIcon={<Google size="32" color="#FF8A65" variant="Outline" />}
      >
        Đăng nhập bằng Google
      </Button>
    </Box>
  );
};
export default SignInForm;
