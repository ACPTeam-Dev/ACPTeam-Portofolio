"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { TypewriterText } from "@/components/TypewriterText";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      <ParticleBackground />
      
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-mono"
        >
          <Terminal className="w-4 h-4" />
          <span>System Online</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 font-sans">
          Hi, I&apos;m <br className="md:hidden" />
          <TypewriterText 
            text="Abizar Al Chifari Putra" 
            className="text-neon-blue glow-text-blue"
            delay={0.5} 
          />
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-pixel tracking-wider"
        >
          Fullstack Developer & Chairman of{" "}
          <span className="text-neon-purple">ACPTeam Development</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link 
            href="/projects"
            className="group relative px-8 py-3 bg-neon-blue text-black font-bold rounded-md overflow-hidden flex items-center justify-center glow-box-blue transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link 
            href="/contact"
            className="group px-8 py-3 bg-transparent border border-neon-blue text-neon-blue font-bold rounded-md flex items-center justify-center hover:bg-neon-blue/10 transition-colors hover:glow-box-blue"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-30 font-mono text-xs">
        <p>sys.status: optimal</p>
        <p>cpu.temp: 42°C</p>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-30 font-mono text-xs text-right">
        <p>latency: 12ms</p>
        <p>packets.lost: 0</p>
      </div>
    </div>
  );
}
