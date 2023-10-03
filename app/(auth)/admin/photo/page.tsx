import { getPhotosParamsServer } from "@/service/photoService";
import { Box, Grid } from "@mui/material";
import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = async () => {
  const list = await getPhotosParamsServer({ currentPage: 1 });

  return (
    <Box>
      <Grid container spacing={5} style={{ marginTop: 0, marginBottom: 45 }}>
        <PhotoItem list={list.data.data} />
      </Grid>
    </Box>
  );
};

export default PhotoList;
