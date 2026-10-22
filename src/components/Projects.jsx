import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaBrain,
  FaFileAlt,
  FaBook,
  FaCloudSun,
  FaCheck
} from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';

// 3D Tilt & Spotlight Card Container
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate normalized rotation (-7 to +7 deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setMousePos({ x, y });
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const isFeatured = project.featured;

  const projectIcons = {
    'medical-slm': <FaBrain className="text-neon-cyan text-3xl" />,
    'prepforge-ai': <FaFileAlt className="text-neon-purple text-3xl" />,
    'study-material-platform': <FaBook className="text-neon-emerald text-3xl" />,
    'weather-app': <FaCloudSun className="text-sky-400 text-3xl" />
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
      }}
      className={`relative rounded-3xl transition-transform duration-200 ease-out ${
        isFeatured
          ? 'lg:col-span-12 glass-panel border border-neon-cyan/40 shadow-glow-cyan'
          : 'lg:col-span-6 glass-panel border border-white/10 hover:border-neon-cyan/40'
      }`}
    >
      {/* Spotlight follower overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${
              isFeatured ? 'rgba(6, 182, 212, 0.15)' : 'rgba(139, 92, 246, 0.12)'
            }, transparent 80%)`
          }}
        />
      )}

      {/* Card Body */}
      <div className={`relative z-10 p-7 sm:p-9 ${isFeatured ? 'lg:p-11' : ''}`}>
        
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              {projectIcons[project.id] || <FaBrain className="text-neon-cyan text-3xl" />}
            </div>
            <div>
              {isFeatured && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/40 mb-1">
                  <FaStar className="text-xs" />
                  Featured AI Research Project
                </div>
              )}
              {project.period && (
                <span className="text-xs font-mono text-slate-400 block">
                  {project.period}
                </span>
              )}
            </div>
          </div>

          {/* Quick metric pill */}
          {project.stat && (
            <div className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-right">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                {project.stat.label}
              </span>
              <span className="font-display font-bold text-base text-neon-teal">
                {project.stat.value}
              </span>
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className={`font-display font-extrabold text-white tracking-tight ${
            isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
          }`}>
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-neon-cyan mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Bullet Points */}
        <ul className={`space-y-2.5 text-slate-300 mb-6 ${isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
          {project.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5">
              <FaCheck className="text-neon-teal text-xs mt-1 shrink-0" />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5 hover:border-neon-cyan/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-mono text-slate-300 hover:text-neon-cyan transition-colors"
          >
            <FaGithub size={16} />
            <span>View Source on GitHub</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </a>

          {isFeatured && (
            <span className="hidden sm:inline-block text-xs font-mono text-slate-500">
              PyTorch • Intent Classification • 81.48% Acc
            </span>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2"
          >
            Proof of Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              AI & Engineering Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Interactive 3D preview of transformer architectures, career AI intelligence, cloud resources, and client-side applications.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
