"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "VCS Thailand Co., Ltd.",
        role: "Senior Programmer",
        period: "03/2023 – Present",
        location: "Thailand",
        description: "Infrastructure management, ERP/Odoo development (MRP, BOM, EDI), and Industrial IoT with Real-time PLC Dashboards.",
        skills: ["NextJS", "Odoo", "Linux", "WebSocket", "CI/CD"]
    },
    {
        company: "Seiwa Pioneer Logistics",
        role: "Programmer",
        period: "05/2019 – 03/2023",
        location: "Thailand",
        description: "WMS full-cycle development, EDI processing automation with Python bots, and hardware integration (Raspberry Pi/LED).",
        skills: ["Python", "Automation", "WMS", "GitHub Actions"]
    },
    {
        company: "YSS Thailand",
        role: "Programmer",
        period: "06/2015 – 05/2019",
        location: "Thailand",
        description: "Developing REST APIs with Django, PWA with NuxtJS, and managing CRM & online evaluation systems.",
        skills: ["Django", "NuxtJS", "Laravel", "CRM"]
    },
    {
        company: "Seiwa Pioneer Logistics",
        role: "Programmer / IT Support",
        period: "01/2014 – 06/2015",
        location: "Thailand",
        description: "Internal system development (VB.Net), infrastructure support, and inventory analytics for slow-moving stock.",
        skills: ["VB.Net", "Infrastructure", "Analytics", "MSSQL"]
    }
];

export const ExperienceTimeline = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="experience-title">
            <div className="text-center mb-20">
                <h2 id="experience-title" className="text-3xl md:text-5xl font-bold mb-4">
                    Professional <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-white/40 max-w-2xl mx-auto">
                    Over a decade of building scalable enterprise solutions and industrial automation.
                </p>
            </div>

            <div
                className="relative border-l border-white/10 ml-4 md:ml-auto md:mr-auto md:border-l-0 md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:top-0 md:after:bottom-0 md:after:w-px md:after:bg-white/10"
                role="list"
                aria-label="Work experience timeline"
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16 md:text-right"
                            }`}
                        role="listitem"
                    >
                        {/* Timeline Dot */}
                        <div
                            className={`absolute top-0 w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10 ${index % 2 === 0
                                ? "left-[-25px] md:left-[-8px]"
                                : "left-[-25px] md:left-auto md:right-[-8px]"
                            }`}
                            aria-hidden="true"
                        />

                        <div className="glass-card p-8 hover:border-indigo-500/30 transition-colors" role="group" aria-labelledby={`exp-role-${index}`}>
                            <div className={`flex items-center gap-2 text-indigo-400 text-sm font-bold mb-2 ${index % 2 !== 0 && "md:justify-end"}`}>
                                <Calendar size={14} aria-hidden="true" />
                                <span>{exp.period}</span>
                            </div>
                            <h3 id={`exp-role-${index}`} className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className={`flex items-center gap-2 text-white/60 font-medium mb-4 ${index % 2 !== 0 && "md:justify-end"}`}>
                                <Briefcase size={16} aria-hidden="true" />
                                <span>{exp.company}</span>
                                <span className="text-white/20 px-2" aria-hidden="true">|</span>
                                <MapPin size={16} aria-hidden="true" />
                                <span>{exp.location}</span>
                            </div>
                            <p className="text-white/40 leading-relaxed mb-6">
                                {exp.description}
                            </p>
                            <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 && "md:justify-end"}`} role="list" aria-label={`Skills for ${exp.role} at ${exp.company}`}>
                                {exp.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50"
                                        role="listitem"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
