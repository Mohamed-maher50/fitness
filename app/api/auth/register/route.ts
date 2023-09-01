import User from "@/models/User";
import { hash } from "@/utils/bcrypt";
import { connectBD } from "@/utils/database";
import { NextApiRequest } from "next";

import { NextResponse } from "next/server";

export const POST = async ({ request }: any) => {
  try {
    await connectBD();
    const { email, password } = await request.json();

    const userExist = await User.findOne({ email });
    if (userExist)
      return new NextResponse(JSON.stringify("this account already Exist"), {
        status: 403,
      });
    const user = await new User({
      email,
      password: await hash(password),
    }).save();

    return new NextResponse(JSON.stringify("success"), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify("some error occur"), {
      status: 500,
    });
  }
};
