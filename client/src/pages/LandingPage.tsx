
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 p-4">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
        Welcome to Second Brain
      </h1>

      <p className="text-xl text-center text-gray-600 mb-8 max-w-xl">
        Save, organize, and revisit your favorite content across the internet. All in one place.
      </p>

      <div className="flex gap-4">
        <Link to="/signup">
          <button className="text-lg px-6 py-2">Get Started</button>
        </Link>
        <Link to="/signin">
          <button className="text-lg px-6 py-2">Login</button>
        </Link>
      </div>
    </main>
  );
}
