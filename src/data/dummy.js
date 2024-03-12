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

export const latestTransactionData = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342356,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342357,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342358,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342359,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342360,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342361,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342362,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];
