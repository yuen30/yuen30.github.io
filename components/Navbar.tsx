"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Articles", href: "#articles" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                        T
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        Taweechai<span className="text-indigo-400">.dev</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
                        <a href="https://github.com/yuen30" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-indigo-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-white/50 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                    <button className="btn-primary py-2 px-5 text-sm">
                        Contact Me
                    </button>

                    <button
                        className="md:hidden p-2 text-white/70 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};
