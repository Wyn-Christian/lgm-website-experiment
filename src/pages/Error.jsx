import { Box, Container, Typography } from "@mui/material";

import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <Container>
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occured</Typography>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}

export default Error;
