"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
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

  return (
    <div className="w-1/2 p-4 bg-neutral rounded-md shadow-md">
      <h1>Login</h1>
      <div className="pt-36">
        {Providers &&
          Object.entries(Providers).map(([name, { signinUrl, id }]) => {
            return (
              <div key={id}>
                <button onClick={() => signIn(id)} key={id}>
                  {name}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Login;
