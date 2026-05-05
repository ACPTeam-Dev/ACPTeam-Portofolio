"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import dynamic from "next/dynamic";

const PhaserGame = dynamic(() => import("@/components/PhaserGameWrapper"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] sm:h-[70vh] rounded-xl border border-neon-blue/30 flex items-center justify-center bg-white/5">
      <span className="text-neon-blue font-mono animate-pulse">Loading Game Engine...</span>
    </div>
  )
});

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Gamepad2 className="w-8 h-8 md:w-12 md:h-12 text-neon-purple" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neon-purple glow-text-blue font-pixel">
            Arcade
          </h1>
        </div>
        <div className="h-1 w-20 bg-neon-blue mx-auto rounded-full glow-box-blue" />
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          Take a break. (More complex games coming soon)
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <PhaserGame />
      </motion.div>
    </div>
  );
}
