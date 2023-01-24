import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageList from "@mui/material/ImageList";
import ImageGallery from "../components/ImageGallery";

export async function loader({ params }) {
  let result = await axios
    .get(
      `http://localhost:1337/api/galleries/${params.gallery_id}?populate=images`
    )
    .then((result) => {
      let data = {
        id: result.data.data.id,
        title: result.data.data.attributes.title,
        description: result.data.data.attributes.description,
        images: result.data.data.attributes.images.data,
      };
      return data;
    });
  return result;
}

function PhotoGallery() {
  const result = useLoaderData();

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleOpen = (url) => {
    setOpen(true);
    setUrl(url);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography
        fontWeight="bold"
        variant="h2"
        textAlign="center"
        sx={{ m: "20px 0 10px" }}
      >
        {result.title}
      </Typography>
      <Box
        sx={{
          margin: "auto",
          height: "80vh",
          overflowY: "scroll",
        }}
      >
        <ImageList
          variant="masonry"
          gap={8}
          sx={{
            columnCount: {
              xs: "1 !important",
              sm: "2 !important",
              md: "3 !important",
            },
          }}
        >
          {result.images.map((item) => (
            <ImageGallery
              item={item}
              key={item.id}
              handleOpen={handleOpen}
            />
          ))}
        </ImageList>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "100%",
              sm: "90%",
              md: "60%",
            },
          }}
        >
          <img
            src={url}
            alt="poppers"
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
}

export default PhotoGallery;
