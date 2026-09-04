import React from "react";
import { motion } from "framer-motion";
import { SafeImage } from "../../../lib/SafeImage";

const FEATURES = [
  {
    icon: "/icons/fng.svg",
    alt: "Exclusive Cybersecurity And Cyber Forensic Tools",
    title: "Exclusive Cybersecurity And Cyber Forensic Tools",
  },
  {
    icon: "/icons/fffl.png",
    alt: "Fully Functional Forensic Lab",
    title: "Fully Functional Forensic Lab",
  },
  {
    icon: "/icons/invest.svg",
    alt: "Extensive Investigation Experience",
    title: "Extensive Investigation Experience",
  },
  {
    icon: "/icons/iso.svg",
    alt: "ISO-Certified",
    title: "ISO-Certified",
  },
  {
    icon: "/icons/glob.svg",
    alt: "Global Clientele",
    title: "Global Clientele",
  },
];

const CARD_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

function FeatureSection() {
  return (
    <section
      aria-label="Our key features"
      className="relative z-20 w-full mt-8 md:-mt-16 lg:-mt-30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              custom={index}
              variants={CARD_VARIANTS}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -8,
                scale: 1.025,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              className="
                group
                flex
                h-full
                cursor-pointer
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-gray-100
                bg-white
                px-4
                py-5
                text-center
                shadow-[0_4px_14px_rgba(255,103,0,0.10)]
                transition-all
                duration-300
                hover:border-orange-100
                hover:shadow-[0_14px_32px_rgba(255,103,0,0.22)]
                sm:px-5
                sm:py-6
                lg:min-h-[190px]
              "
            >
              {/* Icon */}
              <motion.div
                className="
                  mb-3
                  flex
                  items-center
                  justify-center
                  sm:mb-4
                "
                whileHover={{
                  scale: 1.1,
                  filter:
                    "drop-shadow(0 6px 12px rgba(255,103,0,0.30))",
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <SafeImage
                  src={feature.icon}
                  alt={feature.alt}
                  loading="lazy"
                  className="
                    h-16
                    w-16
                    object-contain
                    sm:h-[72px]
                    sm:w-[72px]
                  "
                />
              </motion.div>

              {/* Title */}
              <h3
                className="
                  font-heading
                  text-sm
                  font-medium
                  leading-snug
                  text-gray-900
                  sm:text-base
                "
              >
                {feature.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;