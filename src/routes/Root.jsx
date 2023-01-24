import {
  Outlet,
  useNavigation,
  ScrollRestoration,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Root() {
  const navigation = useNavigation();

  return (
    <Box sx={{ backgroundColor: "#f0f0f0" }}>
      <NavBar />
      <ScrollRestoration />
      <Box sx={{ minHeight: "70vh" }}>
        {navigation.state === "loading" && (
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Root;
