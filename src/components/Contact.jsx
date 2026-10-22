import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaFilePdf,
  FaCopy,
  FaCheck
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PROFILE } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Niranjan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Initiate Connection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Let's Collaborate on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              Next-Gen AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Open to AI engineering roles, LLM/agent initiatives, and high-impact technology projects.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Contact Details
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub. I respond promptly!
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 mb-8">
                {/* Email card */}
                <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                      <FaEnvelope size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/5 hover:text-neon-cyan text-slate-400 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? <FaCheck className="text-neon-emerald" /> : <FaCopy />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neon-teal/10 border border-neon-teal/30 flex items-center justify-center text-neon-teal">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Phone
                    </span>
                    <a
                      href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors"
                    >
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                {/* Resume Card */}
                <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple">
                      <FaFilePdf size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Curriculum Vitae
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Latest Resume PDF
                      </span>
                    </div>
                  </div>

                  <a
                    href={PROFILE.links.resume}
                    download="Niranjan_S_Nayak_Resume.pdf"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-neon-purple/20 text-neon-purple border border-neon-purple/30 hover:bg-neon-purple hover:text-slate-950 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Social profiles row */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Professional Networks
              </p>
              <div className="flex gap-3">
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
                  }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl glass-card border border-white/10 flex items-center justify-center gap-2 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 hover:-translate-y-1 transition-all"
                  >
                    {s.icon}
                    <span className="text-xs font-mono font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10"
          >
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Send a Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Fill in the parameters below to launch an instant message thread.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Engineering Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Message Content
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your role requirements, project goals, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan text-sm font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-neon-cyan to-neon-purple text-slate-950 hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Dispatch Message via Email</span>
                <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>

              {sent && (
                <div className="p-3 rounded-xl bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald text-xs font-mono text-center">
                  Email client opened! Thank you for reaching out.
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
