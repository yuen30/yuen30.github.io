"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-indigo-300 border-indigo-500/20 mb-8"
                >
                    <Sparkles size={16} />
                    <span>New: AI & Web Performance Articles</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Senior <span className="text-gradient">Software Developer</span> <br className="hidden md:block" />
                    & System Architect
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-white/60 max-w-3xl mb-10"
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
                >
                    <button className="btn-primary flex items-center gap-2">
                        Read My Blog <ArrowRight size={18} />
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-medium">
                        View Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
