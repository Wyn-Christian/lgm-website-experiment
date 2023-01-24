import { Box, Container, Paper, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import useScrollTrigger from "@mui/material/useScrollTrigger";
const packages = [
  "mahalina",
  "bighani",
  "mayumi",
  "ligaya",
  "hiraya",
  "amor",
];

const Package = ({ i, p }) => {
  return (
    <Box
      key={i}
      sx={{
        m: "0 0 100px",
      }}
    >
      <Typography
        textAlign="center"
        variant="h3"
        sx={{
          m: "0 0 10px",
        }}
      >
        {p.toUpperCase()}
      </Typography>

      <Paper sx={{ display: "flex" }} elevation={5}>
        <img
          src={`/packages/${p}.jpg`}
          alt={p}
          style={{ width: "100%", margin: "auto" }}
        />
      </Paper>
    </Box>
  );
};

function Packages() {
  return (
    <Container>
      <Box sx={{ m: "0 0 30px" }}>
        <Typography variant="h1" textAlign="center" fontWeight="bold">
          Wedding Packages
        </Typography>
        <Typography variant="h4" textAlign="center">
          NO VENUE
        </Typography>
        <Typography variant="h6" textAlign="center">
          Terms & Condition Applied
        </Typography>
      </Box>
      {packages.map((p, i) => (
        <Package {...{ p, i }} />
      ))}
    </Container>
  );
}

export default Packages;
