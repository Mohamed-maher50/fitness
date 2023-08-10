"use client";
import Exercises from "@/components/Exercises";
import Hero from "@/components/Hero";
import Pagination from "@/components/pagination/Pagination";
import Title from "@/components/Title";
import { someOfData } from "@/constant/config";
import { exercise } from "@/types";
import { connectBD } from "@/utils/database";

import { getExercises } from "@/utils/Exercise";
import { useEffect, useState } from "react";

interface Props {
  params: {};
  searchParams: {
    page?: string | undefined;
  };
}
export default function Home({ searchParams }: Props) {
  const [exercises, setExercises] = useState<exercise[] | undefined>(
    someOfData
  );

  const [exercisesFilter, setExercisesFilter] = useState<
    exercise[] | undefined
  >(exercises?.slice(0, 12));
  useEffect(() => {
    // async () => {
    //   // const res = await getExercises();
    //   // setExercises(res);
    // };
  }, []);
  console.log(exercises?.length);
  const handleNextPage = (number: number) => {
    let start = 12 * number;
    let end = start + 12;
    console.log(number);
    console.log(start, end);
    console.log(exercises?.slice(start, end));
    setExercisesFilter(exercises?.slice(start, end));
  };

  return (
    <main className="bg-neutral grid gap-y-4">
      <Hero />
      <Title title="Exercises" customStyle=" w-fit mx-auto " />
      {exercisesFilter?.length ? (
        <Exercises exercises={exercisesFilter} />
      ) : (
        <span className="badge-warning mx-auto  badge disabled w-fit">
          No Result
        </span>
      )}

      <div className="w-fit mx-auto p-4">
        {/* {Math.floor(exercises.length / 12) > 1 && (
          <Pagination
            value={searchParams.page || 1}
            pagesNumber={Math.floor(exercises.length / 12)}
          />
        )} */}
      </div>

      <div className="w-fit mx-auto p-4">
        <Pagination
          buttonNumber={Math.ceil(someOfData.length / 12)}
          nextCb={handleNextPage}
        />
      </div>
    </main>
  );
}
