import { HeaderConfig } from "@/constant/config";

export const getEquipment = async (query?: string | undefined) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/equipment/${
      query || "assisted"
    }`,
    HeaderConfig
  );
  if (!response.ok) return;
  const data = await response.json();
  return data;
};
