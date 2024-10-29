import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

await connectDb();

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "user not present" },
        { status: 400 }
      );
    }
    const isPasswordValid = user.password == password;
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "wrong password" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: true, message: "login succesfully.." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
