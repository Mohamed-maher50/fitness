"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
} from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [Providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  console.log(Providers);
  return (
    <div className="w-1/2 p-4 bg-neutral rounded-md shadow-md">
      <h1>Login</h1>
      <div>
        {Providers &&
          Object.entries(Providers).map(([name, { signinUrl, id }]) => {
            return (
              <div key={id}>
                <Link href={signinUrl} key={id}>
                  {name}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Login;
