import React from 'react';
import { motion } from 'framer-motion';
import { SafeImage } from '../../lib/SafeImage';

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Spinning outer ring */}
        <motion.div
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-t-4 border-b-4 border-blue-500/70 dark:border-indigo-500/80"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Static logo in the center */}
        <div className="absolute flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
          <SafeImage 
            src="/small-logo.svg"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}
