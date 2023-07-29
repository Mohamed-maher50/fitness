"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { GiWolfHead } from "react-icons/gi";
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black absolute top-0 bottom-0 right-0 left-0 z-40">
      <div>
        <GiWolfHead className={"text-red-500 text-6xl w-fit mx-auto"} />
        <h1 className="text-white text-2xl text-center p-4"> FitPulse</h1>
        <p className="alert alert-error text-center capitalize text-white">
          sorry some Error occur
        </p>
        <p className="alert alert-warning text-center capitalize text-white">
          {error.message}
        </p>
        <Link
          href={window.location.pathname}
          className="btn  mx-auto w-fit block mt-3"
          onClick={reset}
        >
          Go to {window.location.pathname.slice(1)} page
        </Link>
      </div>
    </div>
  );
};

export default Error;
