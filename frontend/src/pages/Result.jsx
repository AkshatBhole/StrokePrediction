// src/pages/Result.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("result");
    if (data) setResult(JSON.parse(data));
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">No prediction found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          🧠 Stroke Risk Result
        </h1>

        <p className="text-xl mb-4">
          <strong className="text-blue-700">Stroke Risk:</strong>{" "}
          {result.prediction === 1 ? (
            <span className="text-red-600 font-bold">High</span>
          ) : (
            <span className="text-green-600 font-bold">Low</span>
          )}
        </p>

        <p className="text-xl">
          <strong className="text-blue-700">Probability:</strong>{" "}
          {(result.probability * 100).toFixed(2)}%
        </p>
      </div>
    </motion.div>
  );
}
