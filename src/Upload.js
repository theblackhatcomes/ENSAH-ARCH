import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

function Upload() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
        <input
          type="file"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </div>
    );
  }

export default Upload;