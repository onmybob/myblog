import Gallery from "@/components/Web/Gallery";
import MyAlbum from "@/components/Web/MyAlbum";
import PhotoCategory from "@/components/Web/PhotoCategory";
import React from "react";

async function fetchData(page = 1) {
  "use server";
  console.log("run fetch data from server...."+page);

  const res = await fetch(
    `https://www.bobjoy.com/api/index?currentPage=${page}&limit=10`,
    {
       cache: "no-cache",
     //cache: "force-cache",
      // next: {
      //   revalidate: 60 *2,
      // },
    }
  );
  const data = await res.json();

  for (let i = 0; i < data.data.data.length; i++) {
    data.data.data[i].caption = "test";
  }

  return data.data;
}
 

export default async function Home() {

  const data = await fetchData();

  return (
    <>
      <PhotoCategory />
      <div className="mx-auto max-w-screen-2xl mt-6">
        <div className="px-10">
        {/* <Gallery initialItems={data} fetchData={fetchData} /> */}
        <MyAlbum initData={data} fetchData={fetchData}/>
        </div>
      </div>
    </>
  );
}
