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
            color: "#216fdb",
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
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#216fdb",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
  typography: {
    h5: {
      color: "#050505",
      fontSize: "24px",
      fontWeight: "600",
    },
    h6: {
      color: "#050505",
      fontSize: "20px",
      fontWeight: "500",
    },
    body1: {
      color: "#050505",
      fontSize: "18px",
    },
    body2: {
      color: "#050505",
      fontSize: "16px",
    },
    subtitle1: {
      color: "#656565",
      fontSize: "14px",
    },
    subtitle2: {
      color: "#b2b2b2",
      fontSize: "12px",
    },
    button: {
      color: "#FF8A65",
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
