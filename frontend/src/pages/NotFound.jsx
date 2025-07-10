import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-blue-700">404</h1>
      <p className="text-gray-600 text-lg mt-2">Oops! Page not found.</p>
      <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  );
}
