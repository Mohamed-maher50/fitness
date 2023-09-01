import Image from "next/image";
import React from "react";

const ImageCover = () => {
  return (
    <Image
      src={"/images/hero1.jpg"}
      className="object-cover"
      fill
      alt=""
      loading="eager"
    />
  );
};

export default ImageCover;
