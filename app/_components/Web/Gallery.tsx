"use client";

import React, { memo, useState } from "react";
import PhotoAlbum from "react-photo-album";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = memo(function Gallery({ initialItems, fetchData }: any) {
  console.log("---------------start render-------------");

  const fetching = React.useRef(false);
  const [pages, setPages] = React.useState(initialItems.data);
  const [pageNumber, setPageNumber] = useState(2);
  const [hasNext, setHasNext] = useState(true);

  const hasNexthasNext = React.useRef(true);

  console.log("---------------hasNext-------------" + hasNext);
  console.log("---------------pageNumber-------------" + pageNumber);
  console.log("---------------pages-------------" + pages.length);

  async function fetchMoreData() {
    console.log("---------fetchMoreData-----");

    const data = await fetchData(pageNumber);
    setHasNext(data.hasNext);
    hasNexthasNext.current = data.hasNext;
    setPages([...pages, ...data.data]);

    setPageNumber(pageNumber + 1);
  }

  return (
    <InfiniteScroll
      dataLength={pages.length}
      next={fetchMoreData}
      hasMore={hasNexthasNext.current}
      loader={<h4>Loading...</h4>}
    >
      <PhotoAlbum
        layout="columns"
        photos={pages}
        columns={3}
        spacing={20}
        renderPhoto={({
          photo,
          imageProps: { src, alt, style, ...restImageProps },
        }) => (
          <div>
            <div className="cursor-pointer relative ">
              {/* <Image
                src={src}
                alt={alt}
                style={{ ...style, borderRadius: "2px" }}
                {...restImageProps}
              /> */}

              <img
                src={src}
                alt={alt}
                style={{ ...style, borderRadius: "2px" }}
                {...restImageProps}
              />
              {photo && (
                <div>
                  <a href="http://wwww.baidu.com">
                    <div className="inset-0 absolute  imageCover  opacity-0  hover:opacity-100 ">
                      <div className="absolute bottom-0 text-white px-3 py-3 pt-10  text-lg font-bold w-full text-right">
                        {/* {photo.caption} */}
                        China / Shenzhen
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      />
    </InfiniteScroll>
  );
});

export default Gallery;
