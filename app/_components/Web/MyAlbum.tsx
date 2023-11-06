"use client";

import Image from "next/image";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import { usePathname } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";

const MyAlbum = ({ initData, fetchData }: any) => {
  const [photos, setPhotos] = React.useState([initData.data]);
  const [hasNext, setHasNext] = React.useState(initData.hasNext);

  const pathname = usePathname();
  let type = pathname.substring(0, pathname.lastIndexOf("/"));
  type = type.substring(type.lastIndexOf("/") + 1);

  async function fetchMoreData() {
    const data = await fetchData(type, photos.length + 1);
    setHasNext(data.hasNext);
    setPhotos([...photos, data.data]);
  }

  const [index, setIndex] = React.useState(-1);

  const data = photos.flatMap((items) => items);
  return (
    <>
      <InfiniteScroll
        className="overflow-hidden"
        dataLength={photos.length}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={
          <div className="text-center flex items-center justify-center transition-opacity">
            <Image src="/loading2.gif" alt="loading" width="100" height="100" />
          </div>
        }
      >
        <PhotoAlbum
          layout="rows"
          photos={data}
          spacing={10}
          targetRowHeight={600}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={NextJsImage}
          componentsProps={{ containerProps: { style: { paddingBottom: 20 } } }}
        />
      </InfiniteScroll>
      <Lightbox
        index={index}
        slides={data}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default MyAlbum;
