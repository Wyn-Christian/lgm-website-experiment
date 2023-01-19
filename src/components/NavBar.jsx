import { Box, Button, Container, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

const LinkPage = ({ title, to }) => {
  return (
    <Button sx={{ color: "#fff" }}>
      <Link to={to} style={{ textDecoration: "none", color: "white" }}>
        {title}
      </Link>
    </Button>
  );
};

function NavBar() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "80px",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            Menu
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Logo
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
            <LinkPage title="Home" to="/" />
            <LinkPage title="About Us" to="/about-us" />
            <LinkPage title="Packages" to="/packages" />
            <LinkPage title="Gallery" to="/gallery" />
            <LinkPage title="Reviews" to="/reviews" />
            <LinkPage title="Contact Us" to="/contact-us" />
            <LinkPage title="FaQs" to="/faqs" />
          </Box>
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
