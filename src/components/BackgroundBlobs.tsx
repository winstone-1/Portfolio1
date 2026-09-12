"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0B1F14]"
    >
      {/* Gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[520px] w-[680px] rounded-full bg-emerald-900/30 blur-[90px]"
        animate={{ x: [0, 18, 0], y: [0, 14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[18%] -right-24 h-[560px] w-[560px] rounded-full bg-emerald-800/20 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[28%] h-[640px] w-[760px] rounded-full bg-lime-900/10 blur-[110px]"
        animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[58%] left-[-6%] h-[420px] w-[520px] rounded-full bg-teal-900/20 blur-[80px]"
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      {/* Thin grid accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,243,208,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,243,208,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
