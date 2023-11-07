"use client";

import { categories } from "_constants";
import { usePathname } from "next/navigation";

const PhotoCategory = () => {
  const pathname = usePathname();
  let type = pathname.substring(0, pathname.lastIndexOf("/"));
  type = type.substring(type.lastIndexOf("/") + 1);

  if (type == "") {
    type = "All";
  }

  return (
    <div className="mt-10 mb-5 border-b-[1px] px-5">
      <div className="mx-auto max-w-screen-2xl">
        <ul className="flex flex-row gap-12   text-gray-600">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                className={`flex flex-row gap-2  border-b-[3px] pb-5 pr-2${
                  item.tag === type
                    ? " text-black border-black"
                    : " border-white"
                }`}
                key={index}
              >
                <p className="bg-gray-0  rounded-full text-xs	font-normal flex items-center justify-center">
                  <Icon size={18} />
                </p>
                <a href={`/album/${item.tag}`}>{item.tag}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PhotoCategory;
