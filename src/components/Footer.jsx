import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PROFILE } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-md py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-lg">
                Niranjan S Nayak
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono text-neon-teal">
                AI Engineer
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald animate-pulse" />
              All systems operational • Built with React, Framer Motion & Tailwind CSS
            </p>
          </div>

          {/* Center: Socials */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:text-neon-cyan hover:bg-white/10 transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:text-neon-cyan hover:bg-white/10 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={PROFILE.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:text-neon-cyan hover:bg-white/10 transition-colors"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <SiLeetcode size={15} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:text-neon-cyan hover:bg-white/10 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <FaEnvelope size={15} />
            </a>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-500">
              © {new Date().getFullYear()} Niranjan S Nayak
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl glass-card border border-white/15 flex items-center justify-center text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <FaArrowUp size={13} />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
};
