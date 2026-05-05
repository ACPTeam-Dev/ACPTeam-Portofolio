"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, Star, GitFork, Loader2 } from "lucide-react";

const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.08a5.06 5.06 0 0 0-1.35-3.5 4.64 4.64 0 0 0-.13-3.4s-1.1-.35-3.5 1.2a12.84 12.84 0 0 0-6.5 0C8.3 2.15 7.2 2.5 7.2 2.5a4.64 4.64 0 0 0-.13 3.4 5.06 5.06 0 0 0-1.35 3.5c0 5.55 3.26 6.74 6.36 7.08a4.8 4.8 0 0 0-1 3.02v4" />
  </svg>
);
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/ACPTeam-Dev/repos?sort=updated&per_page=6");
        if (!res.ok) throw new Error("Failed to fetch repositories");
        const data = await res.json();
        setRepos(data.filter((repo: Repo) => !repo.fork));
      } catch (err) {
        console.error(err);
        setError("Failed to load projects from GitHub.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neon-blue glow-text-blue font-mono">
          &gt; ls ./projects
        </h1>
        <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-box-blue" />
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          A showcase of my recent work fetched directly from GitHub.
        </p>
      </motion.div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-neon-blue animate-spin mb-4" />
          <p className="text-neon-blue font-mono animate-pulse">Loading repositories...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20 border border-red-500/30 bg-red-500/10 rounded-xl">
          <p className="text-red-400 font-mono">{error}</p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 hover:border-neon-blue/50 rounded-xl p-6 flex flex-col h-full transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-mono truncate mr-2" title={repo.name}>
                  {repo.name}
                </h3>
                <div className="flex space-x-2">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-neon-blue transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-foreground/70 text-sm mb-6 flex-grow line-clamp-3">
                {repo.description || "No description provided."}
              </p>

              <div className="mt-auto">
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-xs px-2 py-1 bg-neon-blue/10 text-neon-blue rounded-md border border-neon-blue/20">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs text-foreground/50 font-mono pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-neon-purple mr-1.5" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      <div className="text-center mt-12">
        <Link 
          href="https://github.com/ACPTeam-Dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-blue text-foreground hover:text-neon-blue font-mono text-sm rounded-lg transition-all"
        >
          <Github className="w-4 h-4 mr-2" />
          View All on GitHub
        </Link>
      </div>
    </div>
  );
}
