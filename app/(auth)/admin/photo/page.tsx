
import PhotoItem from '@/components/Admin/PhotoItem';
import { getPhotos, getPhotos2 } from '@/service/photoService';
import { Box, Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { PhotoType } from 'types';
import { BorderAll } from '@mui/icons-material';
import PhotoToolbar from '@/components/Admin/PhotoToolbar';
import { useEffect, useState } from 'react';
import request from '@/helpers/client/request';
import axios from 'axios';
import PhotoCard from '@/components/Admin/PhotoCard';
import { getQueryClient } from '@/helpers/query/getQueryClient';
import { dehydrate } from '@tanstack/query-core';
import Hydrate from '@/helpers/query/HydrateClient';
import { log } from 'console';

async function Photo() {
    // const initialData = await getPhotos();
   //            const list = await request.get(`/api/index`, { currentPage: 1 });

//    const photo = await request.get(`https://www.bobjoy.com/api/index?currentPage=1`);
    // const res = await getPhotos2();

    // console.log('res:',res);
    // // const photo:Photo[]= res.data

    // const queryClient = getQueryClient();
    // await queryClient.prefetchQuery(['getp'],res.data.data)
    

    return (
        <Box>
            <PhotoToolbar />
            {/* <PhotoItem list={initialData} /> */}
            <Grid container spacing={5} style={{ marginTop: 0, marginBottom: 45 }}>
                    <PhotoCard/>
            </Grid>
        </Box>
    );
}

export default Photo;