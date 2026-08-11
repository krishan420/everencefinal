"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import RichText from "@/components/RichText";
import FeatureSection from "./FeatureSection";

/* ---------------- HEADINGS ---------------- */
const headings = [
  {
    title: "Enterprise Cybersecurity & Digital Forensic Solutions",
    subtitle: " for Modern Incidents",
    link: "/services/digital-forensic-readiness-assessments",
  },
  {
    title: "A Global Cybersecurity Company for Incident",
    subtitle: " Response & Digital Forensics",
    link: "/about-us",
  },
  {
    title: "Cyber Incident Response,",
    subtitle: " Investigation & Enterprise Security Services",
    link: "/services/digital-forensic-incident-response",
  },
  {
    title: "Digital Forensic & Cybersecurity",
    subtitle: " Consulting for High-Risk Situations",
    link: "/services/digital-forensic-assessments",
  },
];

/* ---------------- CASE STUDIES ---------------- */
const caseStudies = [
  {
    title: "Securing Trust in a High-Value Diamond Ecosystem",
    description:
      "A leading diamond house faced hidden exposure across devices, transactions, and internal access. Everence helped uncover what was quietly putting designs, data, and deals at risk, before trust was compromised.",
    img: "/industriesimg/dimond.jpg",
    link: "/case-studies/securing-trust-in-a-high-value-diamond-ecosystem",
  },
  {
    title: "When CRM Data Leaks Threatened a Real Estate Brand",
    description:
      "Customer data was leaving the organisation through unnoticed internal gaps, putting deals and reputation at stake. Everence traced the source and restored control before damage spread.",
    img: "/industriesimg/realstate.jpg",
    link: "/case-studies/when-crm-data-leaks-threatened-a-real-estate-brand",
  },
  {
    title: "Protecting Intellectual Property Inside a Connected Factory",
    description:
      "A manufacturing firm faced increasing risks to its designs, devices, and operational data. Everence identified exposure points and contained them early.",
    img: "/industriesimg/manufacturing.jpg",
    link: "/case-studies/protecting-intellectual-property-inside-a-connected-factory",
  },
];

function Banner() {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [caseIndex, setCaseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ---------------- HEADING ROTATION ---------------- */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /* ---------------- CASE STUDY ROTATION ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white w-full">
      <section
        className="relative w-full min-h-[100vh] md:min-h-[90vh] pt-[110px] flex items-center overflow-hidden px-6 sm:px-10 md:px-16 py-20"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/homebg/bannn.png"
            alt="Banner Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-white/40 z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-black max-w-xl">
            
            {/* ROTATING HEADINGS */}
            <AnimatePresence mode="wait">
              <motion.div
                key={headingIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href={headings[headingIndex].link}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="block cursor-pointer"
                >
                  <h1 className="text-[34px] font-bold leading-tight mb-6">
                    <span className="block">
                      {headings[headingIndex].title}
                    </span>
                    <span className="block">
                      {headings[headingIndex].subtitle}
                    </span>
                  </h1>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* DESCRIPTION */}
            <p className="text-lg mb-4">
              Modern businesses run on data, systems, and decisions made at
              speed. What often goes unnoticed is how quietly risk builds
              alongside them.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              <RichText
                content={[
                  "At ",
                  {
                    text: "Everence Technologies",
                    link: "/",
                    color: "text-[#F56C14]",
                  },
                  ", we help leadership teams recognise exposure early, protect what truly matters, and step in with clarity when accountability or investigation is required.",
                ]}
              />
            </p>
          </div>

          {/* RIGHT CASE STUDY */}
          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={caseIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href={caseStudies[caseIndex].link}
                    className="group relative h-[380px] rounded-2xl overflow-hidden shadow-xl block"
                  >
                    <img
                      src={caseStudies[caseIndex].img}
                      alt={caseStudies[caseIndex].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent" />

                    <div className="absolute bottom-0 z-10 p-6 text-white w-full">
                      <span className="text-xs uppercase tracking-wide text-white/80">
                        Case Study
                      </span>

                      <h3 className="text-lg font-semibold mt-2">
                        {caseStudies[caseIndex].title}
                      </h3>

                      <p className="mt-2 text-sm text-white/90 line-clamp-2">
                        {caseStudies[caseIndex].description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="hidden sm:block">
        <FeatureSection />
      </section>
    </div>
  );
}

export default Banner;