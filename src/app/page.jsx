import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join us to experience the best features tailored for you!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/sign-in"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
