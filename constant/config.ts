import { HeaderConfig as HeaderConfigType } from "@/types";

export const HeaderConfig: RequestInit = {
  headers: {
    "X-RapidAPI-Key": process.env.XRapidAPIKey || "",
    "X-RapidAPI-Host": process.env.XRapidAPIHost || "",
  },
};
