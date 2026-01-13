"use client";

import { FeaturedProjectCard } from '@/components/FeaturedProjectCard';
import { motion } from "motion/react";

const projects = [
  {
    title: "Industrial IoT Dashboard",
    description: "Real-time monitoring system for manufacturing equipment with WebSocket integration and PLC connectivity.",
    technologies: ["NextJS", "WebSocket", "Python", "Docker"],
    category: "Industrial IoT",
    year: "2026",
    link: "#"
  },
  {
    title: "Custom Odoo ERP Module",
    description: "Developed MRP, BOM, and EDI modules for manufacturing workflow automation.",
    technologies: ["Python", "Odoo", "Django", "PostgreSQL"],
    category: "ERP Development",
    year: "2026",
    link: "#"
  },
  {
    title: "Warehouse Management System",
    description: "Full-cycle WMS solution with inbound/outbound logistics and EDI processing.",
    technologies: ["Python", "Django", "React", "MSSQL"],
    category: "Logistics Tech",
    year: "2025",
    link: "#"
  },
  {
    title: "Formula Integration Platform",
    description: "System integration connecting accounting software with external services.",
    technologies: ["Power Automate", "API Integration", "Python", "CI/CD"],
    category: "System Integration",
    year: "2024",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-white/60 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of enterprise solutions and innovative projects I've developed over the years.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <FeaturedProjectCard 
              key={index} 
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}