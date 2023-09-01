"use client";
import Link from "next/link";
import React from "react";
import { GiMailbox, GiWolfHead } from "react-icons/gi";
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("global");

  return (
    <footer className="w-full pt-6 text-primary-content  bg-neutral">
      <section className="container grid md:grid-cols-3 mx-auto py-6  ">
        <ul className="p-0">
          <li className="p-2 border-b-2 border-red-400">
            <Link href={"/"} className=" flex items-center  text-xl">
              <GiWolfHead className={"text-red-500 text-6xl  w-fit"} />
              {t("FitPulse")}
            </Link>
          </li>
          <li className="p-2  border-b-2 border-red-400">
            <Link href={"/"}>{t("Exercises")}</Link>
          </li>
          <li className="p-2  border-b-2 border-red-400">
            <Link href={"/equipment"}>{t("Equipment")}</Link>
          </li>
          <li className="p-2 border-b-2 border-red-400">
            <Link href={"/muscles"}> {t("Muscles")}</Link>
          </li>
        </ul>{" "}
        <div></div>
        <div className="  flex flex-col gap-y-3">
          <h2 className="text-red-400 text-lg underline underline-offset-4">
            {t("ContactUs")}
          </h2>
          <div className="flex items-center h-fit gap-x-3">
            <AiOutlineMail />
            <span>mohamedmaher.mm330@gmail.com</span>
          </div>{" "}
          <Link
            target="_blank"
            href={"https://github.com/Mohamed-maher50/"}
            className="flex text-inherit items-center h-fit gap-x-3"
          >
            <AiOutlineGithub />
            <span>Mohamed-maher50</span>
          </Link>
          <div className="flex items-center h-fit gap-x-3">
            <AiOutlinePhone />
            <span>01151999565</span>
          </div>
          <div className="flex items-center h-fit gap-x-3">
            <AiOutlinePhone />
            <span>01062616043</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
