import { useState } from "react";
import { Box, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

const Question = ({ children, summary, expanded, handleChange }) => {
	const theme = useTheme();

	return (
		<Accordion
			sx={{
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				margin: "6px 0",
				fontSize: "20px",
			}}
			expanded={expanded}
			onChange={handleChange}
		>
			<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.contrastText }} />}>{summary}</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};

function Faqs() {
	const [expanded, setExpanded] = useState();
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Container>
			<Typography
				variant="h2"
				sx={{
					textAlign: "center",
					padding: "50px 0 10px",
					fontWeight: "bold",
				}}
			>
				Frequently Asked Questions
			</Typography>
			<Typography variant="body1" sx={{ textAlign: "center", padding: "20px 0 10px" }} fontSize={"30px"}>
				Here are some frequently asked questions
			</Typography>

			<Question expanded={expanded === "1"} handleChange={handleChange("1")} summary="1. Do you have venue?">
				<Typography fontSize={"20px"}>NO VENUE in all of our packages. We exclusively give Venue Recommendations to our booked clients only.</Typography>
			</Question>
			<Question expanded={expanded === "2"} handleChange={handleChange("2")} summary="2. What are the other charges?">
				<ul style={{ margin: 0, paddingLeft: "20px", fontSize: "20px" }}>
					<li>FREE OTD & Prenup Transportation fee within Taguig City ONLY.</li>
					<li>OTD & Prenup Transportation fee applies to the rest of NCR and nearby provinces.</li>
					<ul style={{ paddingLeft: "20px" }}>
						<li>Crew Meal (Prenup & OTD) - Any decent meal with drinks & utensils that a couple will provide for the crew Ex. Silog Meals, Fastfood Meal or in-house packed meal</li>
					</ul>
					<li>Crew Meal allowance</li>
					<li>In case that couple don't have a time to prepare for the meal. 300/head (for the whole day meal of the crew)</li>
					<li>Floor Charge</li>
					<ul style={{ paddingLeft: "20px" }}>
						<li>Venue held in 2nd or higher floors</li>
						<li>Venue proper is in Elevated/Slope area</li>
						<li>Linear Charge (Long distance from Hakot/Parking Area to the Venue Proper)</li>
					</ul>
					<li>Other utility charges (if there's any) such as Parking Fee, Environmental Fee, and Ingress/Egress Fee.</li>
				</ul>
			</Question>

			<Question expanded={expanded === "3"} handleChange={handleChange("3")} summary="3. Can we have a meeting to discuss the package?">
				<Typography fontSize={"20px"}>NO RESERVATION, NO VIRTUAL MEETING</Typography>
				<br />
				<Typography fontSize={"20px"}>For inquiries, you may call Ms. Mary (0938.906.3913 / 0976.166.1703) or send your questions on our FB page.</Typography>
				<br />
				<Typography fontSize={"20px"}>For sure reservation, we will be providing on-site schedules for you to confirm your attendance for on site reservation and food tasting.</Typography>
			</Question>

			<Question expanded={expanded === "4"} handleChange={handleChange("4")} summary="4. Sample Styling/Setup?">
				<Typography fontSize={"20px"}> Feel free to check our page for uploaded events. Send here the chosen styling and we will check if that is applicable to your package.</Typography>
			</Question>

			<Question expanded={expanded === "5"} handleChange={handleChange("5")} summary="5. What type of weddings you've already managed?">
				<ul style={{ margin: 0, paddingLeft: "20px", fontSize: "20px" }}>
					<li>Catholic Wedding</li>
					<li>Christian Wedding</li>
					<li>INC Wedding</li>
					<li>Civil Wedding</li>
					<li>Holy Union/LGBTQ Wedding</li>
				</ul>
			</Question>

			<Question expanded={expanded === "6"} handleChange={handleChange("6")} summary="6. Payment terms?">
				<ul style={{ margin: 0, paddingLeft: "20px", fontSize: "20px" }}>
					<li>Staggered (50% - 25% - 20% - 5%)</li>
					<li>Monthly</li>
					<li>Weekly</li>
				</ul>
				<Typography>We allow cash payment and bank transfers via GCASH or BDO.</Typography>
			</Question>

			<Question expanded={expanded === "7"} handleChange={handleChange("7")} summary="7. Do you post pictures??">
				<Typography fontSize={"20px"}>Yes, we upload some of our events on our Facebook pages with the client's permission.</Typography>
			</Question>
		</Container>
	);
}

export default Faqs;
