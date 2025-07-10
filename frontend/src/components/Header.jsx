import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center w-full">
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl font-extrabold text-blue-600">
            🧠 StrokeSense
          </Link>
        </div>
        <nav className="ml-auto space-x-6 font-medium text-gray-600">
          {["/", "/predict", "/result", "/about", "/dashboard"].map(
            (route, idx) => (
              <Link
                key={idx}
                to={route}
                className={`hover:text-blue-500 ${
                  pathname === route && "text-blue-600 font-semibold"
                }`}
              >
                {route === "/"
                  ? "Home"
                  : route.replace("/", "").charAt(0).toUpperCase() +
                    route.slice(2)}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
