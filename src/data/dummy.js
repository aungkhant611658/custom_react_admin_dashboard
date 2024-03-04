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
