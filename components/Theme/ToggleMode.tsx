"use client";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const renderIcon = (theme: string | undefined) => {
  return theme === "light" ? (
    <span>
      <BsFillMoonStarsFill />
    </span>
  ) : (
    <span className="text-orange-300 ">
      <BsFillSunFill />
    </span>
  );
};

const ToggleMode = () => {
  const { setTheme, theme }: UseThemeProps = useTheme();
  const handleToggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <span className="form-control" onClick={handleToggleTheme}>
      <label className="label cursor-pointer">
        <span className="label-text font-bold text-lg">
          {renderIcon(theme)}
        </span>
      </label>
    </span>
  );
};

export default ToggleMode;
