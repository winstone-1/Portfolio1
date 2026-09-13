"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundBlobs() {
  const shouldReduce = useReducedMotion();
  const blobAnim = shouldReduce ? undefined : { x: [0, 16, 0] as number[], y: [0, 10, 0] as number[] };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]"
    >
      {/* Gradient blobs — reduced blur + area for GPU cost, transform-only animation, respects reduced motion */}
      <motion.div
        className="absolute -top-32 -left-32 h-[440px] w-[560px] rounded-full bg-[var(--blob-1)] blur-[60px]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={blobAnim ? { x: [0, 16, 0], y: [0, 10, 0] } : undefined}
        transition={blobAnim ? { duration: 20, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <motion.div
        className="absolute top-[18%] -right-24 h-[460px] w-[460px] rounded-full bg-[var(--blob-2)] blur-[60px]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={blobAnim ? { x: [0, -14, 0], y: [0, 12, 0] } : undefined}
        transition={blobAnim ? { duration: 24, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[28%] h-[520px] w-[620px] rounded-full bg-[var(--blob-3)] blur-[50px]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={blobAnim ? { x: [0, 12, 0], y: [0, -8, 0] } : undefined}
        transition={blobAnim ? { duration: 28, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <motion.div
        className="absolute top-[56%] left-[-6%] h-[380px] w-[420px] rounded-full bg-[var(--blob-5)] blur-[45px]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={blobAnim ? { x: [0, 10, 0], y: [0, -10, 0] } : undefined}
        transition={blobAnim ? { duration: 22, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/20" />
      {/* Thin grid accent */}
      <div
        className="absolute inset-0 opacity-[0.03] motion-reduce:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,243,208,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,243,208,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
