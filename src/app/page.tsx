"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SurprisePage() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const message =
    "You are the most beautiful part of my world. Every heartbeat whispers your name, and this little page is just a reminder of how much I love you 💕";

  // Split message into words for stagger animation
  const words = message.split(" ");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-red-500 p-6">
      <div className="text-center">
        {/* Bouncing Title */}
        <motion.h1
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 200, -200, 0], // bounce horizontally
            y: [0, -100, 100, 0], // bounce vertically
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 1, // bounce twice only
            repeatType: "mirror",
            onComplete: () => setShowText(true),
          }}
          className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg select-none"
        >
          Surprise Habibi ❤️
        </motion.h1>

        {/* Romantic Words (Word by Word) */}
        {showText && (
          <motion.div
            className="mt-8 text-xl md:text-2xl text-pink-100 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  when: "beforeChildren",
                  onComplete: () => setShowButton(true),
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
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Click Me Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10"
          >
            <Link href="/description">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-3 rounded-2xl bg-white text-pink-600 font-bold shadow-lg text-lg"
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
