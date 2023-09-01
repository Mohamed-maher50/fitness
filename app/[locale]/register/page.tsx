"use client";
import React, { FormEvent } from "react";

const page = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const d = await res.json();
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 mx-auto gap-9 text-white flex flex-col"
      >
        <div className="flex flex-col">
          <label>Eamil</label>
          <input
            type="text"
            placeholder="enter your email "
            className="text-black"
            name="email"
          />
        </div>
        <div className="flex flex-col text-black">
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your email"
          />
        </div>
        <button>Register</button>
      </form>
    </section>
  );
};

export default page;
