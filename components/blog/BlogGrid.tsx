"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

const blogs = [
    {
        title: "Real-time PLC Dashboards with NextJS",
        excerpt: "Integrating WebSocket with Industrial machines for live performance monitoring and machine state tracking.",
        category: "Industrial IoT",
        date: "Jan 12, 2026",
        readTime: "10 min read"
    },
    {
        title: "Customizing Odoo for MRP & ERP",
        excerpt: "Best practices for developing MRP, BOM, and EDI modules using Python and Django within Odoo ecosystem.",
        category: "ERP Development",
        date: "Jan 10, 2026",
        readTime: "15 min read"
    },
    {
        title: "Full-Cycle WMS Architecture",
        excerpt: "Designing scalable Warehouse Management Systems from Inbound/Outbound logic to EDI processing.",
        category: "Logistics Tech",
        date: "Jan 08, 2026",
        readTime: "12 min read"
    },
    {
        title: "DevOps for Manufacturing",
        excerpt: "Using GitHub Actions, Docker, and Podman to streamline deployment in sensitive industrial environments.",
        category: "DevOps",
        date: "Jan 05, 2026",
        readTime: "8 min read"
    }
];

export const BlogGrid = () => {
    return (
        <section id="articles" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Latest <span className="text-indigo-400">Articles</span></h2>
                    <p className="text-white/50 max-w-xl">
                        Thoughts, insights, and practical guides on building high-performance web applications and mastering modern tech.
                    </p>
                </div>
                <button className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors flex items-center gap-2">
                    View all posts →
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <BlogCard {...blog} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
