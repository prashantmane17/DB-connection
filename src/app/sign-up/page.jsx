"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  let formvalue = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(formvalue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formResponse = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await formResponse.json();
      if (formResponse.ok) {
        console.log("success: " + data.message); // Fixed 'massage' to 'message'
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-200 p-10 flex items-center justify-center">
        <form
          className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-blue-500 space-y-4"
          onSubmit={handelsubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              value={formdata.name}
              onChange={handelChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-semibold"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="phone"
              value={formdata.phone}
              onChange={handelChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handelChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              onChange={handelChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?
              <Link href="/sign-in" className="text-blue-500 hover:underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
