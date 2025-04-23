'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Signup successful!');
      window.location.href = '/signin';
    } else {
      alert(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f001a] via-[#1a0030] to-[#0f001a] px-4">
      <div className="bg-[#1a0030] p-8 rounded-2xl shadow-lg max-w-md w-full text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Create your Conwulo account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Repeat your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-4">
          Already have an account?{' '}
          <Link href="/signin" className="text-purple-300 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
