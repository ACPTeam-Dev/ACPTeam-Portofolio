"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Shield } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neon-blue glow-text-blue font-mono">
          &gt; whoami
        </h1>
        <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-box-blue" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Profile Card */}
        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue" />
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Terminal className="mr-2 text-neon-blue" /> User Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/80 font-mono text-sm md:text-base">
            <p><span className="text-neon-purple font-bold">Name:</span> Abizar Al Chifari Putra</p>
            <p><span className="text-neon-purple font-bold">Role:</span> Student, Fullstack Developer</p>
            <p><span className="text-neon-purple font-bold">Education:</span> SMK Negeri 1 Purbalingga</p>
            <p><span className="text-neon-purple font-bold">Position:</span> Chairman of ACPTeam Development</p>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div variants={itemVariants} className="prose prose-invert max-w-none text-foreground/80 font-sans">
          <h3 className="text-xl font-bold text-foreground flex items-center mb-4">
            <Code className="mr-2 text-neon-blue" /> The Origin Story
          </h3>
          <p className="mb-4">
            Hello! I&apos;m Abizar, a passionate developer with a deep interest in building scalable, 
            performant, and beautiful web applications. My journey in tech started with a curiosity 
            about how things work under the hood, which led me to dive deep into Linux systems and coding.
          </p>
          <p>
            As a student at SMK Negeri 1 Purbalingga, I balance my formal education with my role as the 
            Chairman of ACPTeam Development. Leading this team has taught me invaluable lessons in 
            collaboration, project management, and writing maintainable code that scales.
          </p>
        </motion.div>

        {/* Passions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-neon-blue/50 transition-colors">
            <Cpu className="w-8 h-8 text-neon-blue mb-4" />
            <h4 className="text-lg font-bold mb-2">System Optimization</h4>
            <p className="text-sm text-foreground/70">
              I love tweaking and tuning systems for maximum performance. Whether it&apos;s a Linux server 
              or a React application, finding bottlenecks and solving them is my jam.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-neon-purple/50 transition-colors">
            <Shield className="w-8 h-8 text-neon-purple mb-4" />
            <h4 className="text-lg font-bold mb-2">Linux & Infrastructure</h4>
            <p className="text-sm text-foreground/70">
              Living in the terminal is second nature to me. I enjoy building custom bash scripts, 
              managing server environments, and learning the intricacies of open-source software.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
