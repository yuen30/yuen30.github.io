"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, Code, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
}

export const ProjectCard = ({ name, description, url, language, stars }: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 h-full flex flex-col group hover:border-indigo-500/50 transition-all cursor-pointer"
            onClick={() => window.open(url, "_blank")}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
                    <Github size={20} className="text-white/70 group-hover:text-indigo-400" />
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-indigo-400 transition-colors" size={20} />
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
                {name}
            </h3>

            <p className="text-white/40 text-sm mb-6 flex-grow line-clamp-3">
                {description || "No description provided for this repository."}
            </p>

            <div className="flex items-center gap-4 text-xs font-medium text-white/30 pt-4 border-t border-white/5">
                {language && (
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                        {language}
                    </div>
                )}
                <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-yellow-500/50" />
                    {stars}
                </div>
            </div>
        </motion.div>
    );
};
