'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first.");

    // You can replace this with an actual API call
    console.log("Uploading file:", file);
    alert(`File "${file.name}" uploaded successfully.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black/40 p-8 rounded-xl backdrop-blur-md shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Upload a File</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-purple-600 file:text-white
                         hover:file:bg-purple-700 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
          >
            Upload
          </button>
        </form>
        {file && (
          <div className="mt-4 text-sm text-center text-gray-400">
            Selected file: <span className="text-purple-300">{file.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
