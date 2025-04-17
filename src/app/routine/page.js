'use client';

import Image from 'next/image';

export default function RoutinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
        Recent Apps
      </h1>

      <div className="flex gap-10 flex-wrap justify-center items-center">
        {/* Add or change icons here */}
        <Image src="/chrome.svg" alt="Chrome" width={60} height={60} />
        <Image src="/vscode.svg" alt="VS Code" width={60} height={60} />
        <Image src="/powerpoint.svg" alt="PowerPoint" width={60} height={60} />
        <Image src="/gmail.svg" alt="Gmail" width={60} height={60} />
      </div>
    </div>
  );
}
