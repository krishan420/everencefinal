"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const TrustSection = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  /* ===== Set playback speed ===== */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // increase video speed
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT VIDEO CARD (aligned with heading) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-[54px]"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

            {/* VIDEO */}
            <video
              ref={videoRef}
              src="/homebg/Everence_FilmEdit.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* SAME OVERLAY (unchanged) */}
            <div className="absolute inset-0 bg-white/30" />

            {/* MUTE / UNMUTE ICON */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
              aria-label="Toggle sound"
            >
              {muted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black"
        >
          {/* Badge */}
          <span className="inline-block text-primary font-semibold tracking-wide mb-3 text-[26px]">
            10 Years Of Experience
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#757373] leading-tight mb-4">
            Innovating Trust, <br></br>Securing What Matters 
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-xl text-lg leading-relaxed">
           At Everence, data is more than information, it reflects decisions, trust, and continuity.
            Protecting it is not just a technical task, but a responsibility we take seriously.
          <br></br>
           We operate in environments where stakes are high and clarity matters. 
           Our role is to stay quietly ahead, examining what doesn’t align,
          investigating what’s uncertain, and building protection that holds over time.
          <br></br>
          This is how we help organisations safeguard not just systems,
           but reputation and long-term confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;
