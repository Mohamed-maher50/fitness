"use client";
import Link from "next-intl/link";

import React, { useEffect, useState } from "react";
import { GiWolfHead } from "react-icons/gi";
import { usePathname, useRouter } from "next-intl/client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ProtectRoute from "@/utils/Protect";
import dynamic from "next/dynamic";

const ToggleMode = dynamic(() => import("./Theme/ToggleMode"), {
  ssr: false, // Set ssr option to false
});

const Nav = () => {
  const [isMoving, setIsMoving] = useState(false);
  const t = useTranslations("global");
  const pathname = usePathname();

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250 && isMoving != true) {
        setIsMoving(true);
      }
      if (window.scrollY <= 60 && isMoving != false) {
        setIsMoving(false);
      }
    });
  });

  return (
    <div
      dir="ltr"
      className={`navbar z-30  text-primary-content absolute  top-0 ${
        isMoving ? "bg-neutral z-30 sticky  top-0" : "bg-neutral"
      }`}
    >
      <div className="flex-1 text-primary">
        <Link href={"/"} className=" flex items-center normal-case text-xl">
          <GiWolfHead className={" text-6xl  w-fit mx-auto"} />
          {t("FitPulse")}
        </Link>
      </div>

      <ul className="menu menu-horizontal h-full  text-primary px-1">
        <li>
          <ToggleMode />
        </li>
        <li>
          <details>
            <summary> {t("lang")}</summary>
            <ul>
              <li>
                <Link href={pathname} locale="en">
                  EN
                </Link>
              </li>
              <li>
                <Link href={pathname} locale="ar">
                  AR
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <span onClick={() => router.push("/")}>{t("Home")}</span>
        </li>
        <li>
          <span onClick={() => router.push("/equipment")}>
            {t("Equipment")}
          </span>
        </li>
        <li>
          <span onClick={() => router.push("/muscles")}>{t("Muscles")}</span>
        </li>
        <li className="dropdown dropdown-end">
          {(
            <ProtectRoute>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {session?.user?.image && (
                    <Image
                      src={session?.user?.image}
                      alt="user image"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  )}
                </div>
              </label>
            </ProtectRoute>
          ) || <button>Sign in</button>}

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu text-black menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={() => signOut()}>signOut</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
