"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-mint-bright via-green-living to-amber-gold origin-left z-50"
        style={{ scaleX }}
      />

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-forest-deep to-green-living text-white shadow-2xl shadow-mint-bright/30 flex items-center justify-center group hover:shadow-mint-bright/50 transition-shadow"
        aria-label="Retour en haut"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="26"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-mint-bright/30"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </svg>

        {/* Arrow Icon */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowUp className="w-6 h-6 relative z-10" />
        </motion.div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-forest-deep text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Retour en haut
        </span>
      </motion.button>
    </>
  );
}
