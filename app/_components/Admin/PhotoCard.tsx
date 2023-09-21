'use client'

import { HideImage, Image } from "@mui/icons-material"
import { PhotoType } from "types"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, styled } from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPhotos, getPhotos2, getPhotos4, hidePhoto } from "@/service/photoService";
import axios from "axios";
import { useAdminPohoto } from "_ hooks/api/page";

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
        backgroundColor: '#d5e6f7',
    },
}));


function PhotoCard() {
    const { isLoading, error, data, isFetching } = useQuery(["getp"], getPhotos4);




    //     const { isLoading, error, data, isFetching } = useQuery(["getp"], () =>
    //     axios.get(
    //       "/api/index?currentPage=1"
    //     ).then((res) => res.data.data.data)
    //   );

    const queryClient = useQueryClient();

    const mutation2 = useMutation((postData: { id: string }) => {
        console.log(postData);
        return axios.delete('/api/api/admin/deleteById', { data: postData })
    })

    // const mutation = useMutation({
    //     mutationFn:hidePhoto,
    //     onMutate: async (id)=>{
    //         console.log('delete ....',id);
    //         await queryClient.cancelQueries({queryKey:['getp']})
    //         const  previousPhotos = queryClient.getQueryData(['getp'])
    //         console.log('previousPhotos:',previousPhotos.data.data)

    //         const d:[] = previousPhotos.data.data
    //         queryClient.setQueryData(['getp'],d.filter((p)=>p.id!==id))

    //         return previousPhotos;

    //     },
    //     onError:(err,photo,context)=>{
    //         queryClient.setQueryData(['getp'],context?.previousPhotos)
    //     },
    //     onSettled:()=>{
    //         queryClient.invalidateQueries({queryKey:['getp']})
    //     },
    //     onSuccess:(data,variables,context){
    //         console.log(data)
    //     }
    // })
    return (
        <>
            {mutation2.isSuccess ? <div>delete ok </div> : null}


            {isLoading && <h1>loading...</h1>}
            {data?.map((photo: PhotoType) => (
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
                            <StyledButton disabled={photo.isDel} startIcon={<HideImage />}>
                                隐藏
                            </StyledButton>
                            <StyledButton onClick={() => mutation2.mutate({ id: photo.id + '' })} disabled={!photo.isDel} startIcon={<Image />}>
                                显示
                            </StyledButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>



    )
}

export default PhotoCard