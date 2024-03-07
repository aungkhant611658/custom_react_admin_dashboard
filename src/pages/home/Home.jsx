import * as React from "react";
import Box from "@mui/material/Box";
import Widget from "../../components/widget/Widget";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import "./Home.scss";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function Home() {
  return (
    <>
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

      <Box className="charts"></Box>
    </>
  );
}
