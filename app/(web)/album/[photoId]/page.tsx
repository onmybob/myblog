import React from "react";

export default async function PhotoDetail({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  return <div>${photoId}</div>;
}

export async function generateStaticParams() {
  const res = await fetch("https://www.bobjoy.com/api/index?currentPage=2&limit=10");
  const posts = await res.json();

  return posts.data.data.map((photo: any) => ({
    photoId: photo.id,
  }));
}
