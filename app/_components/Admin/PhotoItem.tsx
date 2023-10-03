'use client';

import { GET_PHOTOS_KEY, getPhotos, hidePhoto } from '@/service/photoService';
import { Box, Grid, dividerClasses, styled } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import HideImage from '@mui/icons-material/HideImage';
import Image from '@mui/icons-material/Image';
import { useEffect, useState } from 'react';
import { IPhotoType } from 'types';

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
        backgroundColor: '#d5e6f7',
    },
}));




function PhotoItem({ list }: { list: any; }) {


    const hidePhotoHandler = (id: number) => {
        hidePhoto(id);
    };
    const showPhotoHandler = (id: number) => {
        hidePhoto(id);
    };
    const { data, refetch, isLoading } = useQuery({
        queryKey: GET_PHOTOS_KEY,
        queryFn: getPhotos,

    });

    return (
        <Grid container spacing={5} style={{ marginTop: 0, marginBottom: 45 }}>
            {isLoading && <div>loading.....</div>}
            {data?.map((item: IPhotoType, index: any) => (
                <Grid item xs={6} sm={4} md={4} lg={2} key={index} >
                    <Card >
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.url}
                            title={item.city}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.city}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <StyledButton disabled={item.isDel} onClick={() => hidePhotoHandler(item.id)} startIcon={<HideImage />}>
                                隐藏
                            </StyledButton>
                            <StyledButton disabled={!item.isDel} onClick={() => showPhotoHandler(item.id)} startIcon={<Image />}>
                                显示
                            </StyledButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default PhotoItem;