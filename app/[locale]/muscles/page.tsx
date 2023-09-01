import ExerciseCard from "@/components/ExerciseCard";

import { exercise } from "@/types";
import { getMuscles } from "@/utils/muscles";

interface Props {
  params: { id: string };
  searchParams: {
    page: string | undefined;
    query: string | undefined;
  };
}

const page = async () => {
  const MusclesExercises: exercise[] = await getMuscles();
  console.log(MusclesExercises);

  return (
    <section className="py-5 mt-28">
      <div className=" container mx-auto">
        <div className="grid bg-neutral p-5 lg:grid-cols-2 xl:grid-cols-3 gap-x-7 lg:gap-x-2 gap-y-3">
          {MusclesExercises.map((exercise, index) => {
            return <ExerciseCard {...exercise} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
