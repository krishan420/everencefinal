"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

import { SafeImage } from "../../lib/SafeImage";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    label: "Digital Forensic Assessments",
    slug: "/services/digital-forensic-assessments",
  },
  {
    label: "Due Diligence",
    slug: "/services/due-diligence",
  },
  {
    label: "Digital Compliance",
    slug: "/services/digital-compliance",
  },
  {
    label: "Forensic Malware Investigation",
    slug: "/services/forensic-malware-investigation",
  },
  {
    label: "Training",
    slug: "/services/training",
  },
  {
    label: "E-Discovery",
    slug: "/services/e-discovery",
  },
  {
    label: "Device Forensics",
    slug: "/services/device-forensics",
  },
  {
    label: "Social Media Monitoring",
    slug: "/services/social-media-monitoring",
  },
];

/* =========================================================
   FOOTER SERVICES
========================================================= */

function FooterServices() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h4 className="mb-5 text-lg font-semibold">Our Services</h4>

      <ul className="space-y-3 text-sm">
        {/* FIRST 5 - ALWAYS VISIBLE */}
        {services.slice(0, 5).map((service) => (
          <li key={service.slug}>
            <Link
              href={service.slug}
              className="transition hover:text-black hover:underline"
            >
              {service.label}
            </Link>
          </li>
        ))}

        {/* REMAINING SERVICES - SCROLL REVEAL */}
        {services.slice(5).map((service) => (
          <li
            key={service.slug}
            className={`
              transform transition-all duration-500
              ${
                reveal
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }
            `}
          >
            <Link
              href={service.slug}
              className="transition hover:text-black hover:underline"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   MAIN FOOTER
========================================================= */

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      {/* =====================================================
         BACKGROUND PATTERN
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/icons/ftring.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* =====================================================
         FOOTER CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* =================================================
             BRAND
          ================================================= */}

          <div>
            <SafeImage
              src="/homebg/logof.png"
              alt="Everence"
              className="mb-4 h-10 w-auto"
            />

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/90">
              We safeguard your business against evolving cyber threats with
              proactive defense.
            </p>

            {/* LINKEDIN */}
            <a
              href="https://in.linkedin.com/company/everence-technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Everence Technologies on LinkedIn"
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white
                hover:text-orange-600
              "
            >
              <FaLinkedinIn className="text-base" />
            </a>
          </div>

          {/* =================================================
             COMPANY
          ================================================= */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">Company</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-black hover:underline"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="transition hover:text-black hover:underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/industries"
                  className="transition hover:text-black hover:underline"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="transition hover:text-black hover:underline"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-black hover:underline"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className="transition hover:text-black hover:underline"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-black hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-black hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* =================================================
             SERVICES
          ================================================= */}

          <FooterServices />

          {/* =================================================
             CONTACT
          ================================================= */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact Us</h4>

            <div className="space-y-4 text-sm text-white/90">
              {/* ADDRESS */}
              <div className="flex gap-3">
                <FaMapMarkerAlt
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <address className="not-italic leading-relaxed">
                  508, The Summit Business Park,
                  <br />
                  Andheri (East), Mumbai – 400093
                </address>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt
                  className="shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="tel:+919920314006"
                  className="transition hover:text-black hover:underline"
                >
                  +91 9920314006
                </a>
              </div>

               {/* PHONE */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt
                  className="shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="tel:+918655412100"
                  className="transition hover:text-black hover:underline"
                >
                  +91 86554 12100
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <FaEnvelope
                  className="shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="mailto:info@everence.io"
                  className="transition hover:text-black hover:underline"
                >
                  info@everence.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
           DIVIDER
        =================================================== */}

        <div className="mt-14 border-t border-white/30" />

        {/* ===================================================
           FOOTER BOTTOM
        =================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            text-sm
            text-white/90
            md:flex-row
            md:justify-between
          "
        >
          {/* COPYRIGHT */}
          <div>© 2026 Everence.io</div>

          {/* DEVELOPMENT CREDIT */}
          <div>
            Design & Developed by{" "}
            <span className="font-medium text-white">
              BricksMedia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;