import Exercises from "@/components/Exercises";
import Pagination from "@/components/Pagination";
import MusclesLogic from "@/logicComponents/MusclesLogic";
import { exercise } from "@/types";
import { getMuscles } from "@/utils/muscles";

import { getServerSession } from "next-auth";
import React, { FC } from "react";
interface Props {
  params: { id: string };
  searchParams: {
    page: string | undefined;
    query: string | undefined;
  };
}

let muscles: exercise[] | undefined = undefined;
let lastFilter: string | undefined;
const page: FC<Props> = async ({ searchParams }) => {
  const session = await getServerSession();
  console.log(session);
  if (lastFilter == undefined || lastFilter != searchParams.query) {
    lastFilter = searchParams.query;
    muscles = await getMuscles(searchParams.query);
  }
  if (!muscles) return <></>;
  return (
    <section className="pt-20">
      <div className=" container mx-auto">
        <MusclesLogic />

        <Exercises
          exercises={muscles?.slice(
            (Number(searchParams.page || 1) - 1) * 12, //10
            12 + (Number(searchParams.page || 1) - 1) * 12 //
          )}
        />

        <div className=" w-fit mx-auto">
          {Math.floor(muscles.length / 12) > 1 && (
            <Pagination
              value={searchParams.page || 1}
              pagesNumber={Math.floor(muscles.length / 12)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
