import { useState } from "react";
import Image from "next/image";

export default function BlurImage({ image }:any) {
    const [isLoading, setLoading] = useState(true);
  
    return (
          <Image
            alt=""
            src={image}
            layout="fill"
            objectFit="cover"
            className={`
                duration-700 ease-in-out 
                ${
                  isLoading
                    ? "scale-110 blur-xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
            onLoadingComplete={() => setLoading(false)}
          />
    );
  }