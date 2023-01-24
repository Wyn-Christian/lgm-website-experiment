import { useLoaderData } from "react-router-dom";
import { Box, Container, Typography, useTheme } from "@mui/material";
import FooterLogo from "../assets/Logo.jpg";

function Footer() {
	const theme = useTheme();
	const result = useLoaderData();

	return (
		<Box
			sx={{
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				marginTop: "40px",
				paddingTop: "20px",
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: {
							xs: "column",
							sm: "row",
						},
						justifyContent: "space-evenly",
					}}
				>
					<Box mr="50px">
						<img src={FooterLogo} alt="Logo" style={{ borderRadius: "50%" }} width={100} />
					</Box>
					<Box
						sx={{
							width: "100%",

							textAlign: {
								xs: "center",
								sm: "left",
							},
						}}
					>
						<Typography variant="h4">Let's Get Mary</Typography>
						<Typography variant="subtitle1">We will make your "once in a lifetime" be memorable for lifetime.</Typography>
						<Typography variant="h6">All rights reserved 2023.</Typography>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							textAlign: {
								xs: "center",
								sm: "left",
							},
							mt: {
								xs: "20px",
								sm: 0,
							},
							mb: "30px",
						}}
					>
						<Box sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
							<Typography variant="h5" fontWeight="bold">
								Contact Details
							</Typography>
							<Box sx={{ display: "flex" }}>
								<Box mt="10px" mr="30px">
									<Typography sx={{ fontSize: "20px" }}>Contact Number:</Typography>
									<Typography sx={{ fontSize: "16px" }}>{result.number}</Typography>
									<Typography sx={{ fontSize: "16px" }}>{result.number2}</Typography>
								</Box>
								<Box mt="10px" mr="30px">
									<Typography sx={{ fontSize: "20px" }}>Email Address:</Typography>
									<Typography sx={{ fontSize: "16px" }}>{result.email}</Typography>
								</Box>
								<Box mt="10px" mr="30px">
									<Typography sx={{ fontSize: "20px" }}>Address:</Typography>
									<Typography sx={{ fontSize: "16px" }}>{result.address}</Typography>
								</Box>
								{/* This is a comment comment comment */}
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
