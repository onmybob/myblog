'use client';

import request from '@/helpers/client/request';
import { hidePhoto } from '@/service/photoService';
import { BorderAll } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';

function PhotoToolbar() {

    const test = () => {
        hidePhoto(1234);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={7} className='   flex  ' >
                <Button variant="outlined" startIcon={<BorderAll />} onClick={test}>全部删除</Button>
            </Grid>
            <Grid item xs={5} className=' flex justify-end  '>
                right
            </Grid>
        </Grid>
    );
}

export default PhotoToolbar;