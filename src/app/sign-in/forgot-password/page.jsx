"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [message, setMessage] = useState("");
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showMainForm, setShowMainForm] = useState(true);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowOtpModal(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setShowOtpModal(false);
    setShowMainForm(false);
    setShowNewPasswordModal(true);
    setMessage("OTP verified! Please set your new password."); // Notify OTP success
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    alert("Password reset successful! Redirecting to login...");
  };

  return (
    <div className="w-full h-screen bg-slate-200 p-10 flex items-center justify-center">
      {showMainForm && (
        <form
          className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-blue-500"
          onSubmit={handleEmailSubmit}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Forgot Password
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Enter your email address to receive an OTP.
          </p>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Send OTP
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Remembered your password?
              <Link href="/sign-in" className="text-blue-500 hover:underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter the OTP"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
              >
                Verify OTP
              </button>
            </form>

            <button
              onClick={() => setShowOtpModal(false)}
              className="mt-4 text-blue-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Password Reset Section */}
      {showNewPasswordModal && (
        <div className="w-full max-w-md mt-6 p-6 bg-white shadow-lg rounded-lg border border-blue-500">
          <h2 className="text-xl font-semibold mb-4">Reset Your Password</h2>
          {message && <p className="text-green-600 mb-4">{message}</p>}
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter new password"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Remembered your password?
              <Link href="/sign-in" className="text-blue-500 hover:underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
