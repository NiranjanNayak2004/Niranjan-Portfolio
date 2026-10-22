import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/portfolioData';

const CounterItem = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1800; // 1.8 seconds smooth animation
    const target = stat.value;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  const formattedValue =
    stat.decimals > 0
      ? displayValue.toFixed(stat.decimals)
      : Math.floor(displayValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-white/10 hover:border-neon-cyan/40"
    >
      {/* Background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-2xl group-hover:bg-neon-cyan/15 transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
            {formattedValue}
          </span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-neon-teal">
            {stat.suffix}
          </span>
        </div>

        <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-1">
          {stat.label}
        </h3>

        <p className="text-xs text-slate-400 font-mono">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};

export const StatsCounter = () => {
  return (
    <section className="relative py-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <CounterItem key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
