import { getPhotosParamsServer } from "@/service/photoService";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import PhotoItem from "./PhotoItem";
import Toolbar from "./Toolbar";
import { useStore } from "_store/admin";
import { Input } from "postcss";

const PhotoList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const list = await getPhotosParamsServer({
    currentPage: 1,
    key: searchParams.key,
  });

  console.log(searchParams);

  return (
    <Box>
      {useStore.getState().count}
      <Toolbar setList={null} />

      <Grid container spacing={5} style={{ marginTop: 0, marginBottom: 45 }}>
        <PhotoItem list={list.data.data} />
      </Grid>
    </Box>
  );
};

export default PhotoList;
