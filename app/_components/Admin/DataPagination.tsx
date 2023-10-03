'use client'

import { Stack } from '@mui/material'
import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useInfiniteQuery } from '@tanstack/react-query';
import { USEKEY_ADMIN_PHOTOS } from '_hooks/constant';
import { usePhotoQuery } from '_hooks/useAdmin';


function DataPagination() {

    console.log('page......')
    const { data, isLoading } = usePhotoQuery({ currentPage: 1 })


    console.log(data?.length)


    return (
        <Stack spacing={2}>
            <Pagination count={10} />
        </Stack>
    )
}

export default DataPagination