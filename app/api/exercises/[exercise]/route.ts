import { NextResponse } from "next/server";

export const PUT = async (
  req: Request,
  { params: exercise }: { params: { exercise: string } }
) => {
  const res = await req.json();
  console.log(res);
  return new NextResponse(JSON.stringify("done"), { status: 200 });
};
