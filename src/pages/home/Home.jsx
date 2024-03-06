import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

import "./Home.scss";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Home(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar
        open={open}
        setOpen={setOpen}
        windowSize={windowSize}
        theme={theme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <Sidebar
        windowSize={windowSize}
        mobileMenu={mobileMenu}
        DrawerHeader={DrawerHeader}
        setOpen={setOpen}
        theme={theme}
        open={open}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          className="widgets"
        >
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </Box>
      </Box>
    </Box>
  );
}
