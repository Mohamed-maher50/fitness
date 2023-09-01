"use client";
import React, { useState } from "react";
import "./index.css";
const page = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);

  document.onclick = function () {
    setLoadingStatus(!loadingStatus);
  };
  return (
    <section className="container mx-auto  flex absolute top-0 overflow-hidden left-0 right-0 bottom-0 z-50 bg-black p-0">
      <div
        className={`${
          loadingStatus && "goOut"
        }  h-screen origin-left bg-secondary absolute right-0`}
      ></div>
      <div className=" bg-secondary goOut origin-right h-screen  absolute left-0"></div>
    </section>
  );
};

export default page;
