"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";

/* ============================
   Leaders Data
============================ */

const leaders = [
  {
    name: "KAILAS KANDALKAR",
    slug: "/kailas-kandalkar",
    role: "Founder – Director",
    description:
      "Kailas leads global technology strategy at the intersection of digital resilience and enterprise transformation, driving secure innovation and digital trust. As a Certified Fraud Examiner (CFE) and strategist, he helps organisations navigate risk, compliance, and high-stakes decision-making.",
    description2:
      "Having led over 2,000 fraud investigations, Kailas has advised multinationals, private equity firms, and government bodies on fraud, corruption, and reputation management. He heads a cross-functional team delivering expert solutions in cybersecurity, digital forensics, and risk intelligence.",
    image: "/homebg/kailas-kandalkar.jpg",
    linkedin: "https://linkedin.com/in/kailaskandalkar",
  },
  {
    name: "PRAMOD PRABHAKAR",
    slug: "/pramod-prabhakar",
    role: "Founder – Director",
    description:
      "Pramod brings a strategic edge to Everence, blending sharp market intelligence with deep investigative expertise. As a Certified Fraud Examiner (CFE), he has advised global clients including private and government firms on investment risk, litigation support and reputation management.",
    description2:
      "With a track record of solving high-stakes cases involving fraud, anti-bribery compliance, and complex disputes, Pramod is a trusted ally in navigating opaque markets and high-risk environments.",
    image: "/homebg/pramod-prabhakar.jpg",
    linkedin: "https://in.linkedin.com/in/pramodprabhakar1",
  },
];

/* ============================
   Animation Variants
============================ */

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ============================
   Component
============================ */

export default function MeetOurLeadersGrid() {
  return (
    <motion.section
      className="relative overflow-hidden py-8 md:py-10"
      style={{
        backgroundImage: "url('/homebg/servicebg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {/* White Overlay */}

      <div
        className="absolute inset-0 z-0 bg-white/90"
        aria-hidden="true"
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}

        <motion.div
          className="mb-10 text-center md:mb-20"
          variants={headerVariants}
        >
          <p className="mb-1 text-lg font-medium text-primary md:text-[26px]">
            Team
          </p>

          <h2 className="text-2xl font-semibold text-[#757373] md:text-4xl">
            Meet Our Leaders
          </h2>
        </motion.div>

        {/* Leader Cards */}

        <div className="space-y-8 md:space-y-10">
          {leaders.map((leader) => (
            <motion.article
              key={leader.slug}
              variants={cardVariants}
              className="relative w-full transform rounded-xl bg-gray-100 p-2 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:rounded-2xl md:p-6 md:shadow-xl"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
                {/* ========================
                    IMAGE
                ======================== */}

                <Link
                  href={leader.slug}
                  className="relative block min-h-[260px] overflow-hidden rounded-lg bg-white shadow md:min-h-[360px] md:rounded-xl"
                  aria-label={`View ${leader.name} profile`}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105 md:object-center"
                  />
                </Link>

                {/* ========================
                    CONTENT
                ======================== */}

                <div className="flex flex-col justify-center p-4 md:col-span-2 md:p-8">
                  {/* Name */}

                  <Link
                    href={leader.slug}
                    className="group w-fit"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                      {leader.name}
                    </h3>
                  </Link>

                  {/* Role */}

                  <p className="mb-4 mt-1 text-sm font-medium text-primary md:text-base">
                    {leader.role}
                  </p>

                  {/* LinkedIn */}

                  {leader.linkedin && (
                    <div className="mb-4">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${leader.name} on LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow transition-all duration-300 hover:bg-primary hover:text-white md:h-9 md:w-9"
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                    </div>
                  )}

                  {/* Description */}

                  {leader.description && (
                    <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                      {leader.description}
                    </p>
                  )}

                  {leader.description2 && (
                    <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                      {leader.description2}
                    </p>
                  )}

                  {/* Profile Link */}

                  <div className="mt-5">
                    <Link
                      href={leader.slug}
                      className="inline-flex items-center font-medium text-primary transition-opacity hover:opacity-70"
                    >
                      View Profile
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}