import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import BlurImage from "../BlurImage";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
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
        <BlurImage
          image={photo}
          // fill
          // placeholder={"blurDataURL" in photo ? "blur" : undefined}
          // {...{ alt, title, sizes, className, onClick }}
        />
        <a href="http://wwww.baidu.com">
          <div className="inset-0 absolute  imageCover  opacity-0  hover:opacity-100 ">
            <div className="absolute bottom-0 text-white px-3 py-3 pt-10  text-lg font-bold w-full ">
              {/* {photo.caption} */}
              China / Shenzhen
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
