import React from "react";

import "./Sidebar.scss";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>
          <li>
            <PersonOutlineRoundedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreRoundedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <PaymentRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <InsertChartRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsSharpIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
