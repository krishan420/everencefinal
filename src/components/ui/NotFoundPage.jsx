"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiCompass, FiHome, FiNavigation, FiCloud, FiMap, FiSearch, FiZoomIn } from 'react-icons/fi';
import {SafeImage} from '../../lib/SafeImage'

// Searching Scope Component with Custom Image
function SearchingScope({ mouse, isSearching, scopeImage }) {
  const scopeRef = useRef();
  const [scanPosition, setScanPosition] = useState(0);

  useEffect(() => {
    if (!isSearching) return;

    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 2) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, [isSearching]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Scope Image */}
      <motion.div
        className="relative z-20"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <SafeImage
          src="/icons/search-scope.png"
          alt="Searching Scope"
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Scanning Beam Effect */}
      {isSearching && (
        <motion.div
          className="absolute z-30 pointer-events-none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-px h-40 bg-gradient-to-b from-blue-400/80 via-blue-300/60 to-transparent" />
        </motion.div>
      )}

      {/* Active Search Glow */}
      {isSearching && (
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/20 dark:bg-purple-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Pulsing Center Dot */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute z-40 w-4 h-4 bg-blue-500 dark:bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          top: '50%',
          left: '50%',
        }}
      />

      {/* Scanning Waves */}
      {isSearching && (
        <>
          <motion.div
            className="absolute border-4 border-blue-300/40 dark:border-purple-300/40 rounded-full"
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
          <motion.div
            className="absolute border-2 border-blue-400/30 dark:border-purple-400/30 rounded-full"
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1
            }}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
        </>
      )}

      {/* Lens Flare Effect */}
      <motion.div
        className="absolute z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Search Icon Overlay */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-blue-600/70 dark:text-purple-400/70"
      >
        <FiSearch className="text-3xl sm:text-4xl" />
      </motion.div>
    </div>
  );
}

const NotFoundPage = () => {
  const router = useRouter();
  const controls = useAnimation();
  const mouse = useRef({ x: 0, y: 0 });
  const [activeButton, setActiveButton] = useState(null);
  const [isSearching, setIsSearching] = useState(true);

  // Replace this path with your actual scope image path
  const scopeImage = "/images/search-scope.png"; // Update this path

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simulate search process with different intervals
    const searchTimer = setInterval(() => {
      setIsSearching(prev => !prev);
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(searchTimer);
    };
  }, []);

  const handleHoverStart = (button) => {
    setActiveButton(button);
    controls.start({
      scale: 1.05,
      transition: { duration: 0.2 }
    });
  };

  const handleHoverEnd = () => {
    setActiveButton(null);
    controls.start({
      scale: 1,
      transition: { duration: 0.2 }
    });
  };

  const buttonVariants = {
    hover: {
      y: -5,
      boxShadow: "0 15px 30px -5px rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: {
      y: 0,
      scale: 0.98
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.2,
      transition: { duration: 0.6 }
    },
    tap: {
      rotate: 0,
      scale: 1
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cloudVariants = {
    drift: {
      x: [0, 100, 0],
      y: [0, -30, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-28 p-6 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative">
      
      {/* Animated Cloud Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            variants={cloudVariants}
            animate="drift"
            className="absolute text-blue-200/60 dark:text-purple-200/40 pointer-events-none"
            style={{
              fontSize: `${Math.random() * 3 + 2}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          >
            <FiCloud />
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: `+=${Math.random() * 100 - 50}`,
              x: `+=${Math.random() * 80 - 40}`,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-blue-400/50 dark:bg-purple-400/50 rounded-full"
          />
        ))}
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="max-w-md w-full md:w-1/2 text-center md:text-left md:pr-10 z-10"
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-block"
        >
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl sm:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-[length:200%]"
          >
            404
          </motion.h1>
        </motion.div>

        <motion.h2
          whileHover={{ scale: 1.02 }}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center justify-center md:justify-start"
        >
          <FiZoomIn className="mr-3 text-blue-500 dark:text-purple-400" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Signal Lost in the Clouds
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
        >
          Our scanning systems are unable to locate the coordinates you've entered. 
          The signal appears to be lost among the digital clouds. Don't worry - we're 
          actively searching and can help you navigate back to familiar territory.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => handleHoverStart('back')}
            onHoverEnd={handleHoverEnd}
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <motion.span variants={iconVariants}>
              <FiArrowLeft className="text-lg" />
            </motion.span>
            <span>Retrace Signal</span>
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => handleHoverStart('home')}
            onHoverEnd={handleHoverEnd}
            onClick={() => router.push('/')}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <motion.span variants={iconVariants}>
              <FiHome className="text-lg" />
            </motion.span>
            <span>Reboot Navigation</span>
          </motion.button>
        </div>

        {/* Search Status Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-gray-600 flex items-start shadow-sm"
        >
          <div className="bg-blue-100 dark:bg-purple-900 p-2 rounded-lg mr-3">
            <motion.div
              animate={{ 
                scale: isSearching ? [1, 1.2, 1] : 1,
                opacity: isSearching ? [0.7, 1, 0.7] : 0.7
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiSearch className="text-blue-600 dark:text-purple-300 text-xl" />
            </motion.div>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 dark:text-blue-100">Scanning Status</h4>
            <p className="text-sm text-blue-600/90 dark:text-blue-200/90">
              {isSearching 
                ? "🔍 Scanning cloud networks... No signal detected"
                : "⚡ System idle. Ready for new search coordinates"}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Searching Scope Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
        className="mt-10 md:mt-0 md:w-1/2 h-64 sm:h-96 w-full relative flex items-center justify-center"
        style={{ minHeight: '500px' }}
      >
        <SearchingScope mouse={mouse} isSearching={isSearching} scopeImage={scopeImage} />

        {/* Ambient Glow Effects */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute -bottom-20 -left-20 bg-blue-400/20 dark:bg-purple-600/20 w-40 h-40 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute -top-20 -right-20 bg-purple-400/20 dark:bg-blue-600/20 w-48 h-48 rounded-full opacity-40 blur-3xl"
        />

        {/* Scanning Particles */}
        <AnimatePresence>
          {isSearching && [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                scale: 0, 
                opacity: 0,
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-blue-400 dark:bg-purple-400 rounded-full z-10"
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Subtle footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 dark:text-gray-500 z-10"
      >
        Cloud Scanning System v2.4.1 • © {new Date().getFullYear()} IT Accurate 
      </motion.div>
    </div>
  );
};

export default NotFoundPage;