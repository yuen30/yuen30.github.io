"use client";

import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Somchai Jaidee",
    role: "CTO",
    company: "TechSolutions Co.",
    content: "Taweechai delivered exceptional results for our ERP system integration. His expertise in both backend architecture and industrial IoT solutions was invaluable to our project success.",
    rating: 5
  },
  {
    id: 2,
    name: "Nattapong Boonchom",
    role: "Project Manager",
    company: "Manufacturing Plus Ltd.",
    content: "Working with Taweechai on our real-time PLC dashboard was a game-changer. He understood our complex requirements and delivered a solution that exceeded expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Siriporn Wangdee",
    role: "Operations Director",
    company: "LogiChain Solutions",
    content: "The WMS system Taweechai developed for us improved our warehouse efficiency by 40%. His attention to detail and problem-solving skills are remarkable.",
    rating: 5
  },
  {
    id: 4,
    name: "Anuchit Promsombat",
    role: "Lead Developer",
    company: "Digital Innovations",
    content: "Taweechai's deep knowledge of Odoo ERP customization helped us implement complex MRP and BOM modules efficiently. Highly recommended!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Client <span className="text-indigo-400">Testimonials</span></h2>
          <p className="text-white/50 max-w-xl">
            Hear what clients and colleagues say about working with me.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 relative"
          >
            <Quote className="absolute top-4 right-4 text-indigo-400/30 w-8 h-8" aria-hidden="true" />
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-white/20"
                  }`}
                  aria-label={i < testimonial.rating ? "Filled star" : "Empty star"}
                />
              ))}
            </div>
            <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};