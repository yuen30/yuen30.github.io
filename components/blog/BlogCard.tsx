"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    slug: string;
}

export const BlogCard = ({ title, excerpt, category, date, readTime, slug }: BlogCardProps) => {
    const cardContent = (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-6 h-full flex flex-col group cursor-pointer hover:border-indigo-500/50 transition-all"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    {category}
                </span>
                <ArrowUpRight className="text-white/20 group-hover:text-indigo-400 transition-colors" size={20} />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                {title}
            </h3>

            <p className="text-white/50 text-sm mb-6 flex-grow">
                {excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs text-white/30 border-t border-white/5 pt-4">
                <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {date}
                </div>
                <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {readTime}
                </div>
            </div>
        </motion.div>
    );

    return (
        <Link href={`/blog/${slug}`}>
            {cardContent}
        </Link>
    );
};
