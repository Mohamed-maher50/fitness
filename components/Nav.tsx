"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { GiWolfHead } from "react-icons/gi";

import {
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
  signOut,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import Image from "next/image";
import ProtectRoute from "@/utils/Protect";

const Nav = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [Providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const { data: session } = useSession();
  console.log(session);
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

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div
      className={`navbar z-30  ${
        isMoving ? "bg-black z-30 sticky  top-0" : "bg-transparent"
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
          <ProtectRoute>
            <li>
              <button onClick={() => signOut()}>signOut</button>
            </li>
          </ProtectRoute>
          {session?.user?.image && (
            <li>
              <Image
                src={session?.user?.image}
                alt="user image"
                width={80}
                height={80}
                className="rounded-full"
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
