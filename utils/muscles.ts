import { HeaderConfig } from "@/constant/config";
import { notFound } from "next/navigation";

export const getMuscles = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/exercises`, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) return [];
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getTargetMuscles = async () => {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises/target/",
    HeaderConfig
  );
  if (!response.ok) return undefined;
  return await response.json();
};
export const getTargetMusclesExercises = async (target: string) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_XRapidAPIKey as string,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
      cache: "no-store",
    }
  );
  if (!response.ok) return undefined;
  return await response.json();
};
