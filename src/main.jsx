import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeContext } from "./contexts/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Packages, { loader as packagesLoader } from "./pages/Packages";
import Galleries, { loader as galleriesLoader } from "./pages/Galleries";
import Reviews, { loader as reviewsLoader } from "./pages/Reviews";
import ContactUs, {
  loader as contactusLoader,
  action as contactusAction,
} from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import PhotoGallery, {
  loader as photoGalleryLoader,
} from "./pages/PhotoGallery";

import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: contactusLoader,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/packages",
            element: <Packages />,
            loader: packagesLoader,
          },
          {
            path: "/gallery",
            element: <Galleries />,
            loader: galleriesLoader,
          },
          {
            path: "/gallery/:gallery_id",
            element: <PhotoGallery />,
            loader: photoGalleryLoader,
          },
          {
            path: "/reviews",
            element: <Reviews />,
            loader: reviewsLoader,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
            loader: contactusLoader,
            action: contactusAction,
          },
          {
            path: "/faqs",
            element: <Faqs />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeContext>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeContext>
  </React.StrictMode>
);
