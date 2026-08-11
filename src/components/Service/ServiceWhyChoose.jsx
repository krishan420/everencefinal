"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import RichText from "@/components/RichText";
import ReachUsPopup from "@/components/ContactUs/ReachUsPopup";

/* Animations */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceWhyChoose({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="relative w-full py-24 px-6 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/why-bg.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* HEADER */}
              <div className="mb-12">
                {data.title && (
                  <h2 className="text-3xl md:text-4xl font-bold text-[#757373] mb-4">
                    {data.title}
                  </h2>
                )}

                {data.subtitle && (
                  <p className="text-gray-600 text-base md:text-lg">
                    {data.subtitle}
                  </p>
                )}
              </div>

              {/* POINTS */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8"
              >
                {data.points?.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className="text-orange-500 mt-1">
                      <FaCheckCircle size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>

                      {/* ✅ DESCRIPTION WITH INTERNAL LINKS */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <RichText content={item.description} />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              {data.cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-14"
                >
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition"
                  >
                    {data.cta}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      <ReachUsPopup open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}