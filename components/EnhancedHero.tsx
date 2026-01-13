"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Download, Mail, Github, Linkedin } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";

const typingTexts = [
    "Senior Software Developer",
    "System Architect", 
    "Industrial IoT Expert",
    "ERP/WMS Specialist",
    "DevOps Engineer"
];

export const EnhancedHero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = typingTexts[currentTextIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentFullText.length) {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 px-6" aria-labelledby="hero-title">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-indigo-300 border-indigo-500/20 mb-8"
                    aria-label="Current status"
                >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Available for new opportunities</span>
                    <Sparkles size={16} aria-hidden="true" />
                </motion.div>

                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500/30 relative">
                            <LazyImage
                                src="/profile.jpg"
                                alt="Taweechai Yuenyang - Senior Software Developer"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating badges */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">10+</span>
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-12 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">Expert</span>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="text-center lg:text-left flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-4"
                        >
                            <h1 className="text-2xl md:text-3xl font-semibold text-white/80 mb-2">
                                สวัสดีครับ, ผม
                            </h1>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                                <span className="text-gradient">ทวีชัย ยืนยั่ง</span>
                            </h2>
                        </motion.div>

                        {/* Typing Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-8"
                        >
                            <div className="text-2xl md:text-4xl font-bold text-white/90 h-16 flex items-center justify-center lg:justify-start">
                                {displayText}
                                <span className="animate-pulse text-indigo-400">|</span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/70 max-w-3xl mb-8 leading-relaxed"
                        >
                            Full-Stack Developer with <span className="text-indigo-400 font-semibold">10+ years</span> of experience 
                            specializing in <span className="text-white font-semibold">Enterprise Systems (ERP/WMS)</span> and 
                            <span className="text-white font-semibold"> Industrial IoT</span>. 
                            Expert in designing robust architectures and real-time monitoring solutions.
                        </motion.p>

                        {/* Key Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-400">50+</div>
                                <div className="text-sm text-white/60">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                                <div className="text-sm text-white/60">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">15+</div>
                                <div className="text-sm text-white/60">Technologies</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                    <a
                        href="#success-stories"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-primary flex items-center gap-2"
                        aria-label="View success stories"
                    >
                        View Success Stories <ArrowRight size={18} aria-hidden="true" />
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all font-medium flex items-center gap-2"
                        aria-label="Download resume"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-6"
                >
                    <a
                        href="mailto:taweechai.yue@outlook.co.th"
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Send email"
                    >
                        <Mail size={20} className="text-white/70" />
                    </a>
                    <a
                        href="https://github.com/yuen30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="GitHub profile"
                    >
                        <Github size={20} className="text-white/70" />
                    </a>
                    <a
                        href="https://linkedin.com/in/taweechai-yuenyang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="LinkedIn profile"
                    >
                        <Linkedin size={20} className="text-white/70" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};