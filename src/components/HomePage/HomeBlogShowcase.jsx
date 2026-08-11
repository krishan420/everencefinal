import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";
import { Link } from "react-router-dom";

/* ---------------- SECTION ANIMATIONS ---------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.25,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- LETTER ANIMATION ---------------- */
const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

/* ---------------- COMPONENT ---------------- */
const HomeBlogShowcase = () => {
  // Latest 3 blogs
  const latestBlogs = [...blogs]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <motion.section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/section-bg.jpg)" }}
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Grey overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariant}
        >
          <motion.p
            variants={headingItem}
            className="text-primary font-semibold mb-2 text-[26px]"
          >
            Latest Insights
          </motion.p>

          <motion.h2
            variants={headingItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#757373]"
          >
            Perspectives on Cybersecurity, Risk, and Compliance 
          </motion.h2>

          <motion.p
            variants={headingItem}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Explore expert-written articles on cybersecurity, technology,
            analytics, and digital transformation.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={sectionVariant}
        >
          {latestBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariant}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
              />

              {/* Default gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-95 transition-opacity duration-500" />

              {/* DEFAULT STATE → TITLE AT BOTTOM */}
              <div className="absolute inset-0 z-10 flex items-end px-6 pb-8 text-white group-hover:opacity-0 transition-opacity duration-500">
                <motion.h3
                  variants={letterContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold leading-snug"
                >
                  {blog.title.split("").map((char, i) => (
                    <motion.span key={i} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h3>
              </div>

              {/* HOVER STATE → CENTER CONTENT */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                <p className="text-sm sm:text-base mb-6 max-w-sm">
                  {blog.excerpt}
                </p>

                {/* <Link
                  to={`/blog/${blog.slug}`}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-transform duration-300 group-hover:scale-105"
                >
                  Read Blog
                </Link> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};


export default HomeBlogShowcase;
