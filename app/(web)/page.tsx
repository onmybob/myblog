"use client";
import Image from "next/image";

import InfiniteScroll from "react-infinite-scroll-component";
import ShowTags from "@/components/Gallery/ShowTags";
import { getQueryClient } from "@/helpers/query/getQueryClient";
import alertService from "@/service/alertService";
import {
  GET_PHOTOS_KEY,
  getPhotos,
  queryPhotoList,
} from "@/service/photoService";
import { Box, Icon } from "@mui/material";
import Button from "@mui/material/Button";
import { Hydrate, dehydrate, useQuery } from "@tanstack/react-query";
import { categories, images } from "_constants";
import { usePhotoQuery } from "_hooks/useAdmin";
import axios from "axios";
import { BsSnow } from "react-icons/bs";
import {
  PhotoAlbum,
  RenderContainer,
  RenderPhoto,
  RenderRowContainer,
} from "react-photo-album";
import { IPhotoType } from "types";

export default function Home() {
  const { data, isLoading } = usePhotoQuery({ currentPage: 1 });

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

  return (
    <>
      <div className="mt-10 mb-5 border-b-[1px] pb-5">
        <div className="mx-auto max-w-screen-2xl">
          <ul className="flex flex-row gap-12   text-gray-600">
            {categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <li className="flex flex-row gap-2" key={index}>
                  <p className="bg-gray-0 px-2 rounded-full text-xs	font-normal flex items-center justify-center">
                    <Icon size={18} />
                  </p>
                  {item.tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Box className="  mx-auto max-w-screen-2xl mt-6">
        {/* <Box
        className="
        flex
    flex-row 
    items-center 
    justify-between
    overflow-x-auto
    mb-5"
      >
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <Box
              key={item.id}
              className={`
          flex 
          text-neutral-600
          flex-col 
          items-center 
          justify-center 
          gap-2
           pb-3
          hover:text-neutral-900
          transition
          cursor-pointer
      `}
            >
              <Icon size={28} />
              <div className="font-medium  ">{item.tag}</div>
            </Box>
          );
        })}
      </Box> */}

        <div>
          {isLoading && (
            <div className="text-center flex items-center justify-center transition-opacity">
              <Image
                src="/loading2.gif"
                alt="loading"
                width="100"
                height="100"
              />
            </div>
          )}

          {/* <InfiniteScroll
          dataLength={data?.data.data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
          <div>
            <PhotoAlbum
              layout="columns"
              photos={data?.data.data}
              columns={4}
              spacing={20}
              renderPhoto={({
                photo,
                imageProps: { src, alt, style, ...restImageProps },
              }) => (
                <div>
                  <div className="cursor-pointer relative ">
                    <img
                      src={src}
                      alt={alt}
                      style={{ ...style, borderRadius: "2px" }}
                      {...restImageProps}
                    />

                    {photo.caption && (
                      <div>
                        <div className="inset-0 absolute  imageCover  opacity-0  hover:opacity-100 ">
                          <div className="absolute bottom-0 text-white px-3 py-3 pt-10  text-lg font-bold w-full text-right">
                            {/* {photo.caption} */}
                            中国 / 深圳
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            />
          </div>
          {/* </InfiniteScroll> */}
        </div>
      </Box>
    </>
  );
}
