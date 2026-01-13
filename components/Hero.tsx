"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 px-6" aria-labelledby="hero-title">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-indigo-300 border-indigo-500/20 mb-8"
                    aria-label="New updates announcement"
                >
                    <Sparkles size={16} aria-hidden="true" />
                    <span>New: AI & Web Performance Articles</span>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30"
                    >
                        <LazyImage
                            src="/profile.jpg"
                            alt="Taweechai Yuenyang - Senior Software Developer"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <div className="text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-2"
                            id="hero-title"
                        >
                            Senior <span className="text-gradient">Software Developer</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-2xl md:text-4xl font-bold tracking-tight text-white/80"
                        >
                            & System Architect
                        </motion.h2>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-white/60 max-w-3xl mb-10"
                    id="hero-description"
                >
                    Full-Stack Developer with 10+ years of experience specializing in
                    <span className="text-white"> Enterprise Systems (ERP/WMS) </span>
                    and <span className="text-white"> Industrial IoT </span>.
                    Expert in designing robust architectures and real-time monitoring solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                    role="group"
                    aria-labelledby="hero-actions-label"
                >
                    <span id="hero-actions-label" className="sr-only">Navigation buttons</span>
                    <a
                        href="/blog"
                        className="btn-primary flex items-center gap-2"
                        aria-label="Read blog articles"
                    >
                        Read My Blog <ArrowRight size={18} aria-hidden="true" />
                    </a>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-medium"
                        aria-label="View projects"
                    >
                        View Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
