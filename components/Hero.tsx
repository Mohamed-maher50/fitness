import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="min-h-screen __hero pt-64 flex flex-col container mx-auto">
      <h1 className="text-6xl first-letter:text-primary text-white mb-6 font-bold w-96">
        Unleash Your inner Athlete
      </h1>
      <h1 className="text-lg text-gray-400 font-bold lg:w-2/5">
        The fitnation gives you access to over 1300 exercises with individual
        exercise data and animated demonstrations.
      </h1>

      <div className=" flex mb-4 mt-auto alert w-fit font-semibold text-xl capitalize  text-white alert-success rounded-md">
        <AiOutlineSetting className="animate-spin text-secondary text-2xl font-bold" />
        <span className="">This website is currently under development.</span>
      </div>
    </section>
  );
};

export default Hero;
