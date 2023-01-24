import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Avatar,
  Skeleton,
} from "@mui/material";
import { useState } from "react";

const Person = ({ id, name, url, position }) => {
  const [loading, setloading] = useState(true);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {loading && (
          <Skeleton variant="circular" width={250} height={250} />
        )}
        <Avatar
          alt="profile"
          src={url}
          sx={{
            width: "auto",
            height: 250,
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
          onLoad={() => {
            setloading(false);
          }}
        />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{position}</Typography>
      </Box>
    </Grid>
  );
};

function AboutUs() {
  return (
    <Container>
      <Typography variant="h1" fontWeight="bold" textAlign="center">
        About Us
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-around",
            m: "10px 0 30px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              OUR MISSION
            </Typography>
            <Typography align="justify" m="0 20px">
              Our mission is to be a full-service event planning and
              management company, dedicated to creating and executing
              memorable events that exceed our clients' expectations. We
              strive to understand our clients' needs and goals, and use
              our expertise, creativity, and attention to detail to bring
              their vision to life. We pride ourselves on our ability to
              deliver events that are not only visually stunning, but also
              well-organized, efficient, and tailored to our clients'
              specific needs.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              OUR VISION
            </Typography>
            <Typography align="justify" m="0 20px">
              Our vision is to be recognized as a premier events management
              company, known for our outstanding customer service,
              unparalleled creativity, and ability to deliver exceptional
              events that leave a lasting impression. We aim to constantly
              push the boundaries of what is possible, and to be at the
              forefront of industry trends and innovation. We strive to be
              a company that is not only respected and admired by our
              clients, but also a leader in our industry.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" textAlign="center">
            FOUNDERS
          </Typography>
          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "10px 0 20px",
            }}
          >
            <Grid
              container
              justifyContent="space-evenly"
              rowSpacing={4}
              columnSpacing={4}
            >
              <Person
                id={1}
                name="Mary Murillo"
                position="CEO"
                url="people/mary_murillo.jpg"
              />
              <Person
                id={2}
                name="Princess Rebanal"
                position="Assintant Manager / Graphic Designer"
                url="people/girly_rebanal.jpg"
              />
            </Grid>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" textAlign="center">
            CREW / STAFF / MEMBERS
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "10px 0 20px",
            }}
          >
            <Grid
              container
              justifyContent="space-evenly"
              rowSpacing={4}
              columnSpacing={4}
            >
              <Person
                id={3}
                name="Eman Murillo"
                position="DJ / Co-Owner"
                url="people/eman_murillo.jpg"
              />
              <Person
                id={4}
                name="Mannie Murillo"
                position="Makulet / Madam Baby"
                url="people/mannie_murillo.jpg"
              />
              <Person
                id={5}
                name="Jhaz Aringo"
                position="Host / Reception Manager"
                url="people/jhaz_aringo.jpg"
              />
              <Person
                id={6}
                name="Mheg Aringo"
                position="Chef"
                url="people/mheg_aringo.jpg"
              />
              <Person
                id={7}
                name="Ruru Trinidad"
                position="Coordinator"
                url="people/ruru_trinidad.jpg"
              />
              <Person
                id={7}
                name="Ken Camingawan"
                position="Caterer"
                url="people/ken_camingawan.jpg"
              />
            </Grid>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" textAlign="center">
            WEBSITE CREATOR
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "10px 0 20px",
            }}
          >
            <Grid
              container
              justifyContent="space-evenly"
              rowSpacing={4}
              columnSpacing={4}
            >
              <Person
                id={8}
                name="Wyn Christan Rebanal"
                position="Tech Staff / Web Developer"
                url="people/wyn_rebanal.jpg"
              />
              <Person
                id={9}
                name="Lance Sedutan"
                position="Web Developer/Designer"
                url="people/lance_sedutan.png"
              />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default AboutUs;
