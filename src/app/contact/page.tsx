"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo form. In production, this would send an email or submit to an API.");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neon-blue glow-text-blue font-mono">
          &gt; ping contact
        </h1>
        <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-box-blue" />
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          Looking to collaborate, or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm h-full">
            <h2 className="text-2xl font-bold mb-8 font-mono">Connect</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-neon-blue/10 rounded-lg text-neon-blue border border-neon-blue/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider font-mono">Email</p>
                  <a href="mailto:acpteam@proton.me" className="text-lg font-medium hover:text-neon-blue transition-colors break-all">
                    acpteam@proton.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-neon-purple/10 rounded-lg text-neon-purple border border-neon-purple/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider font-mono">Phone</p>
                  <a href="tel:+6283871082440" className="text-lg font-medium hover:text-neon-purple transition-colors">
                    +62 838 7108 2440
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg text-foreground border border-white/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider font-mono">Location</p>
                  <p className="text-lg font-medium">
                    Purbalingga, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-foreground/70 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-foreground/70 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-foreground/70 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                placeholder="Let's build something awesome..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-neon-blue text-black font-bold py-3 px-4 rounded-md flex items-center justify-center hover:bg-neon-blue/90 glow-box-blue transition-all hover:scale-[1.02]"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
