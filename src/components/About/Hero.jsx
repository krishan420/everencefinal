"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="overflow-hidden">

      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-[55vh]  overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/coursesBgImages/abtf2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/85" />

        {/* CENTERED CONTENT (WIDER) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              text-[#757373]
              text-3xl sm:text-5xl md:text-6xl
              font-semibold
              leading-tight
              max-w-5xl
            "
          >
            BUILT FOR DATA
            
            PRECIOUSNESS
          </motion.h1>
<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center gap-2 text-sm sm:text-base text-gray-500"
          >
            <Link
              href="/"
              className="hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700 font-medium">
              About Us
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
