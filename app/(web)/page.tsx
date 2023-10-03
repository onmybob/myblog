"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import ShowTags from '@/components/Gallery/ShowTags';
import { getQueryClient } from '@/helpers/query/getQueryClient';
import alertService from '@/service/alertService';
import { GET_PHOTOS_KEY, getPhotos, queryPhotoList } from '@/service/photoService';
import { Box, Icon } from '@mui/material';
import Button from '@mui/material/Button';
import { Hydrate, dehydrate, useQuery } from '@tanstack/react-query';
import { categories, images } from '_constants';
import { usePhotoQuery } from '_hooks/useAdmin';
import axios from 'axios';
import { BsSnow } from 'react-icons/bs';
import { PhotoAlbum, RenderContainer, RenderPhoto, RenderRowContainer } from "react-photo-album";
import { IPhotoType } from "types";



export default function Home() {

  const { data, isLoading } = usePhotoQuery({ currentPage: 1 })
  console.log(data?.data.data);

  // const queryClient = getQueryClient();

  // await queryClient.prefetchQuery(GET_PHOTOS_KEY, getPhotos);
  // const dehydratedState = dehydrate(queryClient);

  //const initialData = await getPhotos();

  //const { data } = await axios.get("https://www.bobjoy.com/api/index?currentPage=1");

  // const { data, isLoading, isError } = queryPhotoList({ currentPage: 1 });
  // const s = data?.data.data;
  // console.log(s);
  // const alert = alertService();

  function testabc() {
    // alert.clear();
    // let message = '保存成果了，请刷新页面吧';
    // alert.success(message, true);

  }

  const photos = [
    { src: "/images/image1.jpg", width: 800, height: 600 },
    { src: "/images/image2.jpg", width: 1600, height: 900 },
  ];


  return (
    <Box>
      <Box className="pt-4
    flex 
    flex-row 
    items-center 
    justify-between
    overflow-x-auto
    border-b-2
    mb-5">

        {
          categories.map((item) => {
            const Icon = item.icon;
            return <Box
              key={item.id}
              className={`
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-2
          p-3
         
          hover:text-neutral-800
          transition
          cursor-pointer
      `}
            >
              <Icon size={28} />
              <div className="font-medium text-sm">{item.tag}</div>

            </Box>
          }


          )
        }

        {/* {isLoading && <div>loading.....</div>} */}

        {/* <ShowTags initData={initialData} /> */}


        {/* <Button variant="contained" onClick={testabc}>Hello world</Button> */}



      </Box >
      <Box>
        {isLoading && <div className=' text-center'>loading.....</div>}


        {/* <InfiniteScroll
          dataLength={data?.data.data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
          <PhotoAlbum layout="columns" photos={data?.data.data} spacing={8}
            renderPhoto={({ photo, imageProps: { src, alt, style, ...restImageProps } }) => (
              <div>
                <div className="cursor-pointer relative ">
                  <img src={src} alt={alt} style={{ ...style, borderRadius: "2px" }}  {...restImageProps} />
                  {/* {photo.caption && (
                    <div  >
                      <div className="a absolute inset-0  opacity-0 hover:opacity-100 rounded-[2px]">
                        <p className="w-full font-bold absolute bottom-0 px-3 py-3 pt-10 text-white cursor-pointer" > {photo.caption}</p>
                      </div>
                    </div>
                  )} */}
                </div>

              </div>
            )}
          />

        {/* </InfiniteScroll> */}
      </Box>

    </Box>
  );
}
