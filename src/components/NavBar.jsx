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
import LogoImg from "../assets/navbar-logo.png";

const LinkPage = ({ title, to }) => {
	return (
		<Button sx={{ color: "inherit" }} disableRipple>
			<Link
				to={to}
				style={{
					textDecoration: "none",
					color: "inherit",
					fontSize: "22px",
					textTransform: "capitalize",
					fontWeight: "bold",
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
	{ title: "FAQs", to: "/faqs" },
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
		<AppBar position="static" sx={{ marginBottom: "10px" }}>
			<Container>
				<Toolbar
					disableGutters
					sx={{
						height: "220px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box sx={{ display: { xs: "block", md: "none" } }}>
						<IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon fontSize="large" />
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
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img src={LogoImg} alt="Logo" style={{ borderRadius: "50%" }} width={350} />
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
