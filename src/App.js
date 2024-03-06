import New from "./pages/new/New";
import Box from "@mui/material/Box";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
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
    <Box sx={{ display: "flex" }} className="App">
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

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
