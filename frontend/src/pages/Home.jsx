import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import aiAnimation from "../assets/ai-brain.json";

export default function Home() {
  const featuresRef = useRef(null);

  const handleScrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-800 leading-tight mb-6">
            Predict Stroke Risk with AI
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            StrokeSense uses machine learning to detect the likelihood of a
            stroke based on your health profile. Get instant insights, stay
            informed, and act early.
          </p>
          <button
            onClick={handleScrollToFeatures}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition hover:scale-105"
          >
            🚀 Get Started
          </button>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie
            animationData={aiAnimation}
            loop={true}
            className="w-[300px] md:w-[400px]"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        id="features-section"
        className="bg-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">
            Why Choose StrokeSense?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "AI-Powered Accuracy",
                desc: "Get accurate predictions using our trained machine learning models.",
              },
              {
                title: "Simple & Fast",
                desc: "Just fill out the form and receive instant results.",
              },
              {
                title: "Secure & Private",
                desc: "Your data stays safe – we use secure encryption & local prediction.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-100"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Stroke Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "15 million",
                label: "People suffer strokes annually",
              },
              {
                value: "5 million",
                label: "Deaths caused by strokes every year",
              },
              {
                value: "90%",
                label: "Strokes are preventable with awareness",
              },
            ].map((fact, i) => (
              <motion.div
                key={i}
                className="bg-blue-600 rounded-lg py-6 px-4 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-4xl font-bold mb-2">{fact.value}</p>
                <p className="text-lg">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
