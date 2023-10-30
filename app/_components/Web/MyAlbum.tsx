'use client'

import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoAlbum, { Photo } from "react-photo-album";

const MyAlbum=({ fetchData }: any)=>{

    const [photos, setPhotos] = useState<Photo[][]>([]);

    const  fetchPhotos = useCallback(async(page: number) => {
        let fetchCancelled = false;
        const data =  await fetchData(page % 20);
            if (!fetchCancelled) {
                setPhotos((prev) => [...prev, data.data]);
            }
        return () => {
          fetchCancelled = true;
        };
      }, []);


      useEffect(() => {
        fetchPhotos(1)
          .catch(console.error);
      }, [fetchPhotos])


      return (
        <InfiniteScroll
          dataLength={photos.length}
          next={() => {
            fetchPhotos(photos.length);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <PhotoAlbum
            layout="masonry"
            photos={photos.flatMap((items) => items)}
            spacing={10}
          />
        </InfiniteScroll>
      );
      
}

export default MyAlbum;