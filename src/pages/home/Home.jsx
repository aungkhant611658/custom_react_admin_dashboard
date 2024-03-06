import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import "./Home.scss";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

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
          <Widget
            type="USERS"
            icon={
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            link="View all users"
            isMoney={false}
            amount={1000}
            percentage={30}
          />
          <Widget
            type="ORDERS"
            icon={
              <ShoppingCartOutlined
                className="icon"
                style={{
                  color: "goldenrod",
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                }}
              />
            }
            link="View all orders"
            isMoney={false}
            amount={2000}
            percentage={15}
          />
          <Widget
            type="EARNINGS"
            icon={
              <MonetizationOnOutlined
                className="icon"
                style={{
                  color: "green",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
              />
            }
            link="View net earnings"
            isMoney={true}
            amount={23400}
            percentage={-10}
          />
          <Widget
            type="BALANCE"
            icon={
              <AccountBalanceWalletOutlined
                className="icon"
                style={{
                  color: "purple",
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                }}
              />
            }
            link="View details"
            isMoney={true}
            amount={50000}
            percentage={0}
          />
        </Box>
      </Box>
    </Box>
  );
}
