"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SurprisePage() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const message =
    "You are the most beautiful part of my world. Every heartbeat whispers your name, and this little page is just a reminder of how much I love you 💕";

  const words = message.split(" ");

  // Show button after text finishes
  useEffect(() => {
    if (showText) {
      const totalTime = words.length * 600; // 0.6s per word
      const timer = setTimeout(() => setShowButton(true), totalTime + 1000);
      return () => clearTimeout(timer);
    }
  }, [showText, words.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-red-500 p-6">
      <div className="text-center">
        {/* Title */}
        <motion.h1
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "mirror",
            onComplete: () => setShowText(true),
          }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg select-none"
        >
          Surprise Habibi ❤️
        </motion.h1>

        {/* Romantic Text */}
        {showText && (
          <motion.div
            className="mt-10 text-xl md:text-2xl text-pink-100 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.6,
                  when: "beforeChildren",
                },
              },
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-12"
          >
            <Link href="/description">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-2xl bg-white text-pink-600 font-bold shadow-lg text-xl"
              >
                Click Me 💖
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
