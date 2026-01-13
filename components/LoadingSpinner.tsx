"use client";

import React from "react";
import { motion } from "motion/react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "md", 
  text,
  className = "" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-indigo-500/30 border-t-indigo-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-sm mt-3"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Skeleton loader for cards
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-white/10 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded"></div>
          <div className="h-3 bg-white/10 rounded w-5/6"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-6 bg-white/10 rounded-full w-16"></div>
          <div className="h-6 bg-white/10 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  );
};

// Page loading overlay
export const PageLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <h3 className="text-white text-lg font-semibold mb-2">Loading Portfolio</h3>
          <p className="text-white/60">Preparing something amazing...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Section loading state
export const SectionLoader: React.FC<{ 
  title: string;
  description?: string;
  className?: string;
}> = ({ title, description, className = "" }) => {
  return (
    <section className={`py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-white/10 rounded w-64 mx-auto mb-4 animate-pulse"></div>
          {description && (
            <div className="h-6 bg-white/10 rounded w-96 mx-auto animate-pulse"></div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};