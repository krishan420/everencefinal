"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // Always scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        isFirstLoad.current = false;
      }}
    >
      <motion.div
        key={pathname}
        initial={
          isFirstLoad.current
            ? false // ✅ no animation on first load
            : { opacity: 0, y: 16 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{
          duration: 0.45,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
