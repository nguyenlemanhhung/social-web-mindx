import "./App.css";
import Router from "./routers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const theme = createTheme({
  components: {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       padding: "10px 20px",
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#E0E3E7",
          "--TextField-brandBorderHoverColor": "#B2BAC2",
          "--TextField-brandBorderFocusedColor": "#6F7E8C",
          "& label.Mui-focused": {
            color: "#f2f",
          },
        },
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: "var(--TextField-brandBorderColor)",
    //     },
    //     root: {
    //       [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
    //         borderColor: "var(--TextField-brandBorderHoverColor)",
    //       },
    //       [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
    //         borderColor: "var(--TextField-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before, &:after": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "none",
          },
          "&.Mui-focused:after": {
            borderBottom: "none",
          },
          backgroundColor: "#f8f8f8",
          borderRadius: "50px",
        },
        input: {
          padding: "10px 20px",
        },
      },
    },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       "&:before": {
    //         borderBottom: "2px solid var(--TextField-brandBorderColor)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
    //       },
    //       "&.Mui-focused:after": {
    //         borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
  },
  // palette: {
  //   primary: {
  //     // Purple and green play nicely together.
  //     main: "#fffd00",
  //   },
  //   secondary: {
  //     // This is green.A700 as hex.
  //     main: "#11cb5f",
  //   },
  // },
  typography: {
    body1: {
      color: "#000",
    },
    body2: {
      color: "#050505",
    },
    subtitle2: {
      color: "#b2b2b2",
    },
    h1: {
      color: "white",
    },
    h5: {
      color: "white",
    },
    button: {
      color: "white",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
