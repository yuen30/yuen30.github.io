"use client";

import React from "react";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                            T
                        </div>
                        <span className="font-bold tracking-tight">Taweechai.dev</span>
                    </div>
                    <p className="text-white/40 text-sm max-w-xs text-center md:text-left">
                        Taweechai Yuenyang — Senior Developer specializing in ERP, WMS, and IoT solutions.
                    </p>
                    <div className="mt-4 text-white/30 text-xs text-center md:text-left">
                        <p>📧 taweechai.yue@outlook.co.th</p>
                        <p>📞 066-109-0602</p>
                    </div>
                </div>

                <div className="flex gap-10">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/yuen30" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="text-white/30 text-xs flex flex-col items-center md:items-end gap-2">
                    <p>© 2026 Taveechai. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Built with <Heart size={12} className="text-pink-500 fill-pink-500" /> & Next.js
                    </div>
                </div>
            </div>
        </footer>
    );
};
