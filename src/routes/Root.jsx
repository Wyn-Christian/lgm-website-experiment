import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Root() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0" }}>
      <NavBar />
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Root;
