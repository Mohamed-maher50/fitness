import Exercises from "@/components/Exercises";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Title from "@/components/Title";
import { exercise } from "@/types";

import { getExercises } from "@/utils/Exercise";

interface Props {
  params: {};
  searchParams: {
    page?: string | undefined;
  };
}

let exercises: exercise[] = [];
export default async function Home({ params, searchParams }: Props) {
  if (exercises.length == 0) {
    exercises = await getExercises();
  }

  return (
    <main className="bg-neutral grid gap-y-4">
      <Hero />
      <Title title="Exercises" customStyle=" w-fit mx-auto " />
      {exercises.length ? (
        <Exercises
          exercises={exercises.slice(
            (Number(searchParams.page || 1) - 1) * 12, //10
            12 + (Number(searchParams.page || 1) - 1) * 12 //
          )}
        />
      ) : (
        <span className="badge-warning mx-auto  badge disabled w-fit">
          No Result
        </span>
      )}

      <div className="w-fit mx-auto p-4">
        {Math.floor(exercises.length / 12) > 1 && (
          <Pagination
            value={searchParams.page || 1}
            pagesNumber={Math.floor(exercises.length / 12)}
          />
        )}
      </div>
    </main>
  );
}
