import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function Profile() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        {profileData ? (
          <div>
            <p className="mb-2">Name: {profileData.name}</p>
            <p>Major: {profileData.major}</p>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Major"
              className="w-full p-2 mb-4 border rounded"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
            <button
              onClick={saveProfile}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Save Profile
            </button>
          </div>
        )}
      </div>
    );
  }

export default Profile;