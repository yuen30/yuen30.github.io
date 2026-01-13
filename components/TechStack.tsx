"use client";

import React from "react";
import { motion } from "motion/react";

const skills = [
    { 
        category: "Frontend & Mobile", 
        items: [
            { name: "Next.js", level: 95, experience: "4 years" },
            { name: "React", level: 90, experience: "5 years" },
            { name: "TypeScript", level: 88, experience: "3 years" },
            { name: "Nuxt.js", level: 85, experience: "3 years" },
            { name: "PWA", level: 80, experience: "2 years" }
        ]
    },
    { 
        category: "Backend & Database", 
        items: [
            { name: "Python", level: 95, experience: "8 years" },
            { name: "Django", level: 90, experience: "6 years" },
            { name: "PostgreSQL", level: 88, experience: "7 years" },
            { name: "Laravel", level: 85, experience: "4 years" },
            { name: "Node.js", level: 82, experience: "3 years" }
        ]
    },
    { 
        category: "Enterprise & ERP", 
        items: [
            { name: "Odoo", level: 92, experience: "3 years" },
            { name: "ERP Design", level: 90, experience: "6 years" },
            { name: "WMS Systems", level: 88, experience: "5 years" },
            { name: "EDI Integration", level: 85, experience: "4 years" },
            { name: "MRP/BOM", level: 83, experience: "3 years" }
        ]
    },
    { 
        category: "Industrial IoT", 
        items: [
            { name: "PLC Integration", level: 88, experience: "3 years" },
            { name: "WebSocket", level: 90, experience: "4 years" },
            { name: "MQTT/Modbus", level: 85, experience: "2 years" },
            { name: "Real-time Systems", level: 87, experience: "4 years" },
            { name: "Industrial Automation", level: 82, experience: "3 years" }
        ]
    },
    { 
        category: "DevOps & Cloud", 
        items: [
            { name: "Docker", level: 88, experience: "4 years" },
            { name: "GitHub Actions", level: 90, experience: "3 years" },
            { name: "Linux Server", level: 85, experience: "6 years" },
            { name: "CI/CD", level: 87, experience: "4 years" },
            { name: "Infrastructure", level: 83, experience: "5 years" }
        ]
    },
    { 
        category: "Analytics & BI", 
        items: [
            { name: "Power BI", level: 80, experience: "2 years" },
            { name: "Data Analytics", level: 85, experience: "4 years" },
            { name: "Inventory Analytics", level: 88, experience: "5 years" },
            { name: "Power Automate", level: 82, experience: "1 year" },
            { name: "Reporting Systems", level: 87, experience: "6 years" }
        ]
    }
];

export const TechStack = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-white/[0.02]" aria-labelledby="skills-title">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 id="skills-title" className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies I use to solve complex engineering challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                    {skills.map((skillGroup, i) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 group hover:bg-white/[0.05] transition-all"
                            role="listitem"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-4" role="list" aria-label={`Skills in ${skillGroup.category}`}>
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.name} className="space-y-2" role="listitem">
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/80 font-medium">{skill.name}</span>
                                            <span className="text-xs text-white/50">{skill.experience}</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                                                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                            />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-indigo-400 font-medium">{skill.level}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
