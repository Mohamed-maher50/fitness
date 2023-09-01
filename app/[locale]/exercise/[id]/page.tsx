import { getExerciseById } from "@/utils/Exercise";
import Image from "next/image";
import React, { FC } from "react";
interface Props {
  params: { id: string };
  searchParams: object;
}

const page: FC<Props> = async ({ params: { id } }) => {
  const exercise = await getExerciseById(id);

  return (
    <div className="pt-24 container mx-auto text-white   ">
      <article className="grid md:grid-cols-2 p-2 rounded-md overflow-hidden shadow-md  bg-gray-100 ">
        <div className="w-full h-96 relative ">
          <Image
            src={exercise.gifUrl}
            fill
            alt={exercise.name}
            className="object-content"
          />
        </div>
        <div className="p-2 gap-y-5 flex relative flex-col justify-start ">
          <h1 className="rounded-md bg-white  text-neutral shadow-md text-xl font-bold capitalize p-5  ">
            {exercise.name}
          </h1>
          <div className=" flex justify-between ">
            <span className=" bg-neutral  w-fit  border-primary text-white text-xl rounded-md p-2  shadow-sm   min-w-fit  font-bold capitalize ">
              {exercise.bodyPart}
            </span>
            <div className=" flex gap-2    rounded-md  min-w-fit  ">
              <span className="bg-white font-semibold  capitalize  text-primary text-xl rounded-md p-3">
                {exercise.target}
              </span>
              <span className=" bg-white font-semibold  capitalize  text-primary text-xl rounded-md p-3 ">
                {exercise.equipment}
              </span>
              <span className=" bg-white font-semibold  capitalize  text-primary text-xl rounded-md p-3 ">
                {exercise.target}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;
