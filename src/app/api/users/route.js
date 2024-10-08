import { connectDb } from "@/helper/db"; // Import your database connection helper
import { User } from "@/models/user"; // Import your User model
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


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
    const { name, email, password, mobileNum } = await request.json(); // Extract user data from the request body

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    try {
        // Check if a user with the given email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
        }

        // Create a new user
        const newUser = new User({ name, email, password, mobileNum, otp, otpExpiresAt });
        await newUser.save(); // Save the new user to the database

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // Change to your email provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Send the OTP email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
        };

        await transporter.sendMail(mailOptions); // Send the email

        return NextResponse.json({ success: true, message: "User registered and OTP sent" }); // Success response
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // Error response
    }
}