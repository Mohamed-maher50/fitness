"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React from "react";

const ProviderTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};
export default ProviderTheme;
