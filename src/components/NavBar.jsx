import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Button, Container, Toolbar, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import LogoImg from "../assets/Logo.jpg";

const LinkPage = ({ title, to }) => {
  return (
    <Button sx={{ color: "inherit" }} disableRipple>
      <Link
        to={to}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {title}
      </Link>
    </Button>
  );
};

const pages = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about-us" },
  { title: "Packages", to: "/packages" },
  { title: "Gallery", to: "/gallery" },
  { title: "Reviews", to: "/reviews" },
  { title: "Contact Us", to: "/contact-us" },
  { title: "FaQs", to: "/faqs" },
];

function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "100px",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "flex", md: "none", color: "white" },
            }}
          >
            {pages.map((p) => (
              <MenuItem key={p.title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" variant="h6">
                  <LinkPage {...p} />
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              height: "90px",
            }}
          >
            <img
              src={LogoImg}
              alt="Logo"
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              gap: "18px",
            }}
          >
            {pages.map((p) => (
              <LinkPage {...p} key={p.title} />
            ))}
            {/* <LinkPage title="Home" to="/" />
            <LinkPage title="About Us" to="/about-us" />
            <LinkPage title="Packages" to="/packages" />
            <LinkPage title="Gallery" to="/gallery" />
            <LinkPage title="Reviews" to="/reviews" />
            <LinkPage title="Contact Us" to="/contact-us" />
            <LinkPage title="FaQs" to="/faqs" /> */}
          </Box>
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
