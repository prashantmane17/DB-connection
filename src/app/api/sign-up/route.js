import { User } from "@/models/user";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();
export async function POST(request) {
  const { name, phone, email, password } = await request.json(); // Fix typo in 'password'

  try {
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "Use a different Email address",
        },
        {
          status: 400, // Use 400 for "Bad Request" instead of 404
        }
      );
    }

    const newUser = new User({ name, phone, email, password });
    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "Registered Successfully",
      },
      {
        status: 201, // Use 201 for "Created"
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      {
        status: 500,
      }
    );
  }
}
