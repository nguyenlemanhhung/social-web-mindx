import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Container } from "@mui/material";
import SignInForm from "./signin";
import SignUpForm from "./signup";
import bgAuth from "../../assets/images/bg-auth-1.jpg";
import { styled } from "@mui/material/styles";

const TabCustomStyle = styled(Tab)({
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "0%",
    height: "100%",
    background: "linear-gradient(112.14deg, #3461FF 1.15%, #9848FF 73.09%)",
    transition: "all .3s",
    zIndex: "-1",
  },

  "&.Mui-selected": {
    color: "#FFFF",

    "&::before": {
      width: "100%",
    },
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Auth() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgAuth})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          height: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter:
            "blur(5px) saturate(100%) contrast(45%) brightness(130%)",
          borderRadius: "20px",
          padding: "20px !important",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <TabCustomStyle label="Đăng nhập" {...a11yProps(0)} />
              <TabCustomStyle label="Đăng ký" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <SignInForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUpForm />
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
