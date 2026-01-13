"use client";

import { motion } from "motion/react";
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-indigo-400">Touch</span>
            </h2>
            <p className="text-white/50 max-w-xl">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form below.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </motion.section>
  );
}
