import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaCogs,
  FaServer,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { PROFILE } from '../data/portfolioData';

export const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: <FaBrain className="text-neon-cyan text-2xl" />,
      title: 'Medical SLM & NLP',
      desc: 'Developing specialized Small Language Models with PyTorch and NumPy, focusing on medical intent classification, subject extraction, and temporal relationships.'
    },
    {
      icon: <FaCogs className="text-neon-purple text-2xl" />,
      title: 'AI Agent & Tool Engineering',
      desc: 'Building autonomous agent tools and provider integrations on the ART platform, configuring schemas, HTTP headers, request validation, and production workflows.'
    },
    {
      icon: <FaServer className="text-neon-emerald text-2xl" />,
      title: 'Full-Stack & Cloud Workflows',
      desc: 'Architecting secure full-stack applications with Flask, React, and MySQL, with hands-on BigQuery IoT data analysis and Google Cloud Run deployment.'
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Engineering Profile
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Engineering Intelligence &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Autonomous Systems
            </span>
          </motion.h2>
        </div>

        {/* Main Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                <h3 className="font-display font-bold text-xl text-white">
                  Professional Summary
                </h3>
              </div>

              <p className="text-slate-200 text-lg leading-relaxed mb-6 font-medium">
                {PROFILE.summary}
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                I specialize in bridging the gap between raw machine learning models and production-grade software. Whether configuring deep tool parameter schemas for AI agents or designing normalized relational databases with RESTful APIs, I build systems that are efficient, scalable, and reliable.
              </p>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-neon-cyan text-xs" />
                  <span>{PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-neon-teal text-xs" />
                  <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="hover:text-neon-cyan transition-colors">
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl text-xs font-mono font-medium glass-card border border-white/15 text-slate-200 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-neon-emerald" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-neon-cyan" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Pillars List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
