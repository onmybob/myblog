"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import PhotoAlbum from "react-photo-album";

const Gallery = ({ list }: { list: any }) => {
  const fetchMoreData = () => {};
  return (
    <InfiniteScroll
      dataLength={list?.data.data.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <PhotoAlbum
        layout="columns"
        photos={list?.data.data}
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
                        中国 / 深圳
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
};

export default Gallery;
