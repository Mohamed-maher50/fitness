"use client";
import CustomCombobox from "@/components/CustomCombobox";
import React, { useEffect, useState } from "react";
import { equipmentList, equipmentArray } from "@/types";

import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
const Test = () => {
  const router = useRouter();
  const [selectedEquipment, setSelectedEquipment] = useState<equipmentList>(
    equipmentArray[0]
  );
  const [query, setQuery] = useState<equipmentList | string>("");

  const filteredEquipment =
    query === ""
      ? equipmentArray
      : equipmentArray.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search);
    queryString.append("query", selectedEquipment);
    if (queryString.has("query")) queryString.set("query", selectedEquipment);
    router.push(`${window.location.pathname}?${queryString.toString()}`);
  }, [selectedEquipment]);
  return (
    <div className="md:w-1/2 mx-auto ">
      <CustomCombobox
        value={selectedEquipment}
        onchangeHandler={setSelectedEquipment}
      >
        <Combobox.Input
          as={"input"}
          className={
            "w-full p-2 py-2 rounded-sm  outline-none h-full sticky top-0 text-sm leading-5 text-gray-500 font-bold focus:ring-0"
          }
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
        />

        <Combobox.Options as={"ul"} className={"grid gap-2 p-1"}>
          {filteredEquipment.map((value, index) => {
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

export default Test;
