"use client";
import { exercise } from "@/types";
import ProtectRoute from "@/utils/Protect";
import { usePathname, useRouter } from "next-intl/client";
import Image from "next/image";

import React, { FC, Suspense, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface Props extends exercise {
  link?: string;
  Loved?: boolean;
}
const ExerciseCard: FC<Props> = ({
  name,
  gifUrl,
  equipment,
  id,
  target,
  bodyPart,
  Loved,
  link,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLike = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("work");
  };
  const handleClick = () => {
    router.push(`${pathname}/${id}`);
  };
  console.log(Loved);
  return (
    <Suspense fallback={<>loading...</>}>
      <button
        onClick={handleClick}
        className="shadow-sm  rounded-md overflow-hidden mx-auto relative block w-[360px] shadow-black cursor-pointer "
      >
        <div className=" relative w-fit">
          <ProtectRoute>
            <span
              className="absolute text-xl text-red-500 top-2 right-2 p-2 bg-neutral rounded-full z-10"
              onClick={handleLike}
            >
              {Loved ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
          </ProtectRoute>
          <div className="relative">
            <Image
              src={gifUrl}
              className="object-contain"
              width={360}
              loading="eager"
              height={300}
              alt={name}
            />
          </div>
          <div className="absolute from-neutral bg-gradient-to-t  top-0 right-0 left-0 bottom-0"></div>{" "}
          <div className="relative bottom-0 grid grid-cols-2 bg-black p-3 right-0 left-0 text-primary text-start capitalize">
            <span className="text-white  font-semibold">{name}</span>
            <span>{equipment}</span>
            <span>{bodyPart}</span>
            <span>{target}</span>
          </div>
        </div>
      </button>
    </Suspense>
  );
};

export default ExerciseCard;
