"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.08a5.06 5.06 0 0 0-1.35-3.5 4.64 4.64 0 0 0-.13-3.4s-1.1-.35-3.5 1.2a12.84 12.84 0 0 0-6.5 0C8.3 2.15 7.2 2.5 7.2 2.5a4.64 4.64 0 0 0-.13 3.4 5.06 5.06 0 0 0-1.35 3.5c0 5.55 3.26 6.74 6.36 7.08a4.8 4.8 0 0 0-1 3.02v4" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-pixel tracking-wider flex items-center justify-center md:justify-start gap-1">
              <span className="text-neon-blue glow-text-blue">ACP</span>
              <span className="text-foreground">Team</span>
            </h3>
            <p className="text-sm text-foreground/60 mt-1">
              Abizar Al Chifari Putra &bull; Fullstack Developer
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              Chairman of ACPTeam Development
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="mailto:acpteam@proton.me"
              className="text-foreground/60 hover:text-neon-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+6283871082440"
              className="text-foreground/60 hover:text-neon-blue transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/ACPTeam-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-neon-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-center text-xs text-foreground/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ACPTeam Development. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Powered by Next.js, Tailwind & Phaser
          </p>
        </div>
      </div>
    </footer>
  );
}
