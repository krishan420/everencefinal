"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  Search,
  Activity,
  ShieldCheck,
  FileCheck,
  ClipboardList,
  AlertTriangle,
  Bug,
  GraduationCap,
  Files,
  Smartphone,
  ShieldAlert,
  Eye,
  Video,
} from "lucide-react";

const services = [
  { title: "Digital Forensic Assessments", slug: "digital-forensic-assessments", icon: Search },
  { title: "Proactive & Reactive Digital Fraud Investigations", slug: "proactive-reactive-digital-fraud-investigations", icon: Activity },
  { title: "Due Diligence", slug: "due-diligence", icon: ShieldCheck },
  { title: "Digital Compliance", slug: "digital-compliance", icon: FileCheck },
  { title: "Digital Forensic Readiness Assessments", slug: "digital-forensic-readiness-assessments", icon: ClipboardList },
  { title: "Digital Forensic Incident Response", slug: "digital-forensic-incident-response", icon: AlertTriangle },
  { title: "Forensic Malware Investigation", slug: "forensic-malware-investigation", icon: Bug },
  { title: "Training", slug: "training", icon: GraduationCap },
  { title: "E-Discovery", slug: "e-discovery", icon: Files },
  { title: "Device Forensics", slug: "device-forensics", icon: Smartphone },
  { title: "Reputation Management", slug: "reputation-management", icon: ShieldAlert },
  { title: "Social Media Monitoring", slug: "social-media-monitoring", icon: Eye },
  { title: "Audio & Video Forensic Analysis", slug: "audio-video-forensic-analysis", icon: Video },
  { title: "Cloud and IT Consulting", slug: "cloud-it-consulting", icon: Search },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();

  const isServiceRoute =
    pathname.startsWith("/services") || pathname === "/our-services";

  const navLinkClass = (path) =>
    `nav-link ${pathname === path ? "active text-orange-500" : ""}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="w-full max-w-7xl px-4 relative">

        {/* NAVBAR */}
        <div
          className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow-lg
          ${scrolled ? "bg-white" : "bg-white/90 backdrop-blur"}`}
        >
          <Link href="/">
            <img src="/homebg/logo.png" alt="Everence" className="h-9" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/home" className={navLinkClass("/home")}>HOME</Link>
            <Link href="/about-us" className={navLinkClass("/about-us")}>ABOUT US</Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
            >
              <Link
                href="/our-services"
                className={`nav-link ${
                  pathname === "/our-services" || isServiceRoute ? "active text-orange-500" : ""
                }`}
              >
                SERVICES
              </Link>

              {showMega && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="w-[1200px] bg-white rounded-2xl shadow-2xl border p-10">
                    <div className="grid grid-cols-4 gap-10">

                      <div>
                        <img
                          src="/courseImages/navmenu.jpg"
                          alt="Cybersecurity"
                          className="mb-4 w-full max-w-[220px]"
                        />
                        <h3 className="text-xl font-bold mb-4">
                          Award Winning Cybersecurity Solutions
                        </h3>
                        <p className="text-gray-600 text-sm mb-6">
                          Proactive digital forensics, investigations,
                          and compliance-driven cybersecurity solutions.
                        </p>
                        <Link
                          href="/about-us"
                          onClick={() => setShowMega(false)}
                          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
                        >
                          Learn More
                        </Link>
                      </div>

                      <div className="col-span-3 grid grid-cols-2 gap-x-16 gap-y-6">
                        {services.map((s) => {
                          const Icon = s.icon;
                          const active = pathname === `/services/${s.slug}`;

                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setShowMega(false)}
                              className={`flex items-center gap-4 ${
                                active ? "text-orange-500 font-semibold" : ""
                              }`}
                            >
                              <span
                                className={`w-10 h-10 rounded-lg flex items-center justify-center
                                  ${
                                    active
                                      ? "bg-orange-500 text-white"
                                      : "bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white"
                                  }`}
                              >
                                <Icon size={20} />
                              </span>
                              {s.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className={navLinkClass("/industries")}>INDUSTRIES WE SERVE</Link>
            <Link href="/blogs" className={navLinkClass("/blogs")}>BLOGS</Link>
            <Link href="/contact" className={navLinkClass("/contact")}>CONTACT US</Link>
          </nav>

          {/* EMERGENCY BUTTON */}
          <Link
            href="/emergency"
            className="hidden lg:inline-block bg-white text-[#db4618] px-6 py-2 rounded-full font-semibold shadow-lg
            hover:bg-[#db4618] hover:text-white transition"
          >
            Emergency
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-[60] px-6 py-6 overflow-y-auto">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <img src="/homebg/logo.png" className="h-8" />
            <button onClick={() => setMenuOpen(false)}>
              <FiX size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-lg font-medium">

            <Link href="/home" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link>

            {/* SERVICES DROPDOWN */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full"
              >
                SERVICES
                <FiChevronDown className={`${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-3 flex flex-col gap-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-gray-600"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/industries" onClick={() => setMenuOpen(false)}>
              INDUSTRIES WE SERVE
            </Link>

            <Link href="/blogs" onClick={() => setMenuOpen(false)}>
              BLOGS
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>

            <Link
              href="/emergency"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-[#db4618] text-white text-center py-3 rounded-lg"
            >
              Emergency
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
