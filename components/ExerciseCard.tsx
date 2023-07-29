"use client";
import { exercise } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface Props extends exercise {
  link?: string;
}
const ExerciseCard: FC<Props> = ({
  name,
  gifUrl,
  equipment,
  id,
  target,
  bodyPart,
  link,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <Link
      className="shadow-sm  rounded-md overflow-hidden mx-auto relative block w-[360px] shadow-black cursor-pointer "
      href={link || "/"}
    >
      <div className=" relative w-fit">
        <div className=" absolute top-2 left-2 block w-fit badge-neutral badge-lg shadow-sm font-bold z-10 badge text-white ">
          {bodyPart}
        </div>
        <div className=" absolute top-2 right-2 block w-fit badge-neutral badge-lg shadow-sm font-bold z-10 badge text-white ">
          {target}
        </div>
        <div className="relative">
          <Image
            src={gifUrl}
            className="object-contain"
            width={360}
            height={360}
            alt={name}
          />
        </div>

        <div className="absolute from-neutral bg-gradient-to-t  top-0 right-0 left-0 bottom-0"></div>
        <div className="absolute bottom-0 bg-black p-3 right-0 left-0 text-primary  capitalize">
          <span className="text-white font-semibold">{name}</span>

          <div>{equipment}</div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
