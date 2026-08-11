"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import introBg from "../assets/intro-bg.jpg";
/* ================= CONFIG =================  */

const SLIDES = [
  {
    title: "BUILT FOR DATA PRECIOUSNESS",
    desc: "Everence combines always-on infrastructure with deep domain expertise.",
  },
  {
    title: "DESIGNED FOR SCALE",
    desc: "Built to scale with your data, teams, and operational growth.",
  },
  {
    title: "ENGINEERED FOR TRUST",
    desc: "Forensic precision ensuring integrity, security, and reliability.",
  },
  {
    title: "READY FOR THE FUTURE",
    desc: "Advance confidently into tomorrow’s data-driven world.",
  },
];

const SLIDE_DURATION = 2000; // 2 seconds
const MAX_ZOOM = 1.25;

/* ================= COMPONENT ================= */

export default function IntroLanding() {
  const router = useRouter();
  const redirectLock = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Motion values */
  const zoom = useMotionValue(1);
  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);

  /* Background zoom */
  useEffect(() => {
    animate(zoom, MAX_ZOOM, {
      duration: (SLIDES.length * SLIDE_DURATION) / 1000,
      ease: "easeOut",
    });
  }, []);

  /* Subtle parallax */
  useEffect(() => {
    animate(driftX, [-8, 8], {
      duration: 24,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    animate(driftY, [-5, 5], {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
  }, []);

  /* Auto text */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === SLIDES.length - 1) {
          redirect();
          return prev;
        }
        return prev + 1;
      });
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  /* Scroll / touch redirect */
  useEffect(() => {
    const handleExit = () => redirect();
    window.addEventListener("wheel", handleExit, { passive: true });
    window.addEventListener("touchmove", handleExit, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleExit);
      window.removeEventListener("touchmove", handleExit);
    };
  }, []);

  const redirect = () => {
    if (redirectLock.current) return;
    redirectLock.current = true;
    sessionStorage.setItem("fromIntro", "true");
    router.push("/home");
  };

  return (
    <>
      {/* ================= BACKGROUND ================= */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${introBg.src})`,
          scale: zoom,
          x: driftX,
          y: driftY,
        }}
      />

      {/* ================= GRAIN ================= */}
      <div className="pointer-events-none fixed inset-0 z-[5] opacity-[0.08]">
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* ================= CENTER TEXT ================= */}
      <div
        className="fixed inset-0 z-10 flex items-center justify-center px-6"
        onClick={redirect}
      >
        <div className="w-full flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1
                className="
                  text-4xl md:text-6xl
                  font-light
                  tracking-[0.2em]
                  leading-tight
                  text-gray-800
                  mb-4
                "
              >
                {SLIDES[activeIndex].title}
              </h1>

              <p
                className="
                  max-w-2xl
                  text-gray-500
                  text-base md:text-lg
                  leading-relaxed
                "
              >
                {SLIDES[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= SCROLL SPACE ================= */}
      <div style={{ height: "400vh" }} />

      {/* ================= GRAIN CSS ================= */}
      <style>{`
        .grain-overlay {
          background-image:
            repeating-radial-gradient(
              circle at 0 0,
              rgba(0,0,0,0.12),
              rgba(0,0,0,0.12) 1px,
              transparent 1px,
              transparent 2px
            );
          animation: grainMove 1.2s steps(6) infinite;
        }

        @keyframes grainMove {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-4%, 3%); }
          50% { transform: translate(3%, -4%); }
          75% { transform: translate(-3%, -2%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
