import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { ThemeContext } from "./contexts/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  </React.StrictMode>
);
