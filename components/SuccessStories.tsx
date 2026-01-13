"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const stories = [
    {
        id: 1,
        title: "จาก Manual Process สู่ Automated Factory",
        company: "Manufacturing Company",
        challenge: "โรงงานใช้กระดาษติดตาม Production 100+ รายการ/วัน ทำให้เกิดข้อผิดพลาดและล่าช้า",
        solution: "พัฒนา Real-time PLC Dashboard ด้วย NextJS + WebSocket เชื่อมต่อเครื่องจักร 15 เครื่อง",
        results: [
            { metric: "80%", label: "ลดเวลาการรายงาน", icon: Clock },
            { metric: "95%", label: "เพิ่มความแม่นยำ", icon: TrendingUp },
            { metric: "60%", label: "ลดต้นทุนแรงงาน", icon: Users },
            { metric: "40%", label: "เพิ่มประสิทธิภาพ", icon: Zap }
        ],
        timeline: "3 เดือน",
        technologies: ["NextJS", "WebSocket", "PLC Integration", "PostgreSQL", "Docker"],
        image: "/projects/factory-dashboard.jpg"
    },
    {
        id: 2,
        title: "WMS System ที่ปฏิวัติการจัดการคลัง",
        company: "Logistics Company",
        challenge: "ระบบคลังสินค้าเก่าไม่รองรับ EDI และการติดตาม Real-time ทำให้เกิด Stock discrepancy",
        solution: "สร้าง WMS ครบวงจรด้วย Python + Django พร้อม EDI Automation และ Raspberry Pi LED Display",
        results: [
            { metric: "99.8%", label: "ความแม่นยำสต็อก", icon: TrendingUp },
            { metric: "60%", label: "ลดเวลา Processing", icon: Clock },
            { metric: "50%", label: "ลด Human Error", icon: Users },
            { metric: "35%", label: "เพิ่ม Throughput", icon: Zap }
        ],
        timeline: "6 เดือน",
        technologies: ["Python", "Django", "EDI", "Raspberry Pi", "GitHub Actions"],
        image: "/projects/wms-system.jpg"
    },
    {
        id: 3,
        title: "Odoo ERP Customization สำหรับ Manufacturing",
        company: "Industrial Company",
        challenge: "Odoo standard ไม่รองรับ complex BOM และ MRP planning ตามความต้องการเฉพาะ",
        solution: "Customize Odoo modules สำหรับ Forecast, MRP, BOM และเชื่อมต่อ Formula accounting system",
        results: [
            { metric: "70%", label: "ลดเวลา Planning", icon: Clock },
            { metric: "45%", label: "เพิ่ม Forecast Accuracy", icon: TrendingUp },
            { metric: "90%", label: "Automation Rate", icon: Zap },
            { metric: "25%", label: "ลดต้นทุนการผลิต", icon: Users }
        ],
        timeline: "4 เดือน",
        technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript"],
        image: "/projects/odoo-erp.jpg"
    }
];

export const SuccessStories = () => {
    return (
        <section id="success-stories" className="py-24 px-6 bg-white/[0.02]" aria-labelledby="stories-title">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 id="stories-title" className="text-3xl md:text-5xl font-bold mb-4">
                        Success <span className="text-gradient">Stories</span>
                    </h2>
                    <p className="text-white/60 max-w-3xl mx-auto text-lg">
                        Real-world projects that transformed businesses through innovative technology solutions
                    </p>
                </div>

                <div className="space-y-24">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                                        <span>{story.company}</span>
                                        <span className="text-indigo-500/50">•</span>
                                        <span>{story.timeline}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        {story.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            Challenge
                                        </h4>
                                        <p className="text-white/70 leading-relaxed">{story.challenge}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            Solution
                                        </h4>
                                        <p className="text-white/70 leading-relaxed">{story.solution}</p>
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {story.results.map((result, resultIndex) => {
                                        const Icon = result.icon;
                                        return (
                                            <div key={resultIndex} className="glass-card p-4 text-center">
                                                <Icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                                <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                                                <div className="text-xs text-white/60">{result.label}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {story.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-1 max-w-lg">
                                <div className="glass-card p-8 aspect-video flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <Zap className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="text-white font-semibold mb-2">Project Showcase</h4>
                                        <p className="text-white/60 text-sm">Interactive demo available</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};