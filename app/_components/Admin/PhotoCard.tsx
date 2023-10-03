'use client'

import { HideImage, Image } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, styled } from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GET_PHOTOS_KEY, getPhotos, getPhotos2, getPhotos4, hidePhoto, showPhoto } from "@/service/photoService";
import { IPhotoType } from "types";
import { useEffect, useState } from "react";
import { USEKEY_ADMIN_PHOTOS } from "_hooks/constant";
import { usePhotoQuery } from "_hooks/useAdmin";
import DataPagination from "./DataPagination";

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
        backgroundColor: '#d5e6f7',
    },
}));


function PhotoCard({ listData }: { listData: Array<any> }) {

    const [pageNumner, setPageNumner] = useState(1)


    const queryClient = useQueryClient();

    // const { data, isLoading } = usePhotoQuery({ currentPage: pageNumner })


    // const { currentCategory, setCurrentCategory } = useAdminStore()


    // const mutation2 = useMutation((postData: { id: string }) => {
    //     console.log(postData);
    //     return axios.delete('/api/api/admin/deleteById', { data: postData })
    // })


    const showMutation = useMutation(showPhoto, {
        onMutate: (id) => {
            const previousPhotos: any = queryClient.getQueryData(GET_PHOTOS_KEY);
            queryClient.setQueryData(GET_PHOTOS_KEY, (previousPhotos: any) => {
                previousPhotos.map((item: IPhotoType) => {
                    if (item.id === id) {
                        item.isDel = false
                    }
                })
            })

            return previousPhotos;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(GET_PHOTOS_KEY)
        },
        onError: (err, id, context) => {
            console.log('==============', context);
            queryClient.setQueryData(GET_PHOTOS_KEY, context)
            console.log(err);
        }
    })

    const mutation = useMutation({
        mutationFn: hidePhoto,
        onMutate: async (id) => {
            console.log('delete ....', id);
            await queryClient.cancelQueries(GET_PHOTOS_KEY)
            const previousPhotos: any = queryClient.getQueryData(GET_PHOTOS_KEY)

            // queryClient.setQueryData(GET_PHOTOS_KEY, (oldData: any) => {
            //     oldData.map((item: PhotoType) => {
            //         if (item.id === id) {
            //             item.isDel = false
            //         }
            //     })
            // })

            console.log('previousPhotos', previousPhotos);

            return { id };
        },
        onError: (err, photo, context) => {
            //queryClient.refetchQueries(GET_PHOTOS_KEY)

            // queryClient.setQueryData(GET_PHOTOS_KEY, context?.previousPhotos)
        },
        onSettled: (data, error, variables, context) => {
            queryClient.invalidateQueries(GET_PHOTOS_KEY)
            // queryClient.invalidateQueries(GET_PHOTOS_KEY);

        },
        onSuccess: (data, variables, context) => {
            console.log(data)
        }
    })
    return (
        <>
            <Box>
                {/* {mutation.isSuccess ? <div>delete ok </div> : null}

                {isLoading && <h1>loading...</h1>} */}
                {/* {isLoading && <h1>loading...</h1>} */}

            </Box>
            {listData.map((photo: IPhotoType) => (
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
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <StyledButton onClick={() => mutation.mutate(photo.id)} disabled={photo.isDel} startIcon={<HideImage />}>
                                隐藏
                            </StyledButton>
                            <StyledButton onClick={() => showMutation.mutate(photo.id)} disabled={!photo.isDel} startIcon={<Image />}>
                                显示
                            </StyledButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}


            <Button onClick={() => setPageNumner((page) => page + 1)}>Next</Button >
            <Button onClick={() => setPageNumner((page) => page - 1)}>Prev</Button>

        </>



    )
}

export default PhotoCard

