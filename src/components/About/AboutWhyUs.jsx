"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaShieldAlt,
  FaUserTie,
  FaChartBar,
  FaGlobe,
} from "react-icons/fa";

/* ================= ICON MAPPING ================= */
const ICON_MAP = {
  "Judgement Before Action": FaShieldAlt,
  "Experience in High-Stakes Situations": FaUserTie,
  "Communication That Holds Up": FaChartBar,
  "Consistent Presence": FaGlobe,
};

/* ================= CONTENT ================= */
const WHY_US_ITEMS = [
  {
    title: "Judgement Before Action",
    description:
      "We assess risk carefully before acting, ensuring responses are informed, proportionate, and effective.",
  },
  {
    title: "Experience in High-Stakes Situations",
    description:
      "Our work is shaped by real incidents where clarity and discretion matter more than speed alone.",
  },
  {
    title: "Communication That Holds Up",
    description:
      "We provide clear, defensible reporting that supports leadership, legal review, and regulatory scrutiny.",
  },
  {
    title: "Consistent Presence",
    description:
      "We stay engaged across regions and time zones, remaining available for as long as the situation requires.",
  },
];

const AboutWhyUs = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["18%", "-14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.6, 1], [1.18, 1.08, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          className="relative will-change-transform px-[20px]"
        >
          <div className="relative overflow-hidden rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.18)] h-[260px] sm:h-[360px] lg:h-[560px]">
            <img
              src="/homebg/abwhyus.jpg"
              alt="Security Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-semibold mb-2 text-lg md:text-[26px]">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#757373] leading-tight mb-8 md:mb-10">
            Why Global Enterprises <br /> Trust Us
          </h2>

          <div className="space-y-6 md:space-y-8">
            {WHY_US_ITEMS.map((item, index) => {
              const Icon = ICON_MAP[item.title];

              return (
                <div key={index} className="flex gap-4 md:gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary text-lg md:text-xl">
                    {Icon && <Icon />}
                  </div>

                  <div>
                    <h4 className="font-semibold text-base md:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhyUs;
