import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://host.docker.internal:5000/history")

      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        📊 Prediction History
      </h1>

      {records.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No past predictions available yet.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {records.map((record) => (
            <div
              key={record.id}
              className={`rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105 ${
                record.prediction === 1
                  ? "bg-red-100 border-l-4 border-red-500"
                  : "bg-green-100 border-l-4 border-green-500"
              }`}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Gender: {record.gender}
              </h2>
              <p className="text-sm text-gray-600">Age: {record.age}</p>
              <p className="text-sm text-gray-600">
                Stroke Risk:{" "}
                <span
                  className={`font-bold ${
                    record.prediction === 1 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {record.prediction === 1 ? "High" : "Low"}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Probability: {Math.round(record.probability * 100)}%
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Timestamp: {record.timestamp || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
