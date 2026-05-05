"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.08a5.06 5.06 0 0 0-1.35-3.5 4.64 4.64 0 0 0-.13-3.4s-1.1-.35-3.5 1.2a12.84 12.84 0 0 0-6.5 0C8.3 2.15 7.2 2.5 7.2 2.5a4.64 4.64 0 0 0-.13 3.4 5.06 5.06 0 0 0-1.35 3.5c0 5.55 3.26 6.74 6.36 7.08a4.8 4.8 0 0 0-1 3.02v4" />
  </svg>
);
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Lab", href: "/lab" },
  { name: "Games", href: "/games" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-pixel tracking-wider flex items-center gap-1">
              <span className="text-neon-blue glow-text-blue">ACP</span>
              <span className="text-foreground">Team</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-neon-blue ${
                      isActive ? "text-neon-blue" : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue glow-box-blue"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/SEPKOR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-neon-blue transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/70 hover:text-neon-blue transition-colors p-2 rounded-full"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-neon-blue bg-white/5"
                    : "text-foreground/70 hover:text-neon-blue hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center justify-between px-3 py-2 mt-4 border-t border-white/10">
              <Link
                href="https://github.com/SEPKOR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-neon-blue transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-foreground/70 hover:text-neon-blue transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
