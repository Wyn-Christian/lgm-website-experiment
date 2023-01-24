import { Box, Container, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "20vh",
        marginTop: "40px",
        paddingTop: "20px",
        color: theme.palette.primary.contrastText,
      }}
    >
      <Container>sheesh</Container>
    </Box>
  );
}

export default Footer;
