"use client";

import Link from 'next/link';
import { motion } from "motion/react";

export function NewsletterSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto glass-card p-12 relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Ahead of the <span className="text-gradient">Curve</span>
        </h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto text-lg">
          Subscribe to get my latest articles and curation of the best tech resources delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <Link href="/blog" className="btn-primary">
            Browse Articles
          </Link>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[100px]" />
    </motion.section>
  );
}
