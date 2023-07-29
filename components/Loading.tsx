"use client";
import React, { FC, useEffect, useState } from "react";
interface Props {
  isLoading: boolean;
}
const Loading: FC<Props> = ({ isLoading }) => {
  const [init, setInit] = useState(true);
  useEffect(() => {
    return () => {
      setInit(false);
    };
  }, []);
  return (
    <div
      className={`min-h-screen  absolute z-40 bg-white w-screen flex overflow-hidden`}
    ></div>
  );
};

export default Loading;
