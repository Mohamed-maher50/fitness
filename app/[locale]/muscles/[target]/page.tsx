"use client";
import ExerciseCard from "@/components/ExerciseCard";
import Title from "@/components/Title";
import { someOfData } from "@/constant/config";
import { exercise } from "@/types";
import { getTargetMusclesExercises } from "@/utils/muscles";
import { NextPage } from "next";

import React, { useEffect, useState } from "react";
type PageProps = {
  params: {
    target: string;
    viewed: exercise[];
  };
};
const page: NextPage<PageProps> = ({ params: { target } }) => {
  const [Exercise, setExercise] = useState<undefined | exercise[]>(undefined);
  const [index, setIndex] = useState(9);
  const viewed = Exercise?.slice(0, index);

  useEffect(() => {
    const getExercies = async () => {
      const res = await getTargetMusclesExercises(decodeURI(target));
      setExercise(res);
    };
    getExercies();
  }, [target]);

  return (
    <section className="container mx-auto text-white">
      <Title
        title={decodeURI(target)}
        customStyle="capitalize no-underline mx-auto"
      />
      <div className="grid grid-cols-3 gap-2">
        {viewed?.map((exercise, index) => {
          return <ExerciseCard key={index} {...exercise} />;
        })}
      </div>
      {Exercise?.length && index < Exercise?.length && (
        <button
          className="btn mx-auto mt-6 block w-fit"
          onClick={() => {
            setIndex(index + 9);
          }}
        >
          view more
        </button>
      )}
    </section>
  );
};

export default page;
