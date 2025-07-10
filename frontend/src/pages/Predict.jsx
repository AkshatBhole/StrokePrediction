import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Predict() {
  const [form, setForm] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heart_disease: "",
    ever_married: "",
    work_type: "",
    Residence_type: "",
    avg_glucose_level: "",
    bmi: "",
    smoking_status: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("result", JSON.stringify(data));
        navigate("/result");
      } else {
        setError(data.error || "Prediction failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Predict Stroke Risk
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white p-6 rounded-lg shadow-md"
      >
        {Object.keys(form).map((key, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="capitalize font-semibold text-sm text-gray-600 mb-1">
              {key.replace(/_/g, " ")}
            </label>
            {["age", "avg_glucose_level", "bmi"].includes(key) ? (
              <input
                type="number"
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                required
              />
            ) : (
              <select
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                required
              >
                <option value="">Select</option>
                {key === "gender" &&
                  ["Male", "Female", "Other"].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                {key === "hypertension" &&
                  ["0", "1"].map((opt) => <option key={opt}>{opt}</option>)}
                {key === "heart_disease" &&
                  ["0", "1"].map((opt) => <option key={opt}>{opt}</option>)}
                {key === "ever_married" &&
                  ["Yes", "No"].map((opt) => <option key={opt}>{opt}</option>)}
                {key === "work_type" &&
                  [
                    "Private",
                    "Self-employed",
                    "Govt_job",
                    "children",
                    "Never_worked",
                  ].map((opt) => <option key={opt}>{opt}</option>)}
                {key === "Residence_type" &&
                  ["Urban", "Rural"].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                {key === "smoking_status" &&
                  ["formerly smoked", "never smoked", "smokes", "Unknown"].map(
                    (opt) => <option key={opt}>{opt}</option>
                  )}
              </select>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Predict
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </motion.div>
  );
}
