import { HeaderConfig } from "@/constant/config";

export const getMuscles = async (query?: string) => {
  console.log(query);
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/target/${
      query || "upper back"
    }`,
    HeaderConfig
  );
  if (!response.ok) return;
  const data = await response.json();
  return data;
};
