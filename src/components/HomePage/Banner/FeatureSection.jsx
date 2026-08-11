import React from "react";
import { motion } from "framer-motion";
import { SafeImage } from "../../../lib/SafeImage";

function FeatureSection() {
  const features = [
    {
      icon: (
        <SafeImage
          src="/icons/fng.svg"
          alt="Exclusive Cybersecurity And Cyber Forensic Tools"
          className="w-16 h-16 sm:w-18 sm:h-18"
        />
      ),
      title: "Exclusive Cybersecurity And Cyber Forensic Tools",
    },
    {
      icon: (
        <SafeImage
          src="/icons/fffl.png"
          alt="Fully Functional Forensic Lab"
          className="w-16 h-16 sm:w-18 sm:h-18"
        />
      ),
      title: "Fully Functional Forensic Lab",
    },
    {
      icon: (
        <SafeImage
          src="/icons/invest.svg"
          alt="Extensive Investigation Experience"
          className="w-16 h-16 sm:w-18 sm:h-18"
        />
      ),
      title: "Extensive Investigation Experience",
    },
    {
      icon: (
        <SafeImage
          src="/icons/iso.svg"
          alt="ISO-Certified"
          className="w-16 h-16 sm:w-18 sm:h-18"
        />
      ),
      title: "ISO-Certified",
    },
    {
      icon: (
        <SafeImage
          src="/icons/glob.svg"
          alt="Global Clientele"
          className="w-16 h-16 sm:w-18 sm:h-18"
        />
      ),
      title: "Global Clientele",
    },
  ];

  return (
    <div className="relative w-full mt-8 md:-mt-16 lg:-mt-30 z-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="
                cursor-pointer
                bg-white
                dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800
                rounded-lg sm:rounded-xl
                border border-gray-100 dark:border-gray-700
                shadow-[0_4px_12px_rgba(255,103,0,0.12)]
                hover:shadow-[0_12px_28px_rgba(255,103,0,0.25)]
                transition-shadow duration-300
              "
            >
              <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                {/* Icon (NO background) */}
                <motion.div
                  className="mb-3 sm:mb-4"
                  whileHover={{
                    scale: 1.1,
                    filter:
                      "drop-shadow(0 6px 12px rgba(255,103,0,0.35))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
