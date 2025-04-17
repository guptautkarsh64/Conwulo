'use client';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-black/40 p-6 sm:p-8 rounded-xl backdrop-blur-md shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Sign In to Conwulo
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-300">
          Don&apos;t have an account? <a href="#" className="text-purple-400 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
