import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "./AppBarStyled";
import NavbarExtra from "./NavbarExtra";
import NavbarExtraForMobile from "./NavbarExtraForMobile";

const drawerWidth = 240;

const Navbar = ({
  open,
  setOpen,
  windowSize,
  theme,
  mobileMenu,
  setMobileMenu,
}) => {
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleMobileDrawerToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      {windowSize[0] <= 597 ? (
        <AppBar
          className="navbar"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          theme={theme}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMobileDrawerToggle}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin
            </Typography>

            <NavbarExtra
              menuId={menuId}
              handleProfileMenuOpen={handleProfileMenuOpen}
              mobileMenuId={mobileMenuId}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed" open={open} theme={theme}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin
            </Typography>

            <NavbarExtra
              menuId={menuId}
              handleProfileMenuOpen={handleProfileMenuOpen}
              mobileMenuId={menuId}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          </Toolbar>
        </AppBar>
      )}

      <NavbarExtraForMobile
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        setAnchorEl={setAnchorEl}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </>
  );
};

export default Navbar;
