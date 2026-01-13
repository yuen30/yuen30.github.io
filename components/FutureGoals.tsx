"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, Lightbulb, Users, Award, Rocket, BookOpen, Mic, Code } from "lucide-react";

const goals = [
    {
        category: "Personal Branding",
        icon: Award,
        color: "from-purple-500 to-pink-500",
        timeline: "2024-2025",
        objectives: [
            {
                title: "Industrial IoT Expert Recognition",
                description: "กลายเป็น thought leader ในวงการ Industrial IoT และ Smart Manufacturing ของไทย",
                milestones: [
                    "เขียน technical articles 12+ บทความต่อปี",
                    "สร้าง case studies จากโปรเจคจริง",
                    "มีผู้ติดตาม 5,000+ คนในแพลตฟอร์ม tech"
                ],
                impact: "เป็นที่รู้จักในวงการเป็น go-to person สำหรับ Industrial IoT solutions"
            }
        ]
    },
    {
        category: "Speaking & Community",
        icon: Mic,
        color: "from-blue-500 to-cyan-500",
        timeline: "2024-2026",
        objectives: [
            {
                title: "Tech Conference Speaker",
                description: "เป็น keynote speaker ในงาน tech conferences และ meetups",
                milestones: [
                    "พูดในงาน DevMountain, Code in the Dark Thailand",
                    "จัด workshop เรื่อง Industrial IoT",
                    "เป็น mentor ใน tech communities"
                ],
                impact: "แบ่งปันความรู้และสร้างเครือข่ายในวงการ tech"
            },
            {
                title: "Community Building",
                description: "สร้างและนำ community สำหรับ Industrial IoT developers",
                milestones: [
                    "สร้าง Thai Industrial IoT Developers group",
                    "จัด monthly meetup",
                    "สร้าง online learning resources"
                ],
                impact: "ยกระดับ Industrial IoT ecosystem ในประเทศไทย"
            }
        ]
    },
    {
        category: "Business & Consulting",
        icon: Users,
        color: "from-green-500 to-emerald-500",
        timeline: "2025-2027",
        objectives: [
            {
                title: "Independent Consulting",
                description: "เปิดบริการ consulting สำหรับ Industrial IoT และ ERP implementations",
                milestones: [
                    "รับงาน consulting 10+ โปรเจคต่อปี",
                    "สร้าง passive income จาก digital products",
                    "พัฒนา SaaS products สำหรับ SMEs"
                ],
                impact: "ช่วยธุรกิจไทยเข้าสู่ Industry 4.0"
            },
            {
                title: "Startup Advisor",
                description: "เป็น technical advisor สำหรับ startups ด้าน IoT และ Manufacturing",
                milestones: [
                    "เป็น advisor ใน 3-5 startups",
                    "ลงทุนใน early-stage tech companies",
                    "สร้าง network ของ entrepreneurs"
                ],
                impact: "สนับสนุน innovation ecosystem ในประเทศไทย"
            }
        ]
    },
    {
        category: "Open Source & Innovation",
        icon: Code,
        color: "from-orange-500 to-red-500",
        timeline: "2024-2028",
        objectives: [
            {
                title: "Open Source Contributions",
                description: "สร้างและพัฒนา open source tools สำหรับ Industrial IoT",
                milestones: [
                    "สร้าง PLC integration library",
                    "พัฒนา Odoo modules สำหรับ manufacturing",
                    "มี GitHub stars 1,000+ รวม"
                ],
                impact: "ช่วยให้ developers อื่นพัฒนา IoT solutions ได้ง่ายขึ้น"
            },
            {
                title: "Research & Development",
                description: "วิจัยและพัฒนา innovative solutions สำหรับ Smart Manufacturing",
                milestones: [
                    "ร่วมวิจัยกับมหาวิทยาลัย",
                    "ยื่นสิทธิบัตร 2-3 เรื่อง",
                    "ตีพิมพ์ paper ในงานวิชาการ"
                ],
                impact: "ผลักดันการวิจัยและพัฒนา Industrial IoT ในประเทศไทย"
            }
        ]
    },
    {
        category: "Knowledge Sharing",
        icon: BookOpen,
        color: "from-indigo-500 to-purple-500",
        timeline: "2025-2030",
        objectives: [
            {
                title: "Technical Writing & Education",
                description: "เขียนหนังสือและสร้างคอร์สเรียนออนไลน์",
                milestones: [
                    "เขียนหนังสือ 'Industrial IoT with Python'",
                    "สร้างคอร์สออนไลน์ 5+ คอร์ส",
                    "มีนักเรียนออนไลน์ 10,000+ คน"
                ],
                impact: "ถ่ายทอดความรู้ให้กับ developers รุ่นใหม่"
            },
            {
                title: "Mentorship Program",
                description: "สร้างโปรแกรม mentorship สำหรับ junior developers",
                milestones: [
                    "เป็น mentor ให้ 50+ developers",
                    "สร้าง structured learning path",
                    "จัด internship program"
                ],
                impact: "พัฒนา talent pool ด้าน Industrial IoT ในประเทศไทย"
            }
        ]
    }
];

const achievements = [
    {
        year: "2024",
        title: "Industrial IoT Expert Recognition",
        description: "ได้รับการยอมรับเป็น expert ด้าน Industrial IoT ในประเทศไทย"
    },
    {
        year: "2025",
        title: "First Tech Conference Speaking",
        description: "เป็น keynote speaker ในงาน tech conference ครั้งแรก"
    },
    {
        year: "2026",
        title: "Launch Consulting Business",
        description: "เปิดบริษัท consulting เฉพาะด้าน Industrial IoT"
    },
    {
        year: "2027",
        title: "Open Source Recognition",
        description: "Open source projects ได้รับการยอมรับในระดับสากล"
    },
    {
        year: "2028",
        title: "Industry 4.0 Advocate",
        description: "เป็นผู้นำในการผลักดัน Industry 4.0 ในประเทศไทย"
    }
];

export const FutureGoals = () => {
    return (
        <section id="future-goals" className="py-24 px-6" aria-labelledby="goals-title">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 id="goals-title" className="text-3xl md:text-5xl font-bold mb-4">
                        Future <span className="text-gradient">Vision</span>
                    </h2>
                    <p className="text-white/60 max-w-3xl mx-auto text-lg">
                        แผนการพัฒนาตัวเองและการสร้างผลกระทบเชิงบวกต่อวงการเทคโนโลยีไทย
                    </p>
                </div>

                {/* Goals Grid */}
                <div className="space-y-16 mb-24">
                    {goals.map((goal, index) => {
                        const Icon = goal.icon;
                        return (
                            <motion.div
                                key={goal.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="glass-card p-8"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{goal.category}</h3>
                                        <p className="text-indigo-400 font-medium">{goal.timeline}</p>
                                    </div>
                                </div>

                                {/* Objectives */}
                                <div className="space-y-8">
                                    {goal.objectives.map((objective, objIndex) => (
                                        <div key={objIndex} className="border-l-2 border-white/10 pl-6">
                                            <h4 className="text-xl font-bold text-white mb-3">{objective.title}</h4>
                                            <p className="text-white/70 mb-4 leading-relaxed">{objective.description}</p>
                                            
                                            {/* Milestones */}
                                            <div className="mb-4">
                                                <h5 className="text-sm font-semibold text-cyan-400 mb-3">Key Milestones:</h5>
                                                <ul className="space-y-2">
                                                    {objective.milestones.map((milestone, milestoneIndex) => (
                                                        <li key={milestoneIndex} className="text-white/60 flex items-start gap-2">
                                                            <Target size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm">{milestone}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Impact */}
                                            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Rocket size={16} className="text-green-400" />
                                                    <span className="text-sm font-semibold text-green-400">Expected Impact</span>
                                                </div>
                                                <p className="text-white/80 text-sm">{objective.impact}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Timeline */}
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                        Milestone <span className="text-gradient">Timeline</span>
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        เป้าหมายสำคัญที่วางแผนไว้ในแต่ละปี
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                    
                    <div className="space-y-12">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="glass-card p-6">
                                        <div className="text-2xl font-bold text-indigo-400 mb-2">{achievement.year}</div>
                                        <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                                        <p className="text-white/70 text-sm">{achievement.description}</p>
                                    </div>
                                </div>
                                
                                {/* Timeline Dot */}
                                <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900 z-10"></div>
                                
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="glass-card p-8 max-w-3xl mx-auto">
                        <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let's Build the Future Together
                        </h3>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            หากคุณมีโปรเจคที่น่าสนใจ หรือต้องการร่วมงานในการพัฒนา Industrial IoT solutions 
                            ผมยินดีที่จะร่วมสร้างสรรค์สิ่งใหม่ๆ ไปด้วยกัน
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-primary"
                            >
                                Let's Collaborate
                            </a>
                            <a
                                href="mailto:taweechai.yue@outlook.co.th"
                                className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all font-medium"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};