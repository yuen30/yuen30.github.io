"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, Code, Users, Zap } from "lucide-react";

const achievements = [
    {
        metric: "10+",
        label: "ปีประสบการณ์",
        description: "Enterprise Systems Development",
        icon: Award,
        color: "from-blue-500 to-cyan-500"
    },
    {
        metric: "50+",
        label: "โปรเจคสำเร็จ",
        description: "ERP/WMS/IoT Systems",
        icon: Code,
        color: "from-purple-500 to-pink-500"
    },
    {
        metric: "99.9%",
        label: "System Uptime",
        description: "Production Systems",
        icon: Zap,
        color: "from-green-500 to-emerald-500"
    },
    {
        metric: "100+",
        label: "Happy Clients",
        description: "Across Various Industries",
        icon: Users,
        color: "from-orange-500 to-red-500"
    }
];

const specializations = [
    {
        title: "Industrial IoT Integration",
        description: "เชื่อมต่อ PLC กับ Web Dashboard แบบ Real-time",
        projects: ["Factory Monitoring System", "Production Line Analytics", "Equipment Status Dashboard"],
        impact: "เพิ่มประสิทธิภาพการผลิต 35%",
        icon: "🏭"
    },
    {
        title: "ERP/WMS Architecture",
        description: "ออกแบบระบบคลังสินค้าและ ERP ขนาดใหญ่",
        projects: ["Multi-warehouse WMS", "Odoo MRP Customization", "EDI Integration"],
        impact: "ลดเวลาประมวลผล Order 60%",
        icon: "📦"
    },
    {
        title: "Automation & DevOps",
        description: "CI/CD Pipeline และ Infrastructure Automation",
        projects: ["GitHub Actions Workflows", "Docker Containerization", "Cloud Deployment"],
        impact: "ลดเวลา Deployment 80%",
        icon: "⚙️"
    }
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6" aria-labelledby="achievements-title">
            <div className="max-w-7xl mx-auto">
                {/* Metrics Section */}
                <div className="text-center mb-20">
                    <h2 id="achievements-title" className="text-3xl md:text-5xl font-bold mb-4">
                        Track <span className="text-gradient">Record</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Numbers that speak for themselves - delivering excellence in every project
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-8 text-center group hover:scale-105 transition-transform"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{achievement.metric}</div>
                                <div className="text-lg font-semibold text-white/80 mb-2">{achievement.label}</div>
                                <div className="text-sm text-white/60">{achievement.description}</div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Specializations Section */}
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                        Core <span className="text-gradient">Specializations</span>
                    </h3>
                    <p className="text-white/60 max-w-3xl mx-auto">
                        Unique expertise in niche areas that drive business transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {specializations.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="glass-card p-8 group hover:bg-white/[0.05] transition-all"
                        >
                            <div className="text-4xl mb-4">{spec.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{spec.title}</h4>
                            <p className="text-white/70 mb-6 leading-relaxed">{spec.description}</p>
                            
                            <div className="mb-6">
                                <h5 className="text-sm font-semibold text-indigo-400 mb-3">Key Projects:</h5>
                                <ul className="space-y-2">
                                    {spec.projects.map((project, projectIndex) => (
                                        <li key={projectIndex} className="text-sm text-white/60 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                            {project}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-sm font-medium text-green-400">Impact:</span>
                                </div>
                                <p className="text-sm text-white/80 mt-1">{spec.impact}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};