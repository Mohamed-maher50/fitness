"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
const page = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", { ...formData, redirect: false });
    console.log(res);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex pt-36 flex-col w-1/3 mx-auto"
    >
      <input
        type="email"
        name="email"
        onChange={({ target }) => {
          setFormData({ ...formData, email: target.value });
        }}
        placeholder="Enter Your email Address"
      />
      <input
        name="password"
        onChange={({ target }) => {
          setFormData({ ...formData, password: target.value });
        }}
        type="password"
        placeholder="Enter Your password"
      />
      <button>Login</button>
    </form>
  );
};

export default page;
