import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaReact,
  FaTools,
  FaCheckCircle
} from 'react-icons/fa';
import { SKILL_CATEGORIES, MARQUEE_TECH } from '../data/portfolioData';

const iconMap = {
  FaCode: <FaCode />,
  FaBrain: <FaBrain />,
  FaDatabase: <FaDatabase />,
  FaReact: <FaReact />,
  FaTools: <FaTools />
};

const accentStyles = {
  cyan: {
    border: 'hover:border-neon-cyan/50',
    iconColor: 'text-neon-cyan',
    badge: 'group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10'
  },
  purple: {
    border: 'hover:border-neon-purple/50',
    iconColor: 'text-neon-purple',
    badge: 'group-hover:border-neon-purple/30 group-hover:bg-neon-purple/10'
  },
  emerald: {
    border: 'hover:border-neon-emerald/50',
    iconColor: 'text-neon-emerald',
    badge: 'group-hover:border-neon-emerald/30 group-hover:bg-neon-emerald/10'
  },
  blue: {
    border: 'hover:border-sky-400/50',
    iconColor: 'text-sky-400',
    badge: 'group-hover:border-sky-400/30 group-hover:bg-sky-400/10'
  },
  amber: {
    border: 'hover:border-amber-400/50',
    iconColor: 'text-amber-400',
    badge: 'group-hover:border-amber-400/30 group-hover:bg-amber-400/10'
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Capabilities &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              Tooling Stack
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Hands-on expertise across modern AI frameworks, scalable backends, database management, and cloud infrastructures.
          </motion.p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const styles = accentStyles[cat.accent] || accentStyles.cyan;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group glass-card p-7 rounded-2xl border border-white/10 ${styles.border} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Header of Card */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-2xl ${styles.iconColor}`}>
                    {iconMap[cat.icon]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-neon-cyan transition-colors">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-black/40 text-slate-300 border border-white/10 transition-all duration-200 flex items-center gap-1.5 ${styles.badge}`}
                    >
                      <FaCheckCircle className="text-[10px] text-neon-teal/70" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Tech Marquee Banner */}
        <div className="relative py-4 rounded-2xl glass-panel border border-white/10 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee">
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 mx-6 text-sm font-mono font-semibold text-slate-400 hover:text-neon-cyan transition-colors cursor-default"
              >
                <span className="text-neon-cyan text-xs">⚡</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
