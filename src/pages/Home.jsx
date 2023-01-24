import { Box, Container, Typography } from "@mui/material";
import { useScroll, useSpring, animated } from "@react-spring/web";

function Home() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const AnimatedTypography = animated(Typography);
  return (
    <>
      <Container sx={{ minHeight: "100vh" }}>
        <Typography variant="h3" textAlign="center">
          We will make your "once in a lifetime" be memorable for lifetime.
        </Typography>
        <AnimatedTypography variant="h2" style={props}>
          Example sheesh
        </AnimatedTypography>
      </Container>
    </>
  );
}

export default Home;
