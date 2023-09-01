import Title from "@/components/Title";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Explore equipments",
  description: "",
};
import React, { FC, Suspense } from "react";
interface Props {
  params: {};
  searchParams: {
    page?: string | undefined;
    query?: string | undefined;
  };
}
const page: FC<Props> = async ({ searchParams }) => {
  // const session = await getServerSession();
  return (
    <div className="min-h-screen pt-36 ">
      <div className="container mx-auto">
        <Title title="equipment" customStyle="capitalize my-5 mx-auto w-fit" />

        <Suspense
          fallback={<div className="text-3xl text-white"> Loading...</div>}
        >
          {/* <Exercises
            exercises={equipment.slice(
              (Number(searchParams.page || 1) - 1) * 12, //10
              12 + (Number(searchParams.page || 1) - 1) * 12 //
            )}
          /> */}
        </Suspense>
        {/* <div className="w-fit mx-auto p-4">
          {Math.floor(equipment.length / 12) > 1 && (
            <Pagination
              value={searchParams.page || 1}
              pagesNumber={Math.floor(equipment.length / 12)}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default page;
