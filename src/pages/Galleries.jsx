import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export async function loader() {
  let result = await axios
    .get("http://localhost:1337/api/galleries?populate=images")
    .then((result) => result.data.data);
  let filteredResult = result.map((g) => {
    let data = {
      id: g.id,
      title: g.attributes.title,
      image1:
        g.attributes.images.data[g.attributes.images.data.length - 1]
          .attributes.url,
      image2:
        g.attributes.images.data[g.attributes.images.data.length - 2]
          .attributes.url,
      description: g.attributes.description,
    };
    return data;
  });
  return filteredResult;
}

const Photo = ({ url }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Grid item xs={12} sm={6} sx={{ m: "0 0 30px" }}>
      {loading && (
        <Skeleton
          variant="wave"
          sx={{ width: "100%", height: "300px", m: "0 0 10px", p: 0 }}
        />
      )}
      <Paper elevation={3}>
        <img
          src={url}
          alt="pb-raw1"
          style={{
            width: "100%",
            display: "flex",
          }}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </Paper>
    </Grid>
  );
};

function Galleries() {
  const result = useLoaderData();
  const baseUrl = "http://localhost:1337";

  return (
    <Container>
      <Typography variant="h1" textAlign="center" fontWeight="bold">
        Gallery
      </Typography>
      <Typography variant="h5" textAlign="center">
        Browse to our collection of photos
      </Typography>
      {result.map((data) => (
        <Box key={data.id} pb={3}>
          <Typography variant="h2" textAlign="center">
            {data.title}
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid
                container
                rowSpacing={2}
                columnSpacing={3}
                alignItems="center"
              >
                <Photo url={`${baseUrl}${data.image1}`} />
                <Photo url={`${baseUrl}${data.image2}`} />
              </Grid>
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "60%",
                    md: "40%",
                  },
                  padding: "11px 0",
                }}
              >
                <Link
                  to={`/gallery/${data.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography fontWeight="bold" variant="h5">
                    View More
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Galleries;
