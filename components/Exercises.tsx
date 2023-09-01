import React, { FC } from "react";
import ExerciseCard from "./ExerciseCard";

import { exercise } from "@/types";
interface Props {
  exercises: exercise[];
}
const Exercises: FC<Props> = ({ exercises }) => {
  return (
    <section>
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
