"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { selectServicesGrid } from "@/data/servicesSelector";
import RichText from "@/components/RichText";

/* ---------------- DATA ---------------- */
const services = selectServicesGrid();

/* ---------------- COMPONENT ---------------- */
const OurServices = () => {
  return (
    <>
      {/* SECTION */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/services-bg.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-100/90" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">
              Our Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#757373]">
              Protecting What Matters Most
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From digital forensics to enterprise-grade cybersecurity and compliance,
              we deliver intelligent protection built for today’s risks.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
            {services.map((service) => (
              <motion.div
                key={service.slug}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative w-full max-w-[380px] h-[420px] rounded-2xl overflow-hidden shadow-xl"
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt="service"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
                />

                {/* DEFAULT GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* HOVER BACKGROUND */}
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />

                {/* DEFAULT TITLE */}
                <div className="absolute inset-0 z-10 flex items-end px-6 pb-8 text-white group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    <RichText content={service.title} />
                  </h3>
                </div>

                {/* HOVER CONTENT */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  
                  {/* DESCRIPTION */}
                  <p className="text-sm sm:text-base mb-6 max-w-sm line-clamp-4">
                    <RichText content={service.description} />
                  </p>

                  {/* CTA */}
                  <Link
                    href={service.link}
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-transform duration-300 group-hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurServices;