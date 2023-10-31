'use client'

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
        dataLength={photos.length}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={<h4>Loading...</h4>}
        >
         <PhotoAlbum
          layout="rows"
          photos={photos.flatMap((item) => item)}
          spacing={10}
          targetRowHeight={200}
          rowConstraints={{minPhotos:1,maxPhotos:3}}
          componentsProps={{ containerProps: { style: { paddingBottom: 20 } } }}
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