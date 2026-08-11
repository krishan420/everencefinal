import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaBrain,
  FaShieldAlt,
  FaCode,
  FaFileSignature,
  FaCloud,
  FaBalanceScale,
  FaClipboardCheck,
  FaFileAlt,
  FaExclamationTriangle,
  FaSearch,
  FaChartLine,
  FaEye,
} from "react-icons/fa";
import RichText from "@/components/RichText";
import Link from "next/link";
/* ICON MAP */
const iconMap = {
  asset: FaSatelliteDish,
  context: FaBrain,
  appsec: FaShieldAlt,
  code: FaCode,
  hash: FaFileSignature,
  cloud: FaCloud,
  compliance: FaBalanceScale,
  audit: FaClipboardCheck,
  policy: FaFileAlt,
  risk: FaExclamationTriangle,
  investigation: FaSearch,
  reporting: FaChartLine,
  monitoring: FaEye,
};

/* ANIMATION VARIANTS */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceFeatures({ data }) {
  if (!data) return null;

  const bg = data.background;

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      
      {/* BACKGROUND */}
      {bg?.type === "video" && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bg.src}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {bg?.type === "image" && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg.src})` }}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#757373] mb-4">
            {data.title}
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            {data.subtitle}
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.items?.map((item, index) => {
            const Icon = iconMap[item.icon] || FaShieldAlt;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.04 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                hover:shadow-[0_0px_10px_rgba(251,146,60,0.25)]
                transition-all duration-300"
              >
                {/* ICON */}
                <div className="mb-5 w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
               {/* TITLE */}
{item.link ? (
  <Link
    href={item.link}
    className="text-lg font-semibold text-gray-900 mb-3 block hover:text-orange-500 transition-colors duration-300"
  >
    <RichText content={item.title} />
  </Link>
) : (
  <h4 className="text-lg font-semibold text-gray-900 mb-3">
    <RichText content={item.title} />
  </h4>
)}

                {/* ✅ DESCRIPTION WITH INTERNAL LINKS */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  <RichText content={item.description} />
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}