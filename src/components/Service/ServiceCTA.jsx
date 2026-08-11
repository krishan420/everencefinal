import { motion } from "framer-motion";

export default function ServiceCTA({ data }) {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      {data.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        />
      )}

      {/* ORANGE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 opacity-95" />

      {/* DARK DEPTH OVERLAY (bottom fade like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* TITLE */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {data.title}
          </h2>

          {/* DESCRIPTION */}
          {data.description && (
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
              {data.description}
            </p>
          )}

          {/* CTA BUTTON */}
          {data.button && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-white text-orange-600
                font-semibold
                px-8 py-4
                rounded-full
                shadow-xl
                hover:bg-orange-50
                transition
              "
            >
              {data.button}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
