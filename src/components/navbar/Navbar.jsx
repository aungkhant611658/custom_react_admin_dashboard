import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "./AppBarStyled";
import NavbarExtra from "./NavbarExtra";

const drawerWidth = 240;

const NavbarExtraForMobile = ({
  anchorEl,
  menuId,
  isMenuOpen,
  setAnchorEl,
  setMobileMoreAnchorEl,
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleProfileMenuOpen,
}) => {
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {renderMenu}
      {renderMobileMenu}
    </>
  );
};

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
