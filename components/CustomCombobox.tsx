"use client";
import { equipmentList } from "@/types";
import { Combobox } from "@headlessui/react";
import React, { FC, useState } from "react";

interface Props {
  children?: React.ReactNode;
  value: string;
  onchangeHandler: React.Dispatch<React.SetStateAction<any>>;
  customStyle?: string;
}
const CustomCombobox: FC<Props> = ({
  children,
  customStyle,
  onchangeHandler,
  value,
}) => {
  return (
    <div
      className={`bg-neutral shadow-sm shadow-stone-200 relative max-h-64 overflow-y-auto rounded-sm ${customStyle}`}
    >
      <Combobox value={value} onChange={onchangeHandler}>
        {children}
      </Combobox>
    </div>
  );
};

export default CustomCombobox;
