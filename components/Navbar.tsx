"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Articles", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav" role="navigation" aria-label="Main navigation">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20" aria-label="Taweechai logo">
                        T
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        Taweechai<span className="text-indigo-400">.dev</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8" role="menubar">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                            role="menuitem"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
                        <a
                            href="https://github.com/yuen30"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-indigo-400 transition-colors"
                            aria-label="GitHub profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-white/50 hover:text-blue-400 transition-colors"
                            aria-label="Twitter profile"
                        >
                            <Twitter size={20} />
                        </a>
                    </div>
                    <ThemeToggle />
                    <a href="#contact" className="btn-primary py-2 px-5 text-sm">
                        Contact Me
                    </a>

                    <button
                        className="md:hidden p-2 text-white/70 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden absolute top-full left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10 py-4 px-6"
                        role="menubar"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
                                    role="menuitem"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </nav>
    );
};
