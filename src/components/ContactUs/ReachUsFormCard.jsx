import { useState } from "react";
import ReachUsFormCard from "../ContactUs/ReachUsFormCard";

export default function ServiceHero({ data }) {
  const [open, setOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* BACKGROUND IMAGE / VIDEO */}
        {data.bgVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={data.bgVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : data.bgImage ? (
          <img
            src={data.bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            {data.eyebrow && (
              <span className="block text-orange-500 font-semibold uppercase tracking-wide mb-4">
                {data.eyebrow}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#757373] leading-tight mb-6 whitespace-pre-line">
              {data.title}
            </h1>

            {data.subtitle && (
              <p className="text-xl font-medium text-orange-600 mb-6">
                {data.subtitle}
              </p>
            )}

            {data.description && (
              <div className="text-gray-700 mb-8 space-y-4">
                {Array.isArray(data.description)
                  ? data.description.map((t, i) => <p key={i}>{t}</p>)
                  : <p>{data.description}</p>}
              </div>
            )}

            {/* CTA BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold text-white"
            >
              {data.cta || "Reach Us"}
            </button>
          </div>

          {/* RIGHT (OPTIONAL IMAGE) */}
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-xl mx-auto lg:ml-auto rounded-xl shadow-2xl"
            />
          )}
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* MODAL CONTENT */}
          <div className="relative z-10 w-full max-w-4xl">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-gray-600 hover:text-orange-500"
            >
              ✕
            </button>

            <ReachUsFormCard />
          </div>
        </div>
      )}
    </>
  );
}
