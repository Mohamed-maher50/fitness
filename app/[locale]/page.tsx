import { Metadata } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AiOutlineSetting } from "react-icons/ai";
export const metadata: Metadata = {
  title: "home",
  description: "welcome in out page",
};

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="bg-base-100 grid gap-y-4">
      <section className="min-h-screen">
        <div className="w-full h-full bg-base-300  relative">
          <Image
            src={"/images/hero1.webp"}
            className="object-cover"
            width={1200}
            height={800}
            layout="responsive"
            alt=""
            loading="eager"
          />
          <div className="absolute from-base-300  h-full to-transparent bg-gradient-to-r top-0 left-0 right-0">
            <div className="container  flex  mx-auto pt-40">
              <div>
                <h1 className="text-6xl  text-white  first-letter:text-primary mb-6 font-bold w-96">
                  {t("title")}
                </h1>
                <h1 className="text-lg text-gray-400 font-bold lg:w-2/5">
                  {t("desc")}
                </h1>

                <div className=" flex mb-4 mt-14 alert w-fit font-semibold text-xl capitalize  text-white alert-success rounded-md">
                  <AiOutlineSetting className="animate-spin text-secondary text-2xl font-bold" />
                  <span className="">{t("alerts.development")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
