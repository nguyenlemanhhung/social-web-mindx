import React, { useState } from "react";
import LoadingPage from "../pages/loading/loading";
import Header from "./header";
import Body from "./body";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded && !isAuthenticated && isInitialized) {
      navigate("/auth");
    }
  }, [loaded]);

  if (!loaded) {
    return <LoadingPage />;
  }
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <Body />
    </Box>
  );
};
export default Layout;
