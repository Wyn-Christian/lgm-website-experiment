import { Grid, useTheme } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";
import { useScroll, useSpring, animated } from "@react-spring/web";
import HomeImg from "../assets/home-img.jpg";
import ImgLast from "../assets/image-below.jpg";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Home() {
	const theme = useTheme();
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});
	const AnimatedTypography = animated(Typography);
	return (
		<>
			<Box sx={{ minHeight: "100vh", textAlign: "center" }}>
				<Box>
					<img src={HomeImg} alt="Logo" style={{ width: "70%", margin: "0" }} />
				</Box>
				<Box sx={{ color: "#fff", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#5C4033", padding: "80px 0" }}>
					<Typography variant="h2" sx={{ textAlign: "center" }}>
						Let's Get Mary
					</Typography>
					<Typography variant="p" sx={{ fontSize: "25px", textAlign: "justify", width: "50%", lineHeight: "30px", paddingBottom: "20px" }} mt="40px">
						Let's Get Mary Events Management is opening the year of 2023 with a blast of Fresh and New Wedding Packages that will surely save some coins and treasure memories of your "once in a
						lifetime" bridal extravaganzas!
					</Typography>
					<Typography sx={{ fontSize: "25px", textAlign: "justify", width: "50%", lineHeight: "30px" }}>
						Feel free to check and avail our wonderful wedding packages. Your in great hands our dear Future LGM couples because here in LGM "We make your once in a lifetime be memorable for a
						lifetime".{" "}
					</Typography>
				</Box>
				<Box sx={{ margin: "80px 0" }}>
					<Typography variant="h2" sx={{ textAlign: "center", marginBottom: "50px" }}>
						We are known for being...
					</Typography>
					<Box sx={{ margin: "0 20%" }}>
						<Grid container spacing={8} justifyContent="center">
							<Grid item xs={12} md={4}>
								<EmojiObjectsIcon sx={{ fontSize: "80px", color: "#135133" }} />
								<Typography sx={{ fontSize: "30px" }}>Creative</Typography>
								<Typography sx={{ fontSize: "20px", textAlign: "justify" }}>We serve the best of the best unique ideas for each and every event we make.</Typography>
							</Grid>
							<Grid item xs={12} md={4}>
								<CheckCircleIcon sx={{ fontSize: "80px", color: "#135133" }} />
								<Typography sx={{ fontSize: "30px" }}>Reliable</Typography>
								<Typography sx={{ fontSize: "20px", textAlign: "justify" }}>We are DTI registered business, therefore, reliability is never a concern on us.</Typography>
							</Grid>
							<Grid item xs={12} md={4}>
								<AutoAwesomeIcon sx={{ fontSize: "80px", color: "#135133" }} />
								<Typography sx={{ fontSize: "30px" }}>Engaging</Typography>
								<Typography sx={{ fontSize: "20px", textAlign: "justify" }}>We make sure that your guests will be engaged and entertained during your event.</Typography>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Box>
					<img src={ImgLast} alt="Logo" style={{ width: "100%", margin: "0", objectFit: "contain" }} />
				</Box>
			</Box>
		</>
	);
}

export default Home;
