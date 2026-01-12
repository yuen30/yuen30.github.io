"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Power Automate Professional",
        issuer: "Toyota Daihatsu Engineering & Manufacturing (TDEM)",
        year: "2567 (2024)",
        description: "Advanced automation workflows and enterprise process optimization using Microsoft Power Platform.",
        link: "#"
    },
    {
        title: "AI & Machine Learning with Python",
        issuer: "Udemy (Self-Learning)",
        year: "Ongoing",
        description: "Deep dive into data science, predictive modeling, and AI integration for real-world applications.",
        link: "#"
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional <span className="text-indigo-400">Accomplishments</span>
                    </h2>
                    <p className="text-white/40">
                        Continuous learning and official recognitions in emerging technologies and automation tools.
                    </p>
                </div>
                <div className="flex items-center gap-4 p-6 glass-card border-indigo-500/20">
                    <Award className="text-indigo-400" size={32} />
                    <div>
                        <div className="text-2xl font-bold text-white">Certificates</div>
                        <div className="text-white/40 text-sm">Verified Credentials</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 relative group overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-600/5 blur-[80px] group-hover:bg-indigo-600/10 transition-colors" />

                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 rounded-2xl bg-indigo-600/10 text-indigo-400">
                                <CheckCircle2 size={24} />
                            </div>
                            <span className="text-white/20 font-bold">{cert.year}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-indigo-300/80 text-sm font-medium mb-4">{cert.issuer}</p>
                        <p className="text-white/40 text-sm mb-6 leading-relaxed">
                            {cert.description}
                        </p>

                        <button className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors">
                            View Certificate <ExternalLink size={14} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
