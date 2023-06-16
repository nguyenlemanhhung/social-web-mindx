import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ButtonAuthStyle from "../../components/ButtonAuthStyle";
import ButtonSocial from "../../components/ButtonSocial";
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
  Stack,
} from "@mui/material";
import {
  Facebook,
  Google,
  EyeSlash,
  Eye,
  Sms,
  Lock1,
  Send,
} from "iconsax-react";

const SignInForm = () => {
  const { signin } = useAuth();

  const [formDataSignIn, setFormDataSignIn] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormDataSignIn({ ...formDataSignIn, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      await signin(formDataSignIn.email, formDataSignIn.password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Stack spacing={3} sx={{ marginBottom: "30px" }}>
        <TextField
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#3D70B2",
                }}
              />
            }
            label={
              <Typography variant="subtitle1" style={{ color: "#2979ff" }}>
                Ghi nhớ đăng nhập
              </Typography>
            }
          />
          <Link
            href="#"
            variant="subtitle1"
            sx={{
              color: "#3D70B2",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "#2979ff",
              },
            }}
          >
            {"Quên mật khẩu ?"}
          </Link>
        </Box>
      </Stack>

      <ButtonAuthStyle fullWidth onClick={handleSignIn}>
        Đăng nhập
      </ButtonAuthStyle>

      <Divider sx={{ mt: 3, mb: 2 }}>
        <Typography variant="subtitle1">Or</Typography>
      </Divider>
      <Stack spacing={2}>
        <ButtonSocial
          bgColor={"#2c58c3"}
          bgColorHover={"#385499"}
          icon={Facebook}
          text={"Đăng nhập bằng Facebook"}
        />

        <ButtonSocial
          bgColor={"#ef4a37"}
          bgColorHover={"#cf4232"}
          icon={Facebook}
          text={"Đăng nhập bằng Google"}
        />
      </Stack>
    </Box>
  );
};
export default SignInForm;
