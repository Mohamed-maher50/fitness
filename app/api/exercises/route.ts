import { GetMuscles } from "@/constant/config";
import { connectBD } from "@/utils/database";

import { NextResponse } from "next/server";
import { ExercisePost } from "../types";
import Exercise from "@/models/Exercise";
export const GET = async () => {
  await connectBD();

  return new NextResponse(JSON.stringify(GetMuscles), { status: 200 });
};

export const POST = async (req: Request) => {
  const body: ExercisePost = await req.json();
  await connectBD();
  try {
    await new Exercise({
      ...body,
    }).save();
    return new NextResponse(JSON.stringify("success"), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify("some in formation required"), {
      status: 400,
    });
  }
};
