import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@mui/material";
const baseUrl = "http://localhost:1337";

export async function loader() {
  let result = await axios
    .get("http://localhost:1337/api/package?populate=*,package.image")
    .then((result) => {
      let data = {
        id: result.data.data.id,
        title: result.data.data.attributes.title,
        packages: result.data.data.attributes.package,
      };
      return data;
    });
  return result;
}

const packages = [
  "mahalina",
  "bighani",
  "mayumi",
  "ligaya",
  "hiraya",
  "amor",
];

const Package = ({ item }) => {
  return (
    <Box
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
        {item.title.toUpperCase()}
      </Typography>

      <Paper sx={{ display: "flex" }} elevation={5}>
        <img
          src={`${baseUrl}${item.image.data.attributes.url}`}
          alt={item.title}
          style={{ width: "100%", margin: "auto" }}
        />
      </Paper>
    </Box>
  );
};

function Packages() {
  const result = useLoaderData();

  return (
    <Container>
      <Box sx={{ m: "0 0 30px" }}>
        <Typography variant="h1" textAlign="center" fontWeight="bold">
          {result.title}
        </Typography>
        <Typography variant="h4" textAlign="center">
          NO VENUE
        </Typography>
        <Typography variant="h6" textAlign="center">
          Terms & Condition Applied
        </Typography>
      </Box>
      {result.packages.map((item) => (
        <Package item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Packages;
