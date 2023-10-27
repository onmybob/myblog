import Image from "next/image";
import PhotoCategory from "@/components/Web/PhotoCategory";
import React from "react";

const Loading = () => {
  return (
    <div>
      <PhotoCategory />

      <div className="mx-auto max-w-screen-2xl mt-6">
        <div>
          <div className="text-center flex items-center justify-center transition-opacity">
            <Image src="/loading2.gif" alt="loading" width="100" height="100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
