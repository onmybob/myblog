import type { RenderPhotoProps } from "react-photo-album";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import React, { useState } from "react";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      style={{
        ...wrapperStyle,
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div>
        <Image
          src={photo}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
          {...{ alt, title, sizes, className }}
          priority
          className={`
                duration-700 ease-in-out 
                ${
                  isLoading
                    ? "scale-110 blur-xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
          onLoad={() => setLoading(false)}
        />
        <div
          className="inset-0 absolute  imageCover  opacity-0  hover:opacity-100 "
          {...{ onClick }}
        >
          <div className="absolute bottom-0 text-white px-3 py-3 pt-10  text-lg font-bold w-full ">
            {/* {photo.caption} */}
            China / Shenzhen
          </div>
        </div>
      </div>
    </div>
  );
}
