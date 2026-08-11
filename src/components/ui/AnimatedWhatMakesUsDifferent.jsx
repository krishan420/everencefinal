import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SafeImage } from "../../lib/SafeImage";

export const AnimatedWhatMakesUsDifferent = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 font-sans antialiased sm:px-6 lg:px-8 lg:py-20 flex justify-center items-center">
      <div className="relative grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -60, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom group"
                whileHover={isActive(index) ? {
                  scale: 1.02,
                  transition: { duration: 0.2 }
                } : {}}
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg">
                  <SafeImage
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    draggable={false}
                    className={`h-full w-full object-cover object-center transition-all duration-300 ${isActive(index) ? 'group-hover:scale-105 group-hover:brightness-75' : ''
                      }`}
                  />

                  {/* Text Overlay - Centered */}
                  {isActive(index) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-gradient-to-t from-slate-800/80 to-transparent p-6 ${isActive(index) ? 'group-hover:backdrop-blur-sm' : ''
                        }`}
                    >
                      <motion.div
                        className={`w-full text-center p-4 ${isActive(index) ? 'group-hover:from-slate-900/90' : ''
                          }`}
                      >
                        <motion.h3
                          className="text-xl font-bold text-white transition-all duration-300 group-hover:text-2xl"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                        >
                          {testimonial.title}
                        </motion.h3>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              What Makes Us Different
            </h2>

            <ul className="mt-8 space-y-6">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mr-4 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <SafeImage src="/icons/blue-tick.svg" alt="blue-tick" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Training programs at IT Accurate act as a foundation for students who are willing to become distinguished & expert IT professionals.
                </p>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mr-4 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <SafeImage src="/icons/blue-tick.svg" alt="blue-tick" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our commitment & focus towards empowering students with cutting-edge industry practices & expertise has resulted in exceptional learning experiences.
                </p>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mr-4 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <SafeImage src="/icons/blue-tick.svg" alt="blue-tick" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  This approach has helped students seize the right career opportunities in competitive markets.
                </p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-blue-100 dark:bg-neutral-800 dark:hover:bg-blue-900/50"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover:rotate-12 group-hover:text-blue-600 dark:text-neutral-400 dark:group-hover:text-blue-400" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-blue-100 dark:bg-neutral-800 dark:hover:bg-blue-900/50"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-blue-600 dark:text-neutral-400 dark:group-hover:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};