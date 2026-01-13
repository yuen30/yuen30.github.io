"use client";

import React from "react";
import { motion } from "motion/react";
import { Heart, Globe, Zap, Users } from "lucide-react";

const missionValues = [
    {
        icon: Heart,
        title: "Passion for Innovation",
        description: "มุ่งมั่นในการสร้างสรรค์เทคโนโลยีที่ช่วยแก้ปัญหาจริงของธุรกิจและสังคม",
        color: "from-red-500 to-pink-500"
    },
    {
        icon: Globe,
        title: "Global Impact, Local Focus",
        description: "ใช้เทคโนโลยีระดับโลกเพื่อยกระดับอุตสาหกรรมไทยสู่ Industry 4.0",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Continuous Learning",
        description: "เรียนรู้และพัฒนาตัวเองอย่างต่อเนื่อง เพื่อก้าวทันเทคโนโลジีที่เปลี่ยนแปลงไป",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Users,
        title: "Knowledge Sharing",
        description: "แบ่งปันความรู้และประสบการณ์เพื่อพัฒนา tech community ของไทย",
        color: "from-green-500 to-emerald-500"
    }
];

export const PersonalMission = () => {
    return (
        <section className="py-16 px-6 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Personal <span className="text-gradient">Mission</span>
                    </h3>
                    <div className="glass-card p-8 max-w-4xl mx-auto">
                        <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
                            "สร้างสรรค์เทคโนโลยี Industrial IoT ที่ช่วยยกระดับอุตสาหกรรมไทย 
                            พร้อมแบ่งปันความรู้เพื่อพัฒนา tech ecosystem ให้เข้มแข็งและยั่งยืน"
                        </blockquote>
                        <div className="mt-6 text-indigo-400 font-semibold">
                            — ทวีชัย ยืนยั่ง
                        </div>
                    </div>
                </motion.div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {missionValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-6 group hover:bg-white/[0.05] transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                                        <p className="text-white/70 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};