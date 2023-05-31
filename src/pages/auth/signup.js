import React, { useCallback, useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import {
  Facebook,
  Google,
  Lock1,
  User,
  EyeSlash,
  Eye,
  Sms,
} from "iconsax-react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
  });
  console.log("formData", formData);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignIn = useCallback(async () => {
    try {
    } catch (error) {}
  });
  return (
    <Box>
      <TextField
        sx={{
          mb: 3,
        }}
        variant="outlined"
        fullWidth
        label="Tên đăng nhập"
        id="signin-username"
        name="userName"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <User color="#b2b2b2" variant="Bold" size="16" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleChangeInput(e)}
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
              <Sms color="#b2b2b2" variant="Bold" size="16" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleChangeInput(e)}
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
              <Lock1 color="#b2b2b2" variant="Bold" size="16" />
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
                  <EyeSlash color="#b2b2b2" size="16" variant="Bold" />
                ) : (
                  <Eye color="#b2b2b2" size="16" variant="Bold" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleChangeInput(e)}
      />
      <TextField
        sx={{
          mb: 3,
        }}
        variant="outlined"
        fullWidth
        type={showPasswordConfirm ? "text" : "password"}
        label="Xác thực mật khẩu"
        id="signin-password-confirm"
        name="userPasswordConfirm"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock1 color="#b2b2b2" variant="Bold" size="16" />
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
                {/* {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )} */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleChangeInput(e)}
      />

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
        Đăng ký
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
          border: "#3b5998",
        }}
        startIcon={<Facebook size="32" color="#FF8A65" variant="Outline" />}
      >
        Đăng ký bằng Facebook
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
export default SignUpForm;
