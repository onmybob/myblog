"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { IPhotoType } from "types";

const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    backgroundColor: "#d5e6f7",
  },
}));

const PhotoItem = ({ list }: { list: Array<IPhotoType> }) => {
  return (
    <>
      <Box>
        {/* {mutation.isSuccess ? <div>delete ok </div> : null}

                {isLoading && <h1>loading...</h1>} */}
        {/* {isLoading && <h1>loading...</h1>} */}
      </Box>
      {list.map((photo: IPhotoType) => (
        <Grid item xs={6} sm={4} md={4} lg={2} key={photo.id}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={photo.url}
              title={photo.city}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {photo.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <StyledButton>隐藏</StyledButton>
              <StyledButton>显示</StyledButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default PhotoItem;
