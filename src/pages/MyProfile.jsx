import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">You need to log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md p-6 mx-auto mt-8 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center">
        <img
          className="w-24 h-24 border-2 border-blue-500 rounded-full"
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{user.displayName || "Anonymous User"}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Details:</h3>
        <ul className="text-gray-700">
          <li>
            <span className="font-semibold">UID:</span> {user.uid}
          </li>
          <li>
            <span className="font-semibold">Email Verified:</span> {user.emailVerified ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
