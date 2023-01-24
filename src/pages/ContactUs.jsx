import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function ContactUs() {
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
        Contact us
      </Typography>

      <Typography variant="h4" padding="20px 30px 10px">
        Contact Details
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="stretch"
        margin="auto"
      >
        <Grid item xs={12} sm={5} md={4}>
          <Paper
            sx={{
              padding: "20px",
              height: "100%",
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Typography variant="h5">Contact Number:</Typography>
            <Typography variant="body1" marginLeft="10px">
              0938 906 3913
            </Typography>
            <Typography variant="body1" marginLeft="10px">
              0976 166 1703
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Paper
            sx={{
              padding: "20px",
              height: "100%",
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Typography variant="h5">Email Address:</Typography>
            <Typography variant="body1" marginLeft="10px">
              letsgetmary@gmail.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Paper
            sx={{
              padding: "20px",
              height: "100%",
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Typography variant="h5">Social Media:</Typography>
            <Typography variant="body1" marginLeft="10px">
              fb.com/letsgetmaryevents
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" padding="20px 30px 10px">
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: {
              xs: "100%",
              md: "80%",
            },
            minHeight: "50vh",
          }}
        >
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email" />
          <TextField label="Description" />
          <Button>Submit</Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default ContactUs;
