"use client";
import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the users from the API when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Adjust the API route if necessary
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">User List</h1>
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user, index) => (
              <li key={index} className="border-b pb-4">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.mobileNum}</p>
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
