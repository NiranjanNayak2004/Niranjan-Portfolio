import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaFilePdf,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PROFILE } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = NAV_ITEMS.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark-bg/85 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            aria-label="Back to top"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/15 flex items-center justify-center group-hover:border-neon-cyan/60 transition-colors">
              <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-lg">
                N
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-wide text-base group-hover:text-neon-cyan transition-colors">
                Niranjan S Nayak
              </span>
              <span className="font-mono text-[11px] tracking-wider text-neon-teal">
                AI ENGINEER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-neon-cyan/25 to-neon-purple/25 border border-neon-cyan/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social icons */}
            <div className="flex items-center gap-1.5 mr-1 text-slate-400">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-neon-cyan hover:bg-white/5 transition-colors"
                title="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-neon-cyan hover:bg-white/5 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={PROFILE.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-neon-cyan hover:bg-white/5 transition-colors"
                title="LeetCode"
              >
                <SiLeetcode size={15} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE.links.resume}
              download="Niranjan_S_Nayak_Resume.pdf"
              className="px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wide bg-gradient-to-r from-neon-cyan to-neon-teal text-slate-950 hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-1.5"
            >
              <FaFilePdf size={13} />
              RESUME
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-panel border-b border-white/10 mt-2 px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-neon-cyan bg-white/5 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-4 text-slate-300">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:text-neon-cyan"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:text-neon-cyan"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={PROFILE.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:text-neon-cyan"
                  >
                    <SiLeetcode size={18} />
                  </a>
                </div>

                <a
                  href={PROFILE.links.resume}
                  download="Niranjan_S_Nayak_Resume.pdf"
                  className="px-4 py-2 rounded-lg text-xs font-semibold font-mono bg-neon-cyan text-slate-950 flex items-center gap-1.5"
                >
                  <FaFilePdf size={13} />
                  RESUME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
