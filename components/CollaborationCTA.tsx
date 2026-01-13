"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Calendar, Coffee, Handshake, ArrowRight, Mail, Phone } from "lucide-react";

const collaborationTypes = [
    {
        icon: Handshake,
        title: "Consulting Projects",
        description: "Industrial IoT และ ERP implementation สำหรับธุรกิจของคุณ",
        action: "Discuss Your Project",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: MessageCircle,
        title: "Speaking Opportunities",
        description: "เชิญเป็น speaker ในงาน conference, workshop หรือ meetup",
        action: "Book a Speaking Slot",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Coffee,
        title: "Mentorship & Advice",
        description: "คำปรึกษาด้านเทคนิคและการพัฒนา career path",
        action: "Schedule a Coffee Chat",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Calendar,
        title: "Partnership & Investment",
        description: "ร่วมงานในโปรเจค startup หรือ innovation initiatives",
        action: "Explore Partnership",
        color: "from-green-500 to-emerald-500"
    }
];

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "taweechai.yue@outlook.co.th",
        href: "mailto:taweechai.yue@outlook.co.th",
        description: "สำหรับการติดต่อทางธุรกิจ"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "066-109-0602",
        href: "tel:+66661090602",
        description: "สำหรับการนัดหมายด่วน"
    }
];

export const CollaborationCTA = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Let's <span className="text-gradient">Collaborate</span>
                    </h2>
                    <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
                        พร้อมที่จะร่วมสร้างสรรค์โซลูชันที่จะเปลี่ยนแปลงอุตสาหกรรมไทย? 
                        มาคุยกันเรื่องโปรเจคที่น่าสนใจ หรือแบ่งปันไอเดียใหม่ๆ
                    </p>
                </motion.div>

                {/* Collaboration Types */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {collaborationTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-8 group hover:bg-white/[0.05] transition-all cursor-pointer"
                                onClick={() => {
                                    const subject = encodeURIComponent(`Collaboration: ${type.title}`);
                                    const body = encodeURIComponent(`Hi Taweechai,\n\nI'm interested in discussing ${type.description.toLowerCase()}.\n\nBest regards,`);
                                    window.open(`mailto:taweechai.yue@outlook.co.th?subject=${subject}&body=${body}`);
                                }}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                                        <p className="text-white/70 leading-relaxed">{type.description}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-indigo-400 font-medium">{type.action}</span>
                                    <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 max-w-4xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                        <p className="text-white/60">เลือกช่องทางที่สะดวกสำหรับคุณ</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                                        <Icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{method.label}</div>
                                        <div className="text-indigo-400 font-medium">{method.value}</div>
                                        <div className="text-white/60 text-sm">{method.description}</div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Response Time */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm font-medium">
                                Usually responds within 24 hours
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-white/50 text-sm mb-4">
                        Trusted by companies and developers across Thailand
                    </p>
                    <div className="flex justify-center items-center gap-8 opacity-60">
                        <div className="text-white/40 font-semibold">VCS Thailand</div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="text-white/40 font-semibold">Seiwa Pioneer</div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="text-white/40 font-semibold">YSS Thailand</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};