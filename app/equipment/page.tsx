import ExerciseCard from "@/components/ExerciseCard";
import Exercises from "@/components/Exercises";
import Pagination from "@/components/Pagination";
import Title from "@/components/Title";
import Test from "@/logicComponents/EquipmentLogic";
import { User } from "@/models/User";
import { Equipment } from "@/types";
import { getEquipment } from "@/utils/Equipment";
import { getServerSession } from "next-auth/next";

import React, { FC, Suspense } from "react";
interface Props {
  params: {};
  searchParams: {
    page?: string | undefined;
    query?: string | undefined;
  };
}
let currentQuery: undefined | string = undefined;
let equipment: Equipment[] | undefined = [];
const page: FC<Props> = async ({ searchParams }) => {
  const session = await getServerSession();
  console.log(session);

  if (currentQuery != searchParams.query) {
    currentQuery = searchParams.query;
    equipment = await getEquipment(searchParams.query);
  }
  if (!equipment) return <></>;

  return (
    <div className="min-h-screen pt-36 ">
      <div className="container mx-auto">
        <Title title="equipment" customStyle="capitalize my-5 mx-auto w-fit" />
        <div className="my-9">
          <Test />
        </div>
        <Suspense
          fallback={<div className="text-3xl text-white"> Loading...</div>}
        >
          <Exercises
            exercises={equipment.slice(
              (Number(searchParams.page || 1) - 1) * 12, //10
              12 + (Number(searchParams.page || 1) - 1) * 12 //
            )}
          />
        </Suspense>
        <div className="w-fit mx-auto p-4">
          {Math.floor(equipment.length / 12) > 1 && (
            <Pagination
              value={searchParams.page || 1}
              pagesNumber={Math.floor(equipment.length / 12)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
