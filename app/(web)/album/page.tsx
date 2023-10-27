import { InferGetStaticPropsType } from "next";
import React from "react";

const Demo = async () => {
  const res = await fetch("https://www.bobjoy.com/api/index?currentPage=2");
  const posts = await res.json();

  return (
    <>
      <h2 className="text-2xl">Voir les profils de nos utilisateurs</h2>
      {posts.data.data.map((item: any) => {
        return `<div>${item.id}</div><br>`;
      })}
    </>
  );
};

export default Demo;
