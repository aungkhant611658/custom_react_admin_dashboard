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
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export const sidebarMenu = [
  {
    title: "MAIN",
    links: [
      {
        icon: <DashboardRoundedIcon />,
        name: "Dashboard",
      },
    ],
  },

  {
    title: "LISTS",
    links: [
      {
        icon: <PersonOutlineRoundedIcon />,
        name: "Users",
      },
      {
        icon: <StoreRoundedIcon />,
        name: "Products",
      },
      {
        icon: <PaymentRoundedIcon />,
        name: "Orders",
      },
      {
        icon: <LocalShippingRoundedIcon />,
        name: "Delivery",
      },
    ],
  },

  {
    title: "USEFUL",
    links: [
      {
        icon: <InsertChartRoundedIcon />,
        name: "Stats",
      },
      {
        icon: <NotificationsNoneRoundedIcon />,
        name: "Notifications",
      },
    ],
  },

  {
    title: "SERVICE",
    links: [
      {
        icon: <SettingsSystemDaydreamOutlinedIcon />,
        name: "System Health",
      },
      {
        icon: <PsychologyOutlinedIcon />,
        name: "Logs",
      },
      {
        icon: <SettingsApplicationsSharpIcon />,
        name: "Settings",
      },
    ],
  },

  {
    title: "USER",
    links: [
      {
        icon: <AccountCircleOutlinedIcon />,
        name: "Profile",
      },
      {
        icon: <ExitToAppRoundedIcon />,
        name: "Logout",
      },
    ],
  },
];

export const widgets = [
  {
    type: "USERS",
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
    link: "View all users",
    isMoney: false,
    amount: 1000,
    percentage: 30,
  },
  {
    type: "ORDERS",
    icon: (
      <ShoppingCartOutlined
        className="icon"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}
      />
    ),
    link: "View all orders",
    isMoney: false,
    amount: 2000,
    percentage: 15,
  },
  {
    type: "EARNINGS",
    icon: (
      <MonetizationOnOutlined
        className="icon"
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)",
        }}
      />
    ),
    link: "View net earnings",
    isMoney: true,
    amount: 23400,
    percentage: -10,
  },
  {
    type: "BALANCE",
    icon: (
      <AccountBalanceWalletOutlined
        className="icon"
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)",
        }}
      />
    ),
    link: "View details",
    isMoney: true,
    amount: 50000,
    percentage: 0,
  },
];
