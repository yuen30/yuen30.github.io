"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Calendar, Tag } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  year: string;
  link: string;
}

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card p-8 h-full flex flex-col group hover:border-indigo-500/50 transition-all cursor-pointer"
      onClick={() => project.link !== "#" && window.open(project.link, "_blank")}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          <span className="text-indigo-400 text-sm font-medium">{project.category}</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <Calendar size={14} />
          <span>{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/70 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag size={14} className="text-white/50" />
          <span className="text-white/50 text-sm">Technologies</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 group-hover:border-indigo-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="text-sm text-white/50">
          {project.link === "#" ? "Coming Soon" : "View Project"}
        </div>
        {project.link !== "#" && (
          <ExternalLink 
            size={16} 
            className="text-white/50 group-hover:text-indigo-400 transition-colors" 
          />
        )}
      </div>
    </motion.div>
  );
};