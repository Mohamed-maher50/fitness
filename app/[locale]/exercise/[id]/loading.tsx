"use client";
import React, { useEffect, useState } from "react";
import AnimationLoading from "@/components/Loading";
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);
  return <AnimationLoading isLoading={isLoading} />;
};

export default Loading;
