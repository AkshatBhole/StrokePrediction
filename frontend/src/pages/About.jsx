import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        About StrokeSense
      </h1>
      <p className="text-gray-700 text-lg">
        StrokeSense is an AI-powered stroke prediction tool trained on real
        medical data. It helps users assess risk by inputting their health
        factors.
      </p>
      <ul className="list-disc pl-6 mt-4 text-gray-600">
        <li>Utilizes Machine Learning models for high accuracy</li>
        <li>Tracks and stores prediction history for reference</li>
        <li>Not a substitute for medical advice — consult professionals</li>
      </ul>
    </motion.div>
  );
}
