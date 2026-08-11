"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import RichText from "@/components/RichText";
import ReachUsPopup from "../ContactUs/ReachUsPopup";

/* ---------------- DATA ---------------- */
const features = [
    "Experienced cybersecurity professionals ", 
    "Threat detection and response",
  "Context-driven security strategies",
  "Continuous monitoring and operational support",
  "Protection across systems, data, and access",
];

/* ---------------- ANIMATIONS ---------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */
const AbtCompany = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <motion.section
        className="w-full bg-white py-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* HEADER */}
          <motion.div className="text-center mb-16" variants={itemVariant}>
            <p className="text-primary font-semibold tracking-wide mb-3 text-[26px]">
              Cybersecurity Experts
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#757373] leading-tight">
             Cybersecurity Solutions for Modern Threats 
            </h1>
          </motion.div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT IMAGES */}
            <motion.div className="relative flex justify-center" variants={itemVariant}>
              
              <motion.img
                src="/homebg/abt2.png"
                alt="Cyber city"
                className="rounded-xl w-full sm:w-[90%] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />

              <motion.img
                src="/homebg/abt1.png"
                alt="Cyber tablet"
                className="hidden sm:block absolute bottom-[20px] right-0 w-[65%] rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div variants={itemVariant}>

              {/* ✅ DESCRIPTION WITH LINK */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <RichText
                  content={[
                    "Everence is a ",
                    {
                      text: "Digital Forensic and Cyber Security company in India",
                      link: "/our-services",
                      color: "text-orange-500",
                    },
                    " tailored to today’s connected, fast-moving business environments. Our focus is on reducing vulnerability, safeguarding critical systems and data, and sustaining continuity without disrupting operations. We work with leadership teams to ensure cybersecurity decisions remain practical, proportionate, and aligned with long-term business objectives. "
                  ]}
                />
              </p>

              {/* FEATURES LIST */}
              <ul className="space-y-4 mb-8">
                {features.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-800"
                    variants={itemVariant}
                  >
                    <Check className="text-primary mt-1" size={20} />

                    <span className="text-base sm:text-lg">
                      <RichText content={item} />
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                onClick={() => setOpenPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
              >
                Get in Touch
              </motion.button>

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* POPUP */}
      {openPopup && (
        <ReachUsPopup
          open={openPopup}
          onClose={() => setOpenPopup(false)}
        />
      )}
    </>
  );
};

export default AbtCompany;