import React from "react";
import { motion } from "framer-motion";
import CompanyLogoGlobe from "./CompanyLogoGlobe";

const BannerSkeleton = () => {
  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-12 sm:py-16 md:py-20 md:min-h-[70vh] overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Stars Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white dark:bg-blue-300 opacity-80"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${
                Math.random() * 2
              }s alternate`,
              transform: `scale(${Math.random() + 0.5})`,
            }}
          />
        ))}
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent to-white dark:to-blue-300"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              animation: `shootingStar ${Math.random() * 10 + 10}s infinite ${
                Math.random() * 20
              }s`,
              transform: `rotate(${Math.random() * 50 - 25}deg)`,
            }}
          />
        ))}
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-40 dark:opacity-60 backdrop-blur-sm z-0" />

      {/* Main Banner Content */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-7xl mx-auto">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 lg:w-[52%] text-center md:text-left z-10 px-4 md:px-0 md:ml-8 lg:ml-14"
        >
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white mb-4">
              LEARN WITH{" "}
              <span className="text-blue-600 dark:text-blue-400">
                IT ACCURATE
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8">
              FOR BEST JOB OPPORTUNITY
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full max-w-md">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md text-sm sm:text-base"
              >
                <div className="w-6 h-6 bg-white rounded-full" />
                Explore Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-lg shadow-md text-sm sm:text-base"
              >
                <div className="w-6 h-6 bg-gray-500 rounded-full" />
                Contact Now
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Globe Section */}
        <div className="w-full md:w-1/2 lg:w-[48%] h-[300px] sm:h-[380px] md:h-[430px] lg:h-[480px] flex items-center justify-center z-10 mb-8 md:mb-0">
          <CompanyLogoGlobe />
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;