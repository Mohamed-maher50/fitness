"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { GiWolfHead } from "react-icons/gi";

const Nav = () => {
  const [isMoving, setIsMoving] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60 && isMoving != true) {
        setIsMoving(true);
      }
      if (window.scrollY <= 60 && isMoving != false) {
        setIsMoving(false);
      }
    });
  });

  return (
    <div
      className={`navbar z-30 fixed ${
        isMoving ? "bg-black z-30 top-0  " : "bg-transparent"
      }`}
    >
      <div className="flex-1">
        <Link
          href={"/"}
          className=" flex items-center text-white normal-case text-xl"
        >
          {" "}
          <GiWolfHead className={"text-red-500 text-6xl  w-fit mx-auto"} />
          FitPulse
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-primary px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/equipment"}>Equipment</Link>
          </li>
          <li>
            <Link href={"/muscles"}>Muscles</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
