import { HeaderConfig } from "@/constant/config";

import { notFound } from "next/navigation";

export const getExercises = async () => {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises",
    HeaderConfig
  );
  if (!response.ok) return;
  const data = await response.json();
  return data;
};

export const getExerciseById = async (id: number | string) => {
  // https://exercisedb.p.rapidapi.com/exercises/exercise/${id}
  const res = await fetch(`http://localhost/api/exercises/${id}`, {
    ...HeaderConfig,
    cache: "no-cache",
  });

  if (!res.ok) notFound();

  const data = await res.json();
  return data;
};
