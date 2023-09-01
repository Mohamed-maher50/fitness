import React, { createContext, useState } from "react";
interface ContextProps {
  theme: string;
  ToggleMode: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextProps>({
  theme: "dark",
  ToggleMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");
  const ToggleMode = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        ToggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
