"use client";
import CustomCombobox from "@/components/CustomCombobox";
import { muscleGroups } from "@/types";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MusclesLogic = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const filterMuscles = !query
    ? muscleGroups
    : muscleGroups.filter(
        (muscle) =>
          muscle.toLowerCase().startsWith(query.toLowerCase()) ||
          muscle.toLowerCase().includes(query.toLowerCase())
      );
  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search);
    queryString.append("query", selectedMuscle);
    if (queryString.has("query")) queryString.set("query", selectedMuscle);
    router.push(`${window.location.pathname}?${queryString.toString()}`);
  }, [selectedMuscle]);
  return (
    <div className="md:w-1/2 mx-auto pt-16">
      <CustomCombobox
        value={selectedMuscle}
        onchangeHandler={setSelectedMuscle}
      >
        <Combobox.Input
          as={"input"}
          className={
            "w-full p-2 py-2  rounded-sm  outline-none h-full sticky top-0 text-sm leading-5 text-gray-500 font-bold focus:ring-0"
          }
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
        />

        <Combobox.Options as={"ul"} className={"grid gap-2 p-1"}>
          {filterMuscles.map((value, index) => {
            return (
              <Combobox.Option
                as="li"
                className={
                  "text-white  hover:text-neutral hover:bg-slate-50 duration-200 shadow-sm cursor-pointer  bg-neutral  font-semibold p-3"
                }
                value={value}
                key={index}
              >
                {value}
              </Combobox.Option>
            );
          })}
        </Combobox.Options>
      </CustomCombobox>
    </div>
  );
};

export default MusclesLogic;
