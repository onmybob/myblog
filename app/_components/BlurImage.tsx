import { useState } from "react";
import Image from "next/image";
import { RenderPhotoProps } from "react-photo-album";

export default function BlurImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
}: RenderPhotoProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={photo}
      placeholder={"blurDataURL" in photo ? "blur" : undefined}
      {...{ alt, title, sizes, className, onClick }}
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
  );
}
