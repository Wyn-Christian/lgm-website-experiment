import { useLoaderData } from "react-router-dom";
import { Box, Container, Typography, useTheme } from "@mui/material";

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
          <Box
            sx={{
              width: "100%",

              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            <Typography variant="h4">LET'S GET MARY</Typography>
            <Typography variant="caption">
              We will make your "once in a lifetime" be memorable for
              lifetime.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
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
            <Typography variant="h5">Contact Details</Typography>

            <Box mt="10px">
              <Typography variant="body1">Contact Number:</Typography>
              <Typography variant="body2">{result.number}</Typography>
              <Typography variant="body2">{result.number2}</Typography>
            </Box>
            <Box mt="10px">
              <Typography variant="body1">Email Address:</Typography>
              <Typography variant="body2">{result.email}</Typography>
            </Box>
            <Box mt="10px">
              <Typography variant="body1">Address:</Typography>
              <Typography variant="body2">{result.address}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
