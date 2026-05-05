"use client";

import { motion } from "framer-motion";
import { Wrench, Database, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-neon-blue" />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "JavaScript / TypeScript", level: 85 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-neon-purple" />,
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "PHP / Laravel", level: 75 },
      { name: "Python", level: 70 },
      { name: "RESTful APIs", level: 85 },
    ]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-neon-blue" />,
    skills: [
      { name: "MySQL / PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 60 },
    ]
  },
  {
    title: "Tools & Systems",
    icon: <Wrench className="w-6 h-6 text-neon-purple" />,
    skills: [
      { name: "Linux / Bash", level: 90 },
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "System Optimization", level: 85 },
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neon-blue glow-text-blue font-mono">
          &gt; skills --list
        </h1>
        <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-box-blue" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              {category.icon}
              <h2 className="text-2xl font-bold ml-3 font-mono">{category.title}</h2>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    <span className="text-neon-blue font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                      className={`h-full rounded-full ${index % 2 === 0 ? 'bg-neon-blue' : 'bg-neon-purple'} shadow-[0_0_10px_rgba(0,243,255,0.5)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
