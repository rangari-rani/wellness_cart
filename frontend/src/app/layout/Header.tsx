// import { ShoppingCart } from "@mui/icons-material";
// import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
// import { Link, NavLink } from "react-router-dom";
// import { useAppSelector } from "../store/configureStore";
// import { useEffect } from "react";
// import SignedInMenu from "./SignedInMenu";

// const navLinks = [
//     { title: 'Home', path: '/' },
//     { title: 'Store', path: '/store' },
//     { title: 'Contact', path: '/contact' }
// ]
// const accountLinks = [
//     { title: 'Login', path: '/login' },
//     { title: 'Register', path: '/register' }
// ]
// const navStyles = {
//     color: "inherit",
//     typography: "h6",
//     textDecoration: "none",
//     "&:hover": {
//         color: "secondary.main"
//     },
//     "&:active": {
//         color: "text.secondary"
//     }
// };
// interface Props {
//     darkMode: boolean;
//     handleThemeChange: () => void;
// }
// export default function Header({  }: Props) {
//     const { basket } = useAppSelector(state => state.basket);
//     const { user } = useAppSelector(state => state.account);
//     console.log('Basket: ', basket);
//     useEffect(() => {
//         console.log('Basket Items:', basket?.items);
//     }, [basket]);
//     const itemCount = basket?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

//     return (
//         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#4CAF50' }}>
//             <Toolbar sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center"
//             }}>
//                 <Box display='flex' alignItems='center'>
//                     <Typography variant="h6">
//                         Wellness Cart
//                     </Typography>
//                     {/* <Switch checked={darkMode} onChange={handleThemeChange} /> */}
//                 </Box>
//                 <List sx={{ display: 'flex' }}>
//                     {navLinks.map(({ title, path }) => (
//                         <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
//                             {title}
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Box display='flex' alignItems='center'>
//                     <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
//                         <Badge badgeContent={itemCount} color="secondary">
//                             <ShoppingCart />
//                         </Badge>
//                     </IconButton>

//                     {user ? (
//                         <SignedInMenu />) : (
//                         <List sx={{ display: 'flex' }}>
//                             {accountLinks.map(({ title, path }) => (
//                                 <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
//                                     {title}
//                                 </ListItem>
//                             ))}
//                         </List>
//                     )}
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     )
// }
import { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";
import React from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Store", path: "/store" },
  { title: "Contact", path: "/contact" },
];
const accountLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({}: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const itemCount =
    basket?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Render nav links with NavLink inside ListItem
  const renderNavLinks = (onClick?: () => void) =>
    navLinks.map(({ title, path }) => (
      <ListItem key={path} onClick={onClick} sx={{ padding: 0 }}>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? "active-nav-link" : undefined)}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? theme.palette.secondary.main : "inherit",
            fontWeight: isActive ? "bold" : "normal",
            padding: "8px 16px",
            display: "block",
          })}
        >
          {title}
        </NavLink>
      </ListItem>
    ));

  // Same for account links (or show SignedInMenu)
  const renderAccountLinks = (onClick?: () => void) =>
    user ? (
      <SignedInMenu />
    ) : (
      accountLinks.map(({ title, path }) => (
        <ListItem key={path} onClick={onClick} sx={{ padding: 0 }}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? theme.palette.secondary.main : "inherit",
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 16px",
              display: "block",
            })}
          >
            {title}
          </NavLink>
        </ListItem>
      ))
    );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#4CAF50",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Wellness Cart
            </Typography>
          </Box>

          {!isMobile && (
            <>
              <List sx={{ display: "flex" }}>{renderNavLinks()}</List>
              <Box display="flex" alignItems="center">
                <IconButton
                  component={Link}
                  to="/basket"
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <Badge badgeContent={itemCount} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <List sx={{ display: "flex" }}>{renderAccountLinks()}</List>
              </Box>
            </>
          )}

          {isMobile && (
            <IconButton
              component={Link}
              to="/basket"
              size="large"
              edge="start"
              color="inherit"
            >
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>{renderNavLinks(toggleDrawer(false))}</List>
          <List>{renderAccountLinks(toggleDrawer(false))}</List>
        </Box>
      </Drawer>
    </>
  );
}
