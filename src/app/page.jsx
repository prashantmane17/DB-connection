"use client";
import React, { useState } from 'react';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(false); // Track if user is registered

    const registerUser = async () => {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, mobileNum }),
        });
        const data = await response.json();
        setMessage(data.message);
        if (data.success) {
            setIsRegistered(true); // User registered successfully
        }
    };

    const verifyOtp = async () => {
        const response = await fetch('/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });
        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-4">User Registration</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 mb-4 rounded"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 mb-4 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 mb-4 rounded"
            />
            <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNum}
                onChange={(e) => setMobileNum(e.target.value)}
                className="border border-gray-300 p-2 mb-4 rounded"
            />
            <button 
                onClick={registerUser} 
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
            >
                Register
            </button>

            {isRegistered && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="border border-gray-300 p-2 mb-4 rounded"
                    />
                    <button 
                        onClick={verifyOtp} 
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Verify OTP
                    </button>
                </>
            )}

            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default UserRegistration;
