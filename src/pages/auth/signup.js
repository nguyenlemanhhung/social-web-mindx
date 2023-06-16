import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import ButtonAuthStyle from "../../components/ButtonAuthStyle";
import ButtonSocial from "../../components/ButtonSocial";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Google,
  Lock1,
  User,
  EyeSlash,
  Eye,
  Sms,
} from "iconsax-react";
import { isNull } from "lodash";

const SignUpForm = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formDataSignUp, setFormDataSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);

  function isValidEmail() {
    return /\S+@\S+\.\S+/.test(formDataSignUp.email);
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormDataSignUp({ ...formDataSignUp, [name]: value });
    if (!isValidEmail(e.target.value)) {
      setError("Email không hợp lệ !");
    } else {
      setError(null);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUp = async () => {
    try {
      await signup(
        formDataSignUp.username,
        formDataSignUp.email,
        formDataSignUp.password
      );

      console.log("dang thanh cong");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box>
      <Stack
        spacing={3}
        sx={{
          marginBottom: "30px",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          label="Tên đăng nhập"
          id="signin-username"
          name="username"
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
          required
          variant="outlined"
          fullWidth
          label="Email"
          id="signin-email"
          name="email"
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
          variant="outlined"
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Mật khẩu"
          id="signin-password"
          name="password"
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
          name="passwordConfirm"
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
                ></IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleChangeInput(e)}
        />
        {/* {error && error.length ? (
          <Typography
            variant="subtitle1"
            style={{ color: "red", paddingLeft: "20px" }}
          >
            - {error}
          </Typography>
        ) : null} */}
      </Stack>

      <ButtonAuthStyle onClick={handleSignUp} fullWidth>
        Đăng ký
      </ButtonAuthStyle>

      <Divider sx={{ mt: 3, mb: 2 }}>
        <Typography variant="subtitle1">Or</Typography>
      </Divider>
      <Stack spacing={2}>
        <ButtonSocial
          bgColor={"#2c58c3"}
          bgColorHover={"#385499"}
          icon={Facebook}
          text={"Đăng ký bằng Facebook"}
        />

        <ButtonSocial
          bgColor={"#ef4a37"}
          bgColorHover={"#cf4232"}
          icon={Facebook}
          text={"Đăng ký bằng Google"}
        />
      </Stack>
    </Box>
  );
};
export default SignUpForm;
