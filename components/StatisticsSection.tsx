"use client";

import { motion } from "motion/react";

export function StatisticsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="py-10 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Articles', value: '40+' },
          { label: 'Subscribers', value: '2k+' },
          { label: 'Coffee', value: 'Infinite' },
          { label: 'Projects', value: '15+' },
        ].map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="text-3xl font-bold text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
