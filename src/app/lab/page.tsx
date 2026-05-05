"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { Terminal } from "@/components/Terminal";

export default function LabPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <TerminalIcon className="w-8 h-8 md:w-12 md:h-12 text-neon-blue" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neon-blue glow-text-blue font-mono">
            The Lab
          </h1>
        </div>
        <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-box-blue" />
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          Experimental playground. Try interacting with the terminal below.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full"
      >
        <Terminal />
      </motion.div>
    </div>
  );
}
