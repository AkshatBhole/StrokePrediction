import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">🧠 StrokeSense</h2>
          <p className="text-sm mt-2 text-gray-400">
            Empowering early stroke detection using AI-driven insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/predict" className="hover:text-blue-400">
                Predict
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Connect with us</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:support@strokesense.ai"
                className="hover:text-blue-400"
              >
                support@strokesense.ai
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-3 text-lg">
            <a href="#" className="hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a
              href="mailto:support@strokesense.ai"
              className="hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and bottom info */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} StrokeSense. Built by Akshat | All rights
        reserved.
      </div>
    </footer>
  );
}
