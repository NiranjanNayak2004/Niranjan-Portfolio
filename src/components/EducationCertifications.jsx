import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Academic & Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              Certifications
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-neon-cyan text-xl" />
              <h3 className="font-display font-bold text-xl text-white">
                Formal Education
              </h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-bold w-fit">
                    <span>{edu.scoreLabel}:</span>
                    <span className="text-white">{edu.scoreValue}</span>
                  </div>
                </div>

                <h4 className="font-display font-bold text-xl text-white group-hover:text-neon-cyan transition-colors mb-1">
                  {edu.degree}
                </h4>

                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-3">
                  <span className="font-semibold text-neon-purple">
                    {edu.institution}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaMapMarkerAlt className="text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <FaAward className="text-neon-purple text-xl" />
              <h3 className="font-display font-bold text-xl text-white">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-neon-purple/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30 text-neon-purple shrink-0">
                      <FaAward size={20} />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-display font-bold text-white text-base group-hover:text-neon-purple transition-colors mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-neon-teal mb-3">
                        {cert.issuer}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Verified skills summary box */}
              <div className="p-5 rounded-2xl glass-panel border border-neon-emerald/30 bg-neon-emerald/5">
                <div className="flex items-center gap-2 text-neon-emerald font-semibold text-xs font-mono uppercase tracking-wider mb-2">
                  <FaCheckCircle />
                  Continuous Mastery
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Actively pursuing modern advancements in Transformer reasoning, prompt optimization, and low-latency API workflows.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
