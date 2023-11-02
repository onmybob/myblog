import PhotoCategory from "@/components/Web/PhotoCategory";
import React from "react";
import MyAlbum from "@/components/Web/MyAlbum";

async function fetchData(tag: string, page = 1) {
  "use server";
  const res = await fetch(
    `https://www.bobjoy.com/api/index?currentPage=${page}&limit=10&tag=${tag}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  for (let i = 0; i < data.data.data.length; i++) {
    data.data.data[i].caption = "test";
  }
  return data.data;
}

export default async function PhotoSearch({
  params: { photoType },
}: {
  params: { photoType: string };
}) {
  const data = await fetchData(photoType);

  return (
    <>
      <PhotoCategory />
      <div className="px-5">
        <div className="mx-auto max-w-screen-2xl mt-6">
          {/* <Gallery initialItems={data} fetchData={fetchData} /> */}
          <MyAlbum initData={data} fetchData={fetchData} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://www.bobjoy.com/api/index?currentPage=2&limit=10"
  );
  const posts = await res.json();

  return posts.data.data.map((photo: any) => ({
    photoId: photo.id,
  }));
}
