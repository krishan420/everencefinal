"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RichText from "@/components/RichText";
import ReachUsPopup from "@/components/ContactUs/ReachUsPopup";

export default function ServiceIntro({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="w-full bg-white py-20 px-6 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* TAGLINE */}
          {data.tagline && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-orange-500 font-semibold text-lg mb-8"
            >
              {data.tagline}
            </motion.p>
          )}

          {/* TITLE */}
          {data.title && (
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl font-bold text-[#757373] mb-4"
            >
              {data.title}
            </motion.h2>
          )}

          {/* ✅ DESCRIPTION WITH LINKS */}
          {data.description && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="text-gray-700 text-base md:text-lg space-y-6 mb-12"
            >
              {Array.isArray(data.description) ? (
                data.description.map((para, i) => (
                  <p key={i}>
                    <RichText content={para} />
                  </p>
                ))
              ) : (
                <p>
                  <RichText content={data.description} />
                </p>
              )}
            </motion.div>
          )}

          {/* CTA */}
          {data.cta && (
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow-md"
            >
              {data.cta}
            </motion.button>
          )}
        </motion.div>
      </section>

      {/* POPUP */}
      <ReachUsPopup open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}