import { useState } from "react";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

const ImageGallery = ({ item, handleOpen }) => {
  const baseUrl = "http://localhost:1337";

  const [loading, setLoading] = useState(true);

  return (
    <ImageListItem
      onClick={() => handleOpen(`${baseUrl}${item.attributes.url}`)}
    >
      <Paper elevation={loading ? 0 : 3}>
        {loading && (
          <Skeleton
            variant="wave"
            sx={{ width: "100%", height: "300px", m: 0, p: 0 }}
          />
        )}

        <Button
          sx={{
            margin: 0,
            padding: 0,
            display: loading ? "none" : "inline-flex",
          }}
        >
          <img
            src={`${baseUrl}${item.attributes.url}`}
            alt={item.attributes.name}
            style={{
              width: "100%",
            }}
            onLoad={() => {
              setLoading(false);
            }}
          />
        </Button>
      </Paper>
    </ImageListItem>
  );
};

export default ImageGallery;
