import { motion } from "framer-motion";

/* ---------------- CASE STUDY DATA (JSON-LIKE) ---------------- */
const caseStudies = [
  {
    id: 3, // newest first
    title:
      "Recovering Deleted Communications in a High-Value Arbitration Case",
    description:
      "Our forensic team recovered deleted communications critical to resolving a complex, high-value arbitration dispute.",
    image: "/images/case-3.jpg",
    link: "/case-studies/arbitration",
  },
  {
    id: 2,
    title:
      "Tracing a Breach Across Four Jurisdictions for a Global Manufacturer",
    description:
      "We traced a sophisticated breach across multiple jurisdictions, preserving evidence and restoring operational trust.",
    image: "/images/case-2.jpg",
    link: "/case-studies/breach-tracing",
  },
  {
    id: 1,
    title:
      "Uncovering Insider Data Exfiltration in a Financial Services Firm",
    description:
      "We identified insider-driven data exfiltration using forensic analysis and endpoint intelligence.",
    image: "/images/case-1.jpg",
    link: "/case-studies/insider-threat",
  },
];

/* ---------------- LETTER ANIMATION ---------------- */
const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

/* ---------------- MAIN SECTION ---------------- */
const LatestNews = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/section-bg.jpg)" }}
    >
      {/* Grey overlay */}
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 text-[26px]">
            Latest News 
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
Cybersecurity, Risk, and Compliance  </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {caseStudies.map((card) => (
            <motion.a
              key={card.id}
              href={card.link}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
              />

              {/* Default gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />

              {/* DEFAULT STATE → TITLE AT BOTTOM */}
              <div className="absolute inset-0 z-10 flex items-end px-6 pb-8 text-white group-hover:opacity-0 transition-opacity duration-500">
                <motion.h3
                  variants={letterContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold leading-snug"
                >
                  {card.title.split("").map((char, i) => (
                    <motion.span key={i} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h3>
              </div>

              {/* HOVER STATE → CENTER CONTENT */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                <p className="text-sm sm:text-base mb-6 max-w-sm">
                  {card.description}
                </p>

                <span className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-transform duration-300 group-hover:scale-105">
                  View Details
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
