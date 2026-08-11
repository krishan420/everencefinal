import { motion } from "framer-motion";

/* ---------------- CASE STUDY DATA ---------------- */
const caseStudies = [
  {
    id: 3,
    title:
      "Protecting Intellectual Property Inside a Connected Factory ",
    description:
      "A manufacturing firm faced increasing risks to its designs, devices, and operational data from both inside and outside the organisation. Everence stepped in to identify where the exposure began and how it could be contained. ",
    image: "/industriesimg/manufacturing.jpg",
    link: "/case-studies/protecting-intellectual-property-inside-a-connected-factory",
  },
  {
    id: 2,
    title:
      "When CRM Data Leaks Threatened a Real Estate Brand ",
    description:
      "Customer data was leaving the organisation through unnoticed internal gaps, putting deals and reputation at stake. This case reveals how Everence traced the source and helped restore control before the damage spread further. ",
    image: "/industriesimg/realstate.jpg",
    link: "/case-studies/when-crm-data-leaks-threatened-a-real-estate-brand",
  },
  {
    id: 1,
    title:
      "Securing Trust in a High-Value Diamond Ecosystem",
    description:
      "A leading diamond house faced hidden exposure across devices, transactions, and internal access. Everence helped uncover what was quietly putting designs, data, and deals at risk, before trust was compromised. ",
    image: "/industriesimg/dimond.jpg",
    link: "/case-studies/securing-trust-in-a-high-value-diamond-ecosystem",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.25,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- MAIN SECTION ---------------- */
const RealCaseStudies = () => {
  return (
    <motion.section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/homebg/servicebg.jpg)" }}
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Grey overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariant}
        >
          <motion.p
            variants={headingItem}
            className="text-primary font-semibold mb-2 text-[26px]"
          >
            Case Studies 
          </motion.p>

          <motion.h2
            variants={headingItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#757373]"
          >
           Cybersecurity in Practice 
          </motion.h2>

          <motion.p
            variants={headingItem}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
           Every organisation faces risk differently.
            What remains constant is the need for clarity, accuracy,
             and steady execution when situations escalate.
             Our work reflects the realities businesses deal with, across incidents,
              investigations, and complex security challenges where outcomes matter. 
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={sectionVariant}
        >
          {caseStudies.map((card) => (
            <motion.a
              key={card.id}
              href={card.link}
              variants={cardVariant}
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
                <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                  {card.title}
                </h3>
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RealCaseStudies;
