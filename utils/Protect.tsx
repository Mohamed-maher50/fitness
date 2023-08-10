"use client";
import { useSession } from "next-auth/react";
import React from "react";

const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  if (!session) return <></>;
  return <>{children}</>;
};

export default ProtectRoute;
