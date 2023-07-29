"use client";
import React from "react";

const Loading = () => {
  return (
    <div className=" w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-40 flex bg-black  text-white justify-center items-center">
      <span className="text-4xl">loading..</span>
    </div>
  );
};

export default Loading;
