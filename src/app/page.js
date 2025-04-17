'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a002d] to-black text-white">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-4 gap-4 md:gap-0">
        <div className="text-purple-500 text-lg font-bold">Conwulo</div>
        <ul className="flex flex-col md:flex-row gap-4 text-sm items-center">
          <li><Link href="/" className="font-semibold text-white">Home</Link></li>
          <li><Link href="/upload">Upload</Link></li>
          <li><Link href="/options">Options</Link></li>
          <li><Link href="/routine">Routine</Link></li>
        </ul>
        <Link
          href="/signin"
          className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200"
        >
          Sign In
        </Link>
      </nav>

      <div className="flex flex-col items-center justify-center text-center px-4 mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
            Continue Where
          </span>
          <br />
          <span className="text-white">You Left Off</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl">
          Conwulo is your seamless switch – from device to device, without losing your rhythm
        </p>
      </div>
    </div>
  );
}
