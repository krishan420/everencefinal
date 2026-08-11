"use client";
import RichText from "@/components/RichText";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceFAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data || !data.length) return null;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold mb-2 text-[26px]">
            FAQ
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#757373]">
            Everything You Need to Know
          </h2>

          <p className="mt-4 text-black max-w-2xl mx-auto">
            Clear answers to common questions about our cybersecurity services,
            processes, and expertise.
          </p>
        </motion.div>

        {/* FAQ GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {data.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  bg-white rounded-2xl
                  shadow-md hover:shadow-xl
                  border border-gray-100
                  transition-all
                  h-fit
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#757373] pr-6">
                    {faq.question}
                  </h3>

                  <span
                    className="
                      w-10 h-10 flex items-center justify-center
                      rounded-full
                      bg-orange-100 text-orange-500
                      transition-transform duration-300
                    "
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                       <p className="text-gray-600 leading-relaxed">
  <RichText content={faq.answer} />
</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="text-center mt-16"
>
  <a
    href="https://wa.me/919819848507?text=Hi%20I%20have%20a%20question%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      bg-orange-500 text-white
      px-10 py-4
      rounded-lg
      font-semibold
      hover:bg-orange-600
      transition
      shadow-lg
    "
  >
    Still Have Questions?
  </a>
</motion.div>

      </div>
    </section>
  );
}
