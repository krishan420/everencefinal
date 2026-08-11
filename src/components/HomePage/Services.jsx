"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import RichText from "@/components/RichText";
import { selectServicesCarousel } from "@/data/servicesSelector";

/* ---------- DATA ---------- */
const servicesCarousel = selectServicesCarousel();

/* ---------- RESPONSIVE ---------- */
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

const CARD_WIDTH = isMobile ? 260 : 340;
const GAP = isMobile ? 20 : 80;
const MOVE_X = CARD_WIDTH + GAP;

/* ---------- POSITION LOGIC ---------- */
const getStyle = (index, active, total) => {
  const offset = (index - active + total) % total;

  if (offset === 0)
    return { x: 0, scale: 1.15, zIndex: 10, opacity: 1 };

  if (offset === 1)
    return { x: MOVE_X, scale: 0.9, zIndex: 5, opacity: 0.6 };

  if (offset === total - 1)
    return { x: -MOVE_X, scale: 0.9, zIndex: 5, opacity: 0.6 };

  return { opacity: 0, scale: 0.8, zIndex: 0 };
};

export default function HomeServices3D() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = servicesCarousel.length;

  /* ---------- AUTO ROTATION ---------- */
  useEffect(() => {
    if (isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setActive((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, total]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-[26px] mb-3">
            What We Provide
          </p>

          <h2 className="text-4xl font-bold text-[#757373] mb-4">
            PROTECT YOUR PROGRESS
          </h2>

          {/* ✅ DESCRIPTION WITH LINK */}
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <RichText
              content={[
                "As organisations grow, their digital footprint expands, bringing new dependencies, responsibilities, and exposure. Everence provides ",
                {
                  text: "cybersecurity services in India",
                  link: "/services/cybersecurity-company-in-india",
                  color: "text-[#F56C14]",
                },
                " that help businesses move forward with confidence and control."
              ]}
            />
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex justify-center items-center h-[460px] overflow-hidden">

          {servicesCarousel.map((service, index) => (
            <motion.div
              key={service.slug}
              animate={getStyle(index, active, total)}
              onAnimationComplete={() => setIsAnimating(false)}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.6,
              }}
              className="absolute bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{ width: CARD_WIDTH }}
            >
              <img
                src={service.image}
                alt="service"
                className="h-52 w-full object-cover"
              />

              <div className="p-8 text-center">

                {/* ✅ TITLE FIXED */}
                <h3 className="text-primary font-bold mb-2">
                  <RichText content={service.title} />
                </h3>

                {/* ✅ DESCRIPTION FIXED */}
                <p className="text-gray-700 mb-6 line-clamp-3">
                  <RichText content={service.subtitle} />
                </p>

                <Link
                  href={service.link}
                  className="text-primary font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CONTROLS */}
          <button
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setActive((prev) => (prev - 1 + total) % total);
            }}
            className="absolute left-6 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl"
          >
            ‹
          </button>

          <button
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setActive((prev) => (prev + 1) % total);
            }}
            className="absolute right-6 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}