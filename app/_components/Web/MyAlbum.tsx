'use client'

import Image from "next/image";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoAlbum from "react-photo-album";

const MyAlbum=({ initData,fetchData }: any)=>{

  const [photos, setPhotos] = React.useState([initData.data]);
  const [hasNext, setHasNext] = React.useState(initData.hasNext);

  async function fetchMoreData() {
    const data = await fetchData(photos.length + 1);
    setHasNext(data.hasNext);
    setPhotos([...photos, data.data]);
  }
      return (
        <InfiniteScroll
        className=""
        dataLength={photos.length}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={<div className="text-center flex items-center justify-center transition-opacity">
        <Image src="/loading2.gif" alt="loading" width="100" height="100" />
      </div>}
        >
        <PhotoAlbum
        layout="masonry"
        photos={photos.flatMap((items) => items)}
        spacing={10}
        
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 3;
        }}
        componentsProps={{ containerProps: { style: { paddingBottom: 20,  } } }}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ position: "relative", ...wrapperStyle }}>
            {renderDefaultPhoto({ wrapped: true })}
            {photo && (
              <div>
                <a href="http://wwww.baidu.com">
                  <div className="inset-0 absolute  imageCover  opacity-0  hover:opacity-100 ">
                    <div className="absolute bottom-0 text-white py-3 pt-10  text-lg font-bold w-full text-right">
                      {/* {photo.caption} */}
                      China / Shenzhen
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        )}
      />

        </InfiniteScroll>
      );
      
}

export default MyAlbum;