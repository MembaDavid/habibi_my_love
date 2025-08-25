"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { Playfair_Display } from "next/font/google";

// Romantic serif font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {attributes.map(([text, hueA, hueB], i) => (
        <Card i={i} text={text} hueA={hueA} hueB={hueB} key={i} />
      ))}
    </div>
  );
}

interface CardProps {
  text: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ text, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.9, once: true }}
    >
      <div style={{ ...splash, background }} />

      {/* Card */}
      <motion.div
        style={card}
        variants={cardVariants}
        className="card relative overflow-hidden"
      >
        {/* Soft glowing background behind text */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 via-white/70 to-purple-200/60 blur-2xl" />

        <p
          className={`${playfair.className} relative z-10 text-center text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed drop-shadow-md`}
        >
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 70%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 700,
  width: "100%",
  paddingBottom: 200,
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minHeight: "100vh",
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  width: "85%",
  minHeight: 420,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 24,
  background: "rgba(255,200,205,0.85)",
  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
  transformOrigin: "10% 60%",
  padding: "40px",
};

/**
 * ==============   Data   ================
 */

const attributes: [string, number, number][] = [
  ["Your smile lights up my entire world 🌸", 340, 10],
  ["You are my safe place, my peace, my home 🕊️", 20, 40],
  ["Your laughter is the sweetest melody 🎶", 60, 90],
  ["Your kindness inspires me every day 💖", 100, 140],
  ["Your beauty shines brighter than the stars ✨", 205, 245],
  ["Your love is the greatest gift I’ve ever known 🎁", 260, 290],
  ["You make every moment magical 🌹", 290, 320],
];
