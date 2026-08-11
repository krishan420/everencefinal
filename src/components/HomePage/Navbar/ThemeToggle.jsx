import { motion } from "framer-motion";
import { SafeImage } from "../../../lib/SafeImage";

const ThemeToggle = ({ darkMode, toggleDarkMode, isMobile = false }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`${isMobile ? 'mr-4' : 'ml-4 hidden lg:block'} p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors duration-200 mr-5`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <SafeImage 
            src="/icons/sun.svg" 
            alt="sun" 
            className={isMobile ? "w-5 h-5" : "w-7 h-7"} 
          />
        ) : (
          <SafeImage 
            src="/icons/moon.svg" 
            alt="moon" 
            className={isMobile ? "w-5 h-5" : "w-7 h-7"} 
          />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;