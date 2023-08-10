"use client";
import React, { FC, Suspense } from "react";
import Title from "./Title";

import ExerciseCard from "./ExerciseCard";
import Loading from "./Loading";
import { exercise } from "@/types";
interface Props {
  exercises: exercise[];
}
const Exercises: FC<Props> = ({ exercises }) => {
  return (
    <section className="  pt-7 ">
      <div className="flex flex-wrap  flex-1 gap-y-5 container mx-auto">
        {exercises.map((ex, index) => {
          return (
            <ExerciseCard {...ex} key={index} link={`/exercise/${ex.id}`} />
          );
        })}
      </div>
    </section>
  );
};

export default Exercises;
