"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { category: "Web Development", items: ["Next.js", "React", "Node.js", "TypeScript", "Nuxt.js"] },
    { category: "Backend & ERP", items: ["Odoo", "Python", "Django", "Laravel", "PostgreSQL", "MSSQL"] },
    { category: "Industrial & DevOps", items: ["PLC Integration", "WebSocket", "Docker", "Podman", "GitHub Actions"] },
    { category: "Analytics & Automation", items: ["Power Automate", "Power BI", "Inventory Analytics", "EDI Logic"] }
];

export const TechStack = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies I use to solve complex engineering challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, i) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 group hover:bg-white/[0.05] transition-all"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-white/70 font-medium group-hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
