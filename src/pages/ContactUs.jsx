import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useLoaderData, redirect } from "react-router-dom";
import { Form } from "react-router-dom";
import { useSnackbar } from "notistack";

const baseUrl = "http://localhost:1337";

export async function loader() {
  let result = await axios
    .get("http://localhost:1337/api/contact")
    .then((result) => result.data.data.attributes);
  return result;
}
export async function action({ request }) {
  const formData = await request.formData();
  const contactForm = Object.fromEntries(formData);
  await axios
    .post("http://localhost:1337/api/contact-forms", {
      data: contactForm,
    })
    .then((result) => {
      console.log(result.data);
    });
  return redirect("/");
}

function ContactUs() {
  const { enqueueSnackbar } = useSnackbar();

  const result = useLoaderData();
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

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "50px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            margin: "0 0 20px",
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            CONTACT DETAILS
          </Typography>

          <Typography variant="h3" fontWeight="bold">
            Get in touch
          </Typography>
          <Typography variant="body2">
            We'd love to talk about how we can help you.
          </Typography>
          <Box
            style={{
              position: "relative",
              textAlign: "right",
              width: "100%",
            }}
          >
            <Paper
              style={{
                overflow: "hidden",
                background: "none!important",
                height: "400px",
                margin: "20px 0",
                borderRadius: "9px",
              }}
              elevation={3}
            >
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Let's%20Get%20MARY%20Events%20Management&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="10px"
              />
              <a href="https://putlocker-is.org"></a>
              <br />
              <a href="https://www.embedgooglemap.net"></a>
            </Paper>
          </Box>
          <Grid container columnSpacing={1}>
            <Grid item xs={12} sm={6} sx={{ m: "10px 0" }}>
              <Typography variant="body1" fontWeight="bold">
                Contact Numbers:
              </Typography>
              <Typography variant="body1">{result.number}</Typography>
              <Typography variant="body1">{result.number2}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ m: "10px 0" }}>
              <Typography variant="body1" fontWeight="bold">
                Email Address:
              </Typography>
              <Typography variant="body1">{result.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ m: "10px 0" }}>
              <Typography variant="body1" fontWeight="bold">
                Address:
              </Typography>
              <Typography variant="body1">{result.address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ m: "10px 0" }}>
              <Typography variant="body1" fontWeight="bold">
                FB Link:
              </Typography>
              <Typography variant="body1">{result.facebook}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "500px",
              padding: "46px",
              mt: "20px",
            }}
            elevation={10}
          >
            <Form
              style={{ width: "100%", margin: "0 0 20px" }}
              method="post"
              action="/contact-us"
              onSubmit={() => {
                enqueueSnackbar(
                  "Your form has been successfully submitted.",
                  { variant: "success" }
                );
                enqueueSnackbar(
                  "We'll get back to you in 1-5 business days.",
                  {
                    autoHideDuration: 8000,
                    transitionDuration: {
                      enter: 1000,
                      exit: 500,
                    },
                  }
                );
              }}
            >
              <Grid
                container
                rowSpacing={{ xs: 2, md: 3 }}
                columnSpacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="First Name"
                    name="firstname"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Last Name"
                    name="lastname"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    label="Email"
                    name="email"
                    type="email"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Message"
                    name="message"
                    type="text"
                    multiline
                    sx={{
                      width: "100%",
                      "& textarea": {
                        height: "148px !important",
                        overflowY: "auto !important",
                      },
                      "& .MuiInputBase-root": {
                        overflowY: "auto",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", padding: "10px 0" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
            <Divider />
            <Typography variant="caption">
              By clicking on "submit" you agree to our Privacy Policy, Data
              Policy and Cookie Policy.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactUs;
