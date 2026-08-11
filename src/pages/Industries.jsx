"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ================== DATA ================== */

const industries = [
  {
    id: "hr-risk-teams",
    name: "HR & Risk Teams",
    image: "/industriesimg/hrrisk.jpg",
    description:
      "HR and risk teams sit closest to the people layer, where many digital issues quietly begin.\n\nEverence supports HR and risk functions through digital audits during hiring, exits, or complaints; employee training on cyber hygiene and early risk signals; internal investigations supported by mobile and device forensics; policy development for device use and data handling; and guidance during disciplinary or legal escalation.\n\nWe work alongside HR and risk leaders to build practical controls that surface issues early and provide forensic clarity when matters require deeper examination.",
  },
  {
    id: "compliance-teams",
    name: "Compliance Teams",
    image: "/industriesimg/compliance.jpg",
    description:
      "Compliance teams operate under constant pressure from regulators, investors, and internal stakeholders.\n\nEverence supports compliance functions through the design and documentation of AML, ABC, and ESG frameworks, incident response support including regulatory liaison, audit preparation backed by digital evidence and reporting, real-time monitoring for sensitive workflows, and training on forensic compliance practices.",
  },
  {
    id: "manufacturing-sector",
    name: "Manufacturing Sector",
    image: "/industriesimg/manufacturing.jpg",
    description:
      "Manufacturers rely on interconnected systems, proprietary designs, and tightly coordinated operations.\n\nEverence supports manufacturing organisations through forensic investigations of design leaks or internal sabotage; endpoint and device security across factory floors and headquarters; data recovery and malware cleanup; secure document sharing during vendor coordination; and compliance readiness for ESG and export regulations.",
  },
  {
    id: "business-owners",
    name: "Business Owners",
    image: "/industriesimg/business.jpg",
    description:
      "Founders and business owners often focus outward on growth while internal digital risks quietly build over time.\n\nEverence supports business owners through device forensics and notice-period audits; digital trail mapping during leadership transitions; investigative support for intellectual property theft; and reputation monitoring.",
  },
];

/* ================== COMPONENT ================== */

export default function Industries() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);

  const [isFixed, setIsFixed] = useState(false);

  const HEADER_HEIGHT = 80;
  const CAROUSEL_HEIGHT = 88;

  /* ================== SEO FIX: TRAILING SLASH ================== */

  useEffect(() => {
    if (window.location.pathname === "/industries") {
      window.history.replaceState(null, "", "/industries/");
    }
  }, []);

  /* ================== AUTO SCROLL ================== */

  const stopScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startScroll = () => {
    stopScroll();

    intervalRef.current = setInterval(() => {
      if (!carouselRef.current) return;

      carouselRef.current.scrollLeft += 1;

      if (
        carouselRef.current.scrollLeft >=
        carouselRef.current.scrollWidth / 2
      ) {
        carouselRef.current.scrollLeft = 0;
      }
    }, 25);
  };

  useEffect(() => {
    startScroll();
    return stopScroll;
  }, []);

  const scrollBy = (value) => {
    stopScroll();
    carouselRef.current.scrollLeft += value;
    setTimeout(startScroll, 1000);
  };

  /* ================== SCROLL ================== */

  const scrollToIndustry = (id) => {
    stopScroll();

    const element = document.getElementById(id);
    if (!element) return;

    const offset = HEADER_HEIGHT + CAROUSEL_HEIGHT + 20;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setTimeout(startScroll, 1200);
  };

  /* ================== FIX AFTER HERO ================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">

      {/* ================== HERO ================== */}

      <section
        ref={heroRef}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/coursesBgImages/abtf2.mp4"
        />

        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="pt-10 text-4xl lg:text-5xl font-bold text-[#757373]">
            Security and Clarity Across Complex Industries
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Every industry operates under its own pressures, regulations,
            and expectations. Everence works with organisations across
            sectors where trust and evidence matter.
          </p>
        </div>
      </section>

      {/* ================== CAROUSEL ================== */}

      <div
        className={`bg-white border-b shadow-sm transition-all ${
          isFixed ? `fixed left-0 right-0 z-50` : "relative"
        }`}
        style={
          isFixed
            ? { top: `${HEADER_HEIGHT}px` }
            : undefined
        }
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">

          <button
            onClick={() => scrollBy(-260)}
            className="p-2 rounded-full border shadow-sm hover:bg-slate-100"
          >
            <FiChevronLeft className="text-2xl text-orange-500" />
          </button>

          <div
            ref={carouselRef}
            onMouseEnter={stopScroll}
            onMouseLeave={startScroll}
            className="overflow-x-hidden flex-1"
          >
            <div className="flex gap-4 w-max">

              {[...industries, ...industries].map((item, i) => (
                <button
                  key={`${item.id}-${i}`}
                  onClick={() => scrollToIndustry(item.id)}
                  className="min-w-[260px] px-6 py-3 rounded-lg border border-orange-300 text-[#EA580C] font-semibold text-sm bg-white hover:bg-orange-500 hover:text-white transition"
                >
                  {item.name}
                </button>
              ))}

            </div>
          </div>

          <button
            onClick={() => scrollBy(260)}
            className="p-2 rounded-full border shadow-sm hover:bg-slate-100"
          >
            <FiChevronRight className="text-2xl text-orange-500" />
          </button>

        </div>
      </div>

      {/* ================== SPACER ================== */}

      {isFixed && (
        <div style={{ height: HEADER_HEIGHT + CAROUSEL_HEIGHT }} />
      )}

      {/* ================== CONTENT ================== */}

      <section className="max-w-7xl mx-auto px-6 py-24 space-y-28">

        {industries.map((item, index) => (

          <motion.div
            id={item.id}
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >

            <img
              src={item.image}
              alt={item.name}
              className={`w-full rounded-xl shadow-lg ${
                index % 2 ? "md:order-2" : ""
              }`}
            />

            <div className={index % 2 ? "md:order-1" : ""}>
              <h2 className="text-3xl font-bold text-[#757373]">
                {item.name}
              </h2>

              <div className="mt-5 space-y-5 text-lg text-slate-600">

                {item.description
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

              </div>
            </div>

          </motion.div>

        ))}

      </section>

    </div>
  );
}