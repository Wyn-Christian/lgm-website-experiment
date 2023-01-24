import { useLoaderData } from "react-router-dom";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
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
        minHeight: "20vh",
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
          <Box
            sx={{
              width: "100%",
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <img
                src={FooterLogo}
                alt="Logo"
                style={{ borderRadius: "50%", alignSelf: "center" }}
                width={100}
                height="100%"
              />
              <Box>
                <Typography variant="h4">Let's Get Mary</Typography>
                <Typography variant="subtitle1">
                  We will make your "once in a lifetime" be memorable for
                  lifetime.
                </Typography>
              </Box>
            </Box>

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize="26px" fontWeight="bold">
                Contact Details
              </Typography>
              <Grid container rowSpacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography sx={{ fontSize: "20px" }} fontWeight="bold">
                    Contact Number:
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {result.number}
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {result.number2}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography sx={{ fontSize: "20px" }} fontWeight="bold">
                    Email Address:
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {result.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography sx={{ fontSize: "20px" }} fontWeight="bold">
                    Address:
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {result.address}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
