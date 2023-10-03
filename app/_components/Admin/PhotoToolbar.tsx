'use client';

import { GET_PHOTOS_KEY, getPhotos4, getPhotosParams, hidePhoto } from '@/service/photoService';
import { BorderAll } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { usePhotoQuery } from '_hooks/useAdmin';
import React, { useEffect, useRef } from 'react';

// const getData = (key: string) => {
//     debugger
//     const { data, isLoading } = usePhotoQuery({ currentPage: 1, key: key })
//     console.log('search', data);
// }

function PhotoToolbar({ setListData }: { setListData: any }) {

    const [city, setCity] = React.useState('10');
    const [key, setKey] = React.useState('');

    // const { data, isLoading } = usePhotoQuery({ currentPage: 1, key: key })

    const search = () => {

        // getData(key);
        getPhotosParams({ currentPage: 1, key: key, city }).then(data => {
            console.log(data.data.data)
            if (Array.isArray(data.data.data)) {
                setListData(data.data.data)
            } else {
                setListData([])
            }
        })


    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={7} className=' flex' >
                <Button variant="outlined" startIcon={<BorderAll />}  >全部删除</Button>
            </Grid>
            <Grid item xs={5} className=' flex justify-end  '>

                <Stack spacing={2} direction="row">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">城市</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={city}
                            label="城市"
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <MenuItem value={10}>全部</MenuItem>
                            <MenuItem value={20}>深圳</MenuItem>
                            <MenuItem value={30}>梵蒂冈</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField className=' w-72' id="outlined-basic" onChange={(e) => setKey(e.target.value)} label="关键字" variant="outlined" size="small" />
                    <Button variant="contained" onClick={search}>查询</Button>

                </Stack>

            </Grid>
        </Grid>
    );
}

export default PhotoToolbar;