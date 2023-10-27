import Gallery from "@/components/Web/Gallery";
import PhotoCategory from "@/components/Web/PhotoCategory";
import React from "react";

export default async function Home() {
  const res = await fetch("https://www.bobjoy.com/api/index?currentPage=2", {
    cache: "force-cache",
    // next: {
    //   revalidate: 60 * 60 * 2,
    // },
  });
  const data = await res.json();

  for (let i = 0; i < data.data.data.length; i++) {
    data.data.data[i].src = data.data.data[i].url;
    data.data.data[i].caption = "test";
  }

  return (
    <>
      <PhotoCategory />
      <div className="mx-auto max-w-screen-2xl mt-6">
        <Gallery list={data} />
      </div>
    </>
  );
}
