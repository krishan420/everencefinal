"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RichText from "@/components/RichText";
import ReachUsPopup from "@/components/ContactUs/ReachUsPopup";

export default function ServiceHero({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="relative overflow-hidden">
        {/* ================= BACKGROUND ================= */}
        {data.bgVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={data.bgVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : data.bgImage ? (
          <img
            src={data.bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}

        {/* ================= OVERLAY ================= */}
        <div className="absolute inset-0 bg-white/90" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {data.eyebrow && (
              <span className="block text-4xl md:text-5xl text-orange-500 font-semibold uppercase mb-4">
                {data.eyebrow}
              </span>
            )}

            <h1 className="font-bold lg:text-4xl text-[#757373] mb-6">
              {data.title}
            </h1>

            {data.subtitle && (
              <p className="text-xl font-medium text-orange-600 mb-6">
                {data.subtitle}
              </p>
            )}

            {/* ✅ DESCRIPTION FIXED */}
            {data.description && (
              <div className="text-gray-700 mb-4">
                <p>
                  <RichText content={data.description} />
                </p>
              </div>
            )}

            {/* ✅ DESCRIPTION F FIXED */}
            {data.descriptionF && (
              <div className="text-gray-700 mb-8">
                <p>
                  <RichText content={data.descriptionF} />
                </p>
              </div>
            )}

            {/* CTA */}
            {data.cta && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-white shadow-lg"
              >
                {data.cta}
              </button>
            )}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {Array.isArray(data.badges) && (
              <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-end">
                {data.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-md shadow"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            )}

            {data.image && (
              <img
                src={data.image}
                alt={data.title}
                className="w-full max-w-xl mx-auto lg:ml-auto rounded-xl shadow-2xl"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* POPUP */}
      <ReachUsPopup open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}