import { motion } from "framer-motion";

const AboutPurpose = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">

      {/* 🖼️ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/homebg/servicebg.jpg')" // 👈 replace with your image path
        }}
      />

      {/* 🤍 White Overlay (85%) */}
      <div className="absolute inset-0 bg-white/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-semibold tracking-wide mb-3 text-[26px]">
            Our Purpose
          </p>

          <p className="text-3xl sm:text-4xl font-bold text-[#757373] leading-tight mb-4">
            Security Built on Judgement and Care 
          </p>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="origin-left my-20 border-t border-gray-200"
        />

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-primary text-2xl font-medium mb-6">
              Our Mission
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              To help organisations protect what matters most through a layered system of cyber forensics, security,
              and compliance — built to detect, defend, and respond with speed, sensitivity, and certainty.
            </p>

            <div className="my-12 border-t border-gray-200" />

            <h3 className="text-primary text-2xl font-medium mb-6">
              Our Vision
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              To redefine what security means — from reactive and rigid to responsive,
              respectful, and quietly intelligent.
            </p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-primary text-2xl font-medium">
              Our Values
            </h3>

            <div className="border-t border-gray-200" />

            <p className="text-gray-800 text-lg font-medium max-w-xl">
              We believe security should be as thoughtful as it is powerful.
            </p>

            <div className="text-gray-700 max-w-xl">
              <p>
                <span className="font-semibold text-gray-800">
                  Presence over panic:
                </span>{" "}
                Protection that’s always on, never in the way.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-gray-800">
                  Precision over protocol:
                </span>{" "}
                Every solution is calibrated to the client, not just the threat.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-gray-800">
                  Reverence over routine:
                </span>{" "}
                What we protect is precious. We never treat it like just data.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;
