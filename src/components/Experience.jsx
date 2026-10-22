import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Career Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Hands-on industry internships focused on AI engineering, autonomous agent systems, and enterprise data analytics.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static background track line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

          {/* Dynamic drawing line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-emerald -translate-x-1/2 shadow-glow-cyan"
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Glowing Node Dot on Timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-dark-bg border-2 border-neon-cyan flex items-center justify-center shadow-glow-cyan"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
                  </motion.div>

                  {/* Card Content - alternate sides on desktop */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all group"
                    >
                      {/* Top Badges */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">
                          {exp.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <FaCalendarAlt className="text-neon-teal text-xs" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-neon-cyan transition-colors mb-1">
                        {exp.role}
                      </h3>

                      <div
                        className={`flex items-center gap-2 mb-3 text-slate-300 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-neon-purple hover:text-neon-cyan transition-colors inline-flex items-center gap-1.5"
                        >
                          <FaBriefcase className="text-xs" />
                          <span>{exp.company}</span>
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                        {exp.location && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            • <FaMapMarkerAlt className="text-[10px]" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Domain Highlights Subheader */}
                      <p className="text-xs font-mono text-neon-teal mb-4 font-medium">
                        {exp.highlights}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 text-left mb-5">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0 mt-2" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div
                        className={`flex flex-wrap gap-1.5 pt-3 border-t border-white/5 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
