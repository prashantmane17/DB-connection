import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
    try {
      const users = await User.find();
      return NextResponse.json(users);
    } catch (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
  }


export async function POST(request) {
    try {
        const { name, email, password, mobileNum } = await request.json();
        const newUser = new User({ name, email, password, mobileNum });
        await newUser.save();
        return NextResponse.json({ success: true, user: newUser });
        
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
