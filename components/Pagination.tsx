"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
interface Props {
  value: string | number;
  pagesNumber: number;
}
const Pagination: FC<Props> = ({ value, pagesNumber }) => {
  const router = useRouter();
  const nextHandler = () => {
    const url = new URLSearchParams();
    if (+value < pagesNumber) {
      let newValue = +value;
      newValue++;
      url.append("page", newValue.toString());
      router.push(`${window.location.pathname}?${url}`);
    }
  };
  const prevHandler = () => {
    const url = new URLSearchParams();
    if (+value - 1 != 0) {
      let newValue = +value;
      newValue--;
      url.append("page", newValue.toString());
      router.push(`${window.location.pathname}?${url}`);
    }
  };
  return (
    <div className="join mx-auto">
      <button
        className="join-item btn disabled:text-red-300 disabled:bg-neutral"
        onClick={prevHandler}
        disabled={value == 1}
      >
        «
      </button>
      <button className="join-item btn">Page {value}</button>
      <button
        className="join-item btn disabled:text-red-300 disabled:bg-neutral"
        onClick={nextHandler}
        disabled={value == pagesNumber}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
