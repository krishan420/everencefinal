"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { SafeImage } from "../../lib/SafeImage";

/* ================= SERVICES DATA ================= */
const services = [
  { label: "Digital Forensic Assessments", slug: "/services/digital-forensic-assessments"},
  { label: "Due Diligence", slug: "/services/due-diligence"},
  { label: "Digital Compliance", slug: "/services/digital-compliance" },
  { label: "Forensic Malware Investigation", slug: "/services/forensic-malware-investigation" },
  { label: "Training", slug: "/services/training" },
  { label: "E-Discovery", slug: "/services/e-discovery" },
  { label: "Device Forensics", slug: "/services/device-forensics" },
  { label: "Social Media Monitoring", slug: "/services/social-media-monitoring" },
];

/* ================= FOOTER SERVICES ================= */
function FooterServices() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h4 className="font-semibold mb-5 text-lg">Our Services</h4>

      <ul className="space-y-3 text-sm">
        {/* FIRST 5 – ALWAYS VISIBLE */}
        {services.slice(0, 5).map((service, index) => (
          <li key={index}>
            <Link
              href={service.slug}
              className="hover:underline hover:text-black transition"
            >
              {service.label}
            </Link>
          </li>
        ))}

        {/* REMAINING – SCROLL REVEAL */}
        {services.slice(5).map((service, index) => (
          <li
            key={index}
            className={`transition-all duration-500 ${
              reveal
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <Link
              href={service.slug}
              className="hover:underline hover:text-black transition"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= MAIN FOOTER ================= */
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      {/* Background pattern */}
      <div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage: "url('/icons/ftring.png')",
  }}
/>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <SafeImage
              src="/homebg/logof.png"
              alt="Everence"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-relaxed text-white/90 mb-6">
              We safeguard your business against evolving cyber threats with
              proactive defense.
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-black transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-5 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/industries" className="hover:underline">Industries</Link></li>
              <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy </Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions </Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <FooterServices />

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-5 text-lg">Contact Us</h4>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <p>
                  508, The Summit Business Park,<br />
                  Andheri (East), Mumbai – 400093
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt />
                <a href="tel:+919920314006" className="hover:underline">
                  +91 9920314006
                </a>
              </div>

              <div className="flex gap-3">
                <FaEnvelope />
                <a href="mailto:info@everence.io" className="hover:underline">
                  info@everence.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-white/30" />

        {/* FOOTER BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/90 gap-4">
         
<div className="text-center md:text-right">
           
          </div>
          <div className="text-center">
            © 2026 Everence.io
          </div>

          <div className="text-center md:text-right">
            Design & Developed by BricksMedia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
