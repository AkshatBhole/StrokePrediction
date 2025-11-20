import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://host.docker.internal:5000/history")

      .then((res) => res.json())
      .then((data) => setHistory(data.reverse()))
      .catch((err) => console.error("Error fetching history", err));
  }, []);

  return (
    <motion.div
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Prediction Dashboard
      </h1>
      {history.length === 0 ? (
        <p className="text-gray-500">No prediction history available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-md shadow-sm bg-white hover:shadow-lg transition"
            >
              <p>
                <strong>Gender:</strong> {item.gender}
              </p>
              <p>
                <strong>Age:</strong> {item.age}
              </p>
              <p>
                <strong>Stroke Risk:</strong>{" "}
                {item.prediction === 1 ? (
                  <span className="text-red-600 font-bold">High</span>
                ) : (
                  <span className="text-green-600 font-bold">Low</span>
                )}
              </p>
              <p>
                <strong>Probability:</strong>{" "}
                {(item.probability * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
