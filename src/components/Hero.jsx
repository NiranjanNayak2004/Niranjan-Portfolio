import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaFilePdf,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTerminal,
  FaBrain,
  FaMicrochip
} from 'react-icons/fa';
import { SiLeetcode, SiPytorch, SiLangchain } from 'react-icons/si';
import { PROFILE } from '../data/portfolioData';

export const Hero = () => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-emerald" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-300 tracking-wide">
                {PROFILE.status}
              </span>
            </motion.div>

            {/* Name with Staggered Gradient Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-purple">
                  {PROFILE.name}
                </span>
              </h1>
            </motion.div>

            {/* Rotating Role Line */}
            <motion.div variants={itemVariants} className="h-12 sm:h-14 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-xl sm:text-2xl text-slate-400 mr-2">
                &gt;
              </span>
              <TypeAnimation
                sequence={[
                  'AI Engineer',
                  2200,
                  'LLM & Agent Developer',
                  2200,
                  'Full-Stack Developer',
                  2200,
                  'PyTorch & Transformer Researcher',
                  2200
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-teal"
              />
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              {PROFILE.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-neon-cyan to-neon-teal text-slate-950 hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PROFILE.links.resume}
                download="Niranjan_S_Nayak_Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm glass-card border border-white/15 text-white hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaFilePdf className="text-sm" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">
                Connect:
              </span>
              {[
                {
                  href: PROFILE.links.linkedin,
                  icon: <FaLinkedin size={18} />,
                  label: 'LinkedIn'
                },
                {
                  href: PROFILE.links.github,
                  icon: <FaGithub size={18} />,
                  label: 'GitHub'
                },
                {
                  href: PROFILE.links.leetcode,
                  icon: <SiLeetcode size={17} />,
                  label: 'LeetCode'
                },
                {
                  href: `mailto:${PROFILE.email}`,
                  icon: <FaEnvelope size={17} />,
                  label: 'Email'
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:-translate-y-1 transition-all duration-200"
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive AI Terminal & Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/40 via-neon-purple/40 to-neon-emerald/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Terminal Card */}
              <div className="relative rounded-2xl glass-panel border border-white/15 p-6 shadow-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-xs text-slate-400 ml-2">
                      nsn-ai-core v2.6
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neon-teal">
                    <span className="w-2 h-2 rounded-full bg-neon-teal animate-ping" />
                    ONLINE
                  </div>
                </div>

                {/* Telemetry rows */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Model & Architecture */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5 text-neon-cyan">
                        <FaBrain /> Active Domain
                      </span>
                      <span className="text-[10px] text-slate-500">PYTORCH</span>
                    </div>
                    <p className="text-white font-medium text-sm">
                      Medical SLM & Agent Workflows
                    </p>
                  </div>

                  {/* Accuracy metric pill */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-slate-400 block text-[11px] mb-1">
                        Intent Accuracy
                      </span>
                      <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-teal">
                        81.48%
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-slate-400 block text-[11px] mb-1">
                        B.E. CGPA
                      </span>
                      <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                        8.27
                      </span>
                    </div>
                  </div>

                  {/* Current Internship status */}
                  <div className="p-3 rounded-xl bg-gradient-to-br from-neon-purple/10 to-transparent border border-neon-purple/20">
                    <div className="flex items-center gap-2 text-neon-purple mb-1">
                      <FaMicrochip />
                      <span className="font-semibold text-slate-200">
                        Aiotrix Private Limited
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      AI Engineer Intern • ART Platform & Custom AI Agent Integrations
                    </p>
                  </div>

                  {/* Tech stack badges in terminal */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {['PyTorch', 'NumPy', 'LangChain', 'Flask', 'React', 'BigQuery'].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 border border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
